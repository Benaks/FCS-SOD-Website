import React from 'react'
import Dom1 from './img/Daniel.jpg'
import Dom2 from './img/Elvis.jpg'
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

                      
<div className='  flex items-center justify-center md:flex-col p-5 md:w-[30%] gap-4 '>
    <div className='flex justify-center bg-primary/40 rounded-lg '>
    <img src={Dom1} alt="" className='w-[200px] h-[200px] rounded-md shadow-lg z-0 sm:w-[200px]  sm:h-[200px]'/>
    </div>

    <div className=''>
    <img src={Dom2} alt="" className=' w-[200px] h-[200px] rounded-md shadow-lg'/>
    </div>
</div>


<div className='bg-primary/40 rounded-lg shadow-md flex p-5 md:w-[70%]  gap-2'>
    <div className='w-[5%] flex justify-center '>
    <FaQuoteLeft className='text-7xl text-gray-300 '/>
    </div>

    <div className='w-[95%]'>
        <h1 className='text-[1.3em]  text-secondary font-bold'>
      
Welcome to SOD 2024: "Manifesting the Life of the Spirit." 
        </h1>
        <p className='text-[0.8em] lg:text-[1em]'>
            {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid error blanditiis in placeat sed assumenda ut adipisci ipsa quidem deserunt.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid error blanditiis in placeat sed assumenda ut adipisci ipsa quidem deserunt.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid error blanditiis in placeat sed assumenda ut adipisci ipsa quidem deserunt.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid error blanditiis in placeat sed assumenda ut adipisci ipsa quidem deserunt. */}
       
       In as much as we walk in this world, we are not of this world, and by implication that means anything that finds it's origin or source in this world alone is not a standard by which we as believers should live, be it  culture,mindsets, systems, ideologies, beliefs, principles- if it is not in accordance with the designated template for holy living, then it against God and Godliness. God however did not live us in the dark as to how we ought to live and where we can find this instructions for Godly living-"man shall not live by bread alone but by EVERY WORD THAT PROCEEDS FROM THE MOUTH OF GOD".(Mathew 4:4)- his very own word, without which nothing that was made would have been made is that designated template that guides our actions and decisions to ensure our effective representation of him in this world.

"And that from childhood you have known the Holy Scriptures, which are able to make you WISE for salvation through faith which is in Christ Jesus.
All Scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness, THAT THE MAN OF GOD MAY BE COMPLETE, THOROUGHLY EQUIPPED FOR EVERY GOOD WORK".(2 Timothy 3:15-17)- Thorough equipping by the Word of God is what we seek to do in this years SOD,  regarding things pertaining to God and the believer and  different areas of living, including purpose unto the end that the believer manifests the wisdom and life of God wherever he or she is found, and this we would do by the Help of the Holy Ghost.

WELCOME TO SOD 2024 .

THE DIRECTORS OF MINISTRY.
        </p>
    </div>
</div>







</div>
    </div>
  )
}

export default Principals
