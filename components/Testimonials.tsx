import React from 'react';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';
import Review from './Review';
import { testimonials } from '../data';

const Testimonials = () => (
  <section className="bg-white">
    <div className="flex flex-col justify-center items-center">
      <div className="container mx-auto lg:max-w-[70%] lg:px-10 py-16 md:py-32">
        <h3 className="text-3xl lg:text-4xl tracking-tight text-center px-10 leading-[3.5rem]">
          Meggings austin marfa green juice sartorial edison bulb flexitarian
          enamel pin street art iPhone williamsburg cornhole aesthetic jean
          shorts affogato.
        </h3>
      </div>
    </div>
    <Carousel className=" bg-black text-white py-10 lg:py-20">
      {testimonials.map((t, index) => (
        <CarouselItem key={index} index={index}>
          <Review by={t.name}>{t.review}</Review>
        </CarouselItem>
      ))}
    </Carousel>
    <div className="flex-1 bg-black"></div>
  </section>
);

export default Testimonials;
