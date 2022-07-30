// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  commits: number;
  downloads: number;
};

const ghAccounts: { readonly [username: string]: number } = {
  vgarmes: 1,
  // add more contributors if needed
};

const packages = ['react']; // add more packages if needed

const ghAuthUsername = process.env['GITHUB_USERNAME'] || '';
const ghAuthToken = process.env['GITHUB_PERSONAL_ACCESS_TOKEN'] || '';

async function getNumOfCommits() {
  try {
    const baseUrl = `https://api.github.com/repos/vgarmes/landing-page-nextjs/commits`;
    let num = 0;
    await Promise.all(
      Object.keys(ghAccounts).map(async (username) => {
        const perPage = 100;
        const startPage = ghAccounts[username];
        num += (startPage - 1) * perPage;
        for (let page = startPage; page < 100; ++page) {
          const { data: commits } = await axios.get(baseUrl, {
            params: {
              author: username,
              since: '2022-01-01',
              per_page: perPage,
              page,
            },
            auth: {
              username: ghAuthUsername,
              password: ghAuthToken,
            },
          });
          num += commits.length;
          if (commits.length < perPage) break;
        }
      })
    );
    return num;
  } catch (error) {
    console.error(error);
    return 0;
  }
}

async function getNumOfDownloads() {
  try {
    const since = new Date(+new Date() - 365 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split('T')[0];
    const now = new Date().toISOString().split('T')[0];
    const baseUrl = `https://api.npmjs.org/downloads/point/${since}:${now}`;
    const url = `${baseUrl}/${packages.join(',')}`;
    const { data: stats } = await axios.get(url);

    // if more than one package is requested, npm api returns an array
    if (packages.length > 1) {
      return Object.keys(stats).reduce(
        (num, key) => num + stats[key].downloads,
        0
      );
    }
    return stats.downloads;
  } catch (error) {
    console.error(error);
    return 0;
  }
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const [downloads, commits] = await Promise.all([
    getNumOfDownloads(),
    getNumOfCommits(),
  ]);

  // cache it for a day
  res.setHeader('Cache-Control', 's-maxage=86400');
  res.status(200).json({ downloads, commits });
}
