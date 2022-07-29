import React, { useState, useCallback } from 'react';
import Image from 'next/image';

const ContactUs = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-center items-center pt-10 min-h-screen">
      <div className="pb-10">
        <Image src="/assets/logo.svg" width={30} height={30} alt="logo" />
      </div>
      <h2 className="text-4xl font-bold">Contact us</h2>
    </div>
  );
};

export default ContactUs;
