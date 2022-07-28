import React from 'react';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';
import Review from './Review';
import { testimonials } from '../data';

const Testimonials = () => (
  <Carousel className="bg-black text-white py-10 lg:py-20">
    {testimonials.map((t, index) => (
      <CarouselItem key={index} index={index}>
        <Review by={t.name}>{t.review}</Review>
      </CarouselItem>
    ))}
  </Carousel>
);

export default Testimonials;
