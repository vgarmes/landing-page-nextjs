import React from 'react';
import Image from 'next/image';
import SliderContainer, { SliderItem } from './Slider';

const ClientLogos = () => (
  <>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={150}>
        <Image
          src="/assets/logos/shopify.png"
          width={150}
          height={50}
          alt="shopify logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/logos/shopify.png"
          width={150}
          height={50}
          alt="shopify logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/logos/shopify.png"
          width={150}
          height={50}
          alt="shopify logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/logos/shopify.png"
          width={150}
          height={50}
          alt="shopify logo"
          objectFit="contain"
        />
      </SliderItem>
    </SliderContainer>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={150}>
        <Image
          src="/assets/logos/shopify.png"
          width={150}
          height={50}
          alt="shopify logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/logos/shopify.png"
          width={150}
          height={50}
          alt="shopify logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/logos/shopify.png"
          width={150}
          height={50}
          alt="shopify logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/logos/shopify.png"
          width={150}
          height={50}
          alt="shopify logo"
          objectFit="contain"
        />
      </SliderItem>
    </SliderContainer>
  </>
);

export default ClientLogos;
