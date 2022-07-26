import Image from 'next/image';
import React from 'react';
import { Tile, TileBackground, TileContent, TileWrapper } from './Tile';
import {
  WorkBackground,
  WorkContainer,
  WorkLeft,
  WorkLink,
  WorkRight,
} from './Work';

const Works = () => {
  return (
    <TileWrapper numOfPages={3}>
      <TileBackground>
        <WorkBackground />
      </TileBackground>
      <TileContent>
        <Tile
          page={0}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div>We make</div>
                <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                  <WorkLink href="http://www.example.com">lo-fi music</WorkLink>
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  src="/assets/iphone1.png"
                  layout="responsive"
                  width={840}
                  height={1620}
                  alt="work"
                />
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
      </TileContent>

      <TileContent>
        <Tile
          page={1}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div>We developed</div>
                <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                  <WorkLink href="http://www.example.com">
                    koala&apos;s
                  </WorkLink>{' '}
                  app
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  src="/assets/iphone2.png"
                  layout="responsive"
                  width={840}
                  height={1620}
                  alt="work"
                />
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
      </TileContent>

      <TileContent>
        <Tile
          page={2}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div>We help</div>
                <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                  the community
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <Image
                  src="/assets/iphone3.png"
                  layout="responsive"
                  width={840}
                  height={1620}
                  alt="work"
                />
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
      </TileContent>
    </TileWrapper>
  );
};

export default Works;
