import Marquee from 'react-fast-marquee'

import { PiCertificateBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
function PartnersMarquee() {
  return (
      <div>
      
      <div className='bg-white dark:bg-primary py-4 px-[10vw]'>
        <Marquee
          play='true'
          gradient='true'
          gradientColor='white'
                 >
                      

          <div className='mr-32 flex gap-5'>
                   <PiCertificateBold className='text-7xl text-gray-500 '/>
                           <div className='flex flex-col font-bold '>
                                <p className='text-3xl text-secondary'>3000+</p>
                                <p className='text-accent'>SUCCESS STORIES</p>
                           </div>
          </div>
         
                      

          <div className='mr-32 flex gap-5'>
                   <GiTeacher className='text-7xl text-gray-500 '/>
                           <div className='flex flex-col font-bold '>
                                <p className='text-3xl text-secondary'>30+</p>
                                <p className='text-accent'>TRUSTED TUTORS</p>
                           </div>
          </div>
         

          <div className='mr-32 flex gap-5'>
                   <FaBookOpenReader className='text-7xl text-gray-500 '/>
                           <div className='flex flex-col font-bold '>
                                <p className='text-3xl text-secondary'>8</p>
                                <p className='text-accent'>COURSE CLASSES</p>
                           </div>
          </div>
         
     
          <div className='mr-32 flex gap-5'>
                   <FaBook className='text-7xl text-gray-500 '/>
                           <div className='flex flex-col font-bold '>
                                <p className='text-3xl text-secondary'>FREE</p>
                                <p className='text-accent'>STUDY MATERIALS</p>
                           </div>
          </div>
         
     

                      
        </Marquee>
      </div>
    </div>
  )
}

export default PartnersMarquee