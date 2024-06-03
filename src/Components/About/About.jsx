import React from 'react';
import Dom1 from '../../../src/assets/slide3.jpg';

import { PiCertificateBold } from "react-icons/pi";
import { FaQuoteLeft } from "react-icons/fa";

const About = () => {
  return (
    <div className='bg-white  md:px-[10vw] py-40 px-[5vw] md:py-40'>
      {/* heading */}
      <div className='bg-white dark:bg-primary dark:text-white flex flex-col justify-center items-center py-10 md:py-14'>
        <p className='font-bold text-accent'>ABOUT</p>
        <h1 className='text-2xl md:text-3xl py-2 font-bold text-secondary'>Brief History of SOD</h1>
      </div>

      {/* benefits */}
      <div className='flex flex-col gap-10 md:flex-row'>
        <div className='bg-primary/40 rounded-lg shadow-md flex justify-center items-center p-5 gap-4'>
          <img src={Dom1} alt="" className='w-full h-auto rounded-lg' />
        </div>

        <div className='bg-primary/40 rounded-lg shadow-md flex p-5 gap-2'>
          <div className='w-[20%] flex justify-center'>
            <FaQuoteLeft className='text-4xl md:text-7xl text-gray-300' />
          </div>

          <div className='w-[80%]'>
            <h1 className='text-[1.1em] md:text-[1.3em] text-secondary font-bold'>
              Vision & Mission
            </h1>
            <p className='text-[0.8em] md:text-[0.9em]'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid error blanditiis in placeat sed assumenda ut adipisci ipsa quidem deserunt.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid error blanditiis in placeat sed assumenda ut adipisci ipsa quidem deserunt.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid error blanditiis in placeat sed assumenda ut adipisci ipsa quidem deserunt.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid error blanditiis in placeat sed assumenda ut adipisci ipsa quidem deserunt.
            </p>
          </div>
        </div>
      </div>

      <div className='mt-10 flex justify-center'>
        <button className='bg-accent p-2 text-white font-semibold rounded-lg'>
          <a href="https://getdp.co/Xeu">Generate ID Card</a>
        </button>
      </div>
    </div>
  );
}

export default About;
