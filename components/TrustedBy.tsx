import React from 'react';
import ClientLogos from './ClientLogos';

const TrustedBy = () => {
  return (
    <section className="bg-white flex flex-col justify-center gap-16 md:gap-32">
      <div className="flex-1"></div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-xl mb-10 font-bold text-center">
          <span className="whitespace-nowrap">Trusted by</span>{' '}
          <span className="whitespace-nowrap">some of the brands you know</span>
        </h3>
        <ClientLogos />
      </div>
    </section>
  );
};

export default TrustedBy;
