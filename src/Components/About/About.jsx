import React from 'react';
import Sodbanner from '../About/img/sod-banner.jpg';

import { PiCertificateBold } from "react-icons/pi";
import { FaQuoteLeft } from "react-icons/fa";

const About = () => {
  return (
    <div className='bg-white  md:px-[10vw] py-40 px-[5vw] md:py-40'>
      {/* heading */}
      <div className='bg-white dark:bg-primary dark:text-white flex flex-col justify-center items-center py-10 md:py-14'>
        <p className='font-bold text-accent'>ABOUT</p>
        <h1 className='text-2xl md:text-3xl py-2 font-bold text-secondary'>About SOD'24</h1>
      </div>

      {/* benefits */}
      <div className='flex flex-col gap-10 lg:flex-row  justify-center items-center '>
        <div className='  bg-primary/40 lg:w-[40%] rounded-lg shadow-md flex justify-center items-center p-5 gap-4'>
          <img src={Sodbanner} alt="" className='w-full h-auto rounded-lg' />
        </div>

        <div className='  bg-primary/40 lg:w-[60%] rounded-lg shadow-md flex p-5 gap-2'>
          <div className='w-[10%] flex justify-center'>
            <FaQuoteLeft className='text-4xl md:text-7xl text-gray-300' />
          </div>

          <div className='w-[80%]'>
            <h1 className='text-[1.1em] md:text-[1.3em] text-secondary font-bold'>
              Vision & Mission
            </h1>
            <p className='text-[0.8em] md:text-[0.9em]'>
            This year's SOD 2024 program is dedicated to nurturing believers with the wisdom and life of God, enabling them to represent Him effectively in this world. As disciples of Christ, we understand that while we live in this world, we are not of it. This truth shapes our belief that anything derived solely from this world—be it culture, mindsets, systems, ideologies, beliefs, or principles—cannot be our standard. Instead, we follow the divine blueprint for holy living given by God.

Our core principle is rooted in the words of Jesus: "Man shall not live by bread alone, but by every word that proceeds from the mouth of God" (Matthew 4:4). The Word of God is the foundation of all creation, guiding our actions and decisions to ensure we live in a way that honors Him.

From an early age, we are taught the importance of the Holy Scriptures, as stated in 2 Timothy 3:15-17: "And that from childhood you have known the Holy Scriptures, which are able to make you wise for salvation through faith which is in Christ Jesus. All Scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness, that the man of God may be complete, thoroughly equipped for every good work."

The mission of SOD 2024 is to thoroughly equip believers with God's Word. We address various aspects of life, including purpose, ensuring that each believer is ready to manifest God's wisdom and life in every situation. This mission is carried out under the guidance and empowerment of the Holy Spirit.

Join us in SOD 2024 as we embark on a journey of spiritual growth and empowerment. Together, we will explore the depths of God’s Word, aiming to understand and apply its truths to our lives. Welcome to a transformative program where we endeavor to reflect the wisdom and life of God in all that we do.
            </p>
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default About;
