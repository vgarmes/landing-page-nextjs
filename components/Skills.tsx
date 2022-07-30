import React from 'react';
import { ScrollContext } from '../utils/scroll-observer';

interface Props {
  commits: number;
}

const fallbackCommits = 20;

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const Skills: React.FC<Props> = ({ commits }) => {
  const { scrollY } = React.useContext(ScrollContext);
  const refContainer = React.useRef<HTMLDivElement>(null);

  const numOfPages = 3;
  let progress = 0;

  if (refContainer?.current) {
    const { clientHeight, offsetTop } = refContainer.current;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  const numOfCommits = Math.round(commits || fallbackCommits).toLocaleString();

  return (
    <div ref={refContainer} className="bg-black text-white">
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
        <div className="leading-[1.15]">
          <span
            className="transition-opacity duration-500"
            style={{ opacity: opacityForBlock(progress, 0) }}
          >
            This repo consists of {numOfCommits} commits
          </span>
          <span
            className="transition-opacity duration-500 inline-block after:content-['_']"
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            Gluten-free hashtag iPhone salvia squid austin chicharrones
            williamsburg kale.
          </span>
          <span
            className="transition-opacity duration-500 inline-block"
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            Af lo-fi migas shaman, readymade put a bird on it 8-bit.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
