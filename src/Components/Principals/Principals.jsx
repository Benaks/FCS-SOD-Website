import React from 'react'
import Dom1 from './img/Yusuf2.jpg'
import Dom2 from './img/Yusuf2.jpg'
import { PiCertificateBold } from "react-icons/pi";
import { FaQuoteLeft } from "react-icons/fa";

function Principals() {
  return (
    <div className='bg-white px-[10vw]'>
          {/* heading */}
          <div className='bg-white dark:bg-primary dark:text-white flex flex-col justify-center items-center py-14'>
                     <p className='font-bold text-accent'>INTODUCTION</p>
                    <h1 className='text-3xl py-2 font-bold text-secondary'>Note from the Principals</h1>
             
            </div>

    {/* benefits */}
            <div className=' flex flex-col gap-10 md:flex-row'>

                      
<div className='bg-primary/40 rounded-lg shadow-md flex p-5  gap-4 '>
    <div className='w-[50%] flex justify-center '>
    <img src={Dom1} alt="" className=''/>
    </div>

    <div className='w-[50%]'>
    <img src={Dom2} alt="" />
    </div>
</div>


<div className='bg-primary/40 rounded-lg shadow-md flex p-5  gap-2'>
    <div className='w-[20%] flex justify-center '>
    <FaQuoteLeft className='text-7xl text-gray-300 '/>
    </div>

    <div className='w-[80%]'>
        <h1 className='text-[1.3em]  text-secondary font-bold'>
        Spiritual Growth and Development
        </h1>
        <p className='text-[0.8em]'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid error blanditiis in placeat sed assumenda ut adipisci ipsa quidem deserunt.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid error blanditiis in placeat sed assumenda ut adipisci ipsa quidem deserunt.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid error blanditiis in placeat sed assumenda ut adipisci ipsa quidem deserunt.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid error blanditiis in placeat sed assumenda ut adipisci ipsa quidem deserunt.
        </p>
    </div>
</div>







</div>
    </div>
  )
}

export default Principals
