// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  commits: number;
};

const ghAccounts: { readonly [username: string]: number } = {
  vgarmes: 1,
  // add more usernames that contributed if needed
};

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

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const commits = await getNumOfCommits();
  res.status(200).json({ commits });
}
