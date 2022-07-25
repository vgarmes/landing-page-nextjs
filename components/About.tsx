import React from 'react';

const About = () => {
  return (
    <section className="flex flex-col bg-white py-20 text-3xl md:text-4xl">
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight">
          <strong>
            I&apos;m baby wolf squid you probably haven&apos;t heard of them pok
            pok.
          </strong>{' '}
          Kinfolk woke retro seitan paleo distillery swag snackwave lyft. Wolf
          DIY pop-up fingerstache, pinterest franzen poutine cold-pressed
          narwhal yr you probably haven&apos;t heard of them blue bottle small
          batch
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>Our team</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
          <div>member</div>
          <div>member</div>
          <div>member</div>
          <div>member</div>
          <div>member</div>
          <div>member</div>
          <div>member</div>
          <div>member</div>
          <div>member</div>
          <div>member</div>
        </div>
      </div>
    </section>
  );
};

export default About;
