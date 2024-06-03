import React from 'react'
import Img from '../../assets/slide1.jpg'
import { PiCertificateBold } from "react-icons/pi";

const Benefits = () => {
  return (
    <div className='bg-white py-20 px-[10vw]'>
          <div className='flex justify-center gap-10 items-center flex-col-reverse'>

              {/* image div */}
              <div className=' w-full'>
                  <img src={Img} alt=""/>
                
              </div>
              {/* card div */}
              <div className=' w-full'>
                  {/* heading */}
                  <div className='bg-white dark:bg-primary dark:text-white flex flex-col justify-center items-center py-14'>
                     <p className='font-bold text-accent'>WHY ENROLL</p>
                    <h1 className='text-3xl py-2 font-bold text-secondary'>Benefits of Enrolling for SOD</h1>
             
                  </div>
                  
                  {/* benefits */}
                  <div className=' flex flex-col gap-10 md:flex-row'>

                      
                      <div className='bg-primary/40 rounded-lg shadow-md flex p-10 hover:scale-105 duration-200 gap-4 '>
                          <div className=' flex justify-center '>
                          <PiCertificateBold className='text-7xl text-accent '/>
                          </div>

                          <div className=''>
                              <h1 className='text-[1.3em]  text-secondary font-bold'>
                              Guidance and Mentorship
                              </h1>
                              <p className='text-[0.8em]'>
                                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid error blanditiis in placeat sed assumenda ut adipisci ipsa quidem deserunt.
                              </p>
                          </div>
                      </div>


                      <div className='bg-primary/40 gap-4 rounded-lg shadow-md flex p-10 hover:scale-105 duration-200 '>
                          <div className=' flex justify-center '>
                          <PiCertificateBold className='text-7xl text-accent '/>
                          </div>

                          <div className=''>
                              <h1 className='text-[1.3em]  text-secondary font-bold'>
                              Spiritual Growth and Development
                              </h1>
                              <p className='text-[0.8em]'>
                                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid error blanditiis in placeat sed assumenda ut adipisci ipsa quidem deserunt.
                              </p>
                          </div>
                      </div>


                      <div className='bg-primary/40 rounded-lg shadow-md flex p-10 hover:scale-105 duration-200 gap-4 '>
                          <div className=' flex justify-center '>
                          <PiCertificateBold className='text-7xl text-accent '/>
                          </div>

                          <div className=''>
                              <h1 className='text-[1.3em]  text-secondary font-bold'>
                                  Certification
                              </h1>
                              <p className='text-[0.8em]'>
                                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid error blanditiis in placeat sed assumenda ut adipisci ipsa quidem deserunt.
                              </p>
                          </div>
                      </div>
                      





                  </div>
      
              </div>
      </div>
    </div>
  )
}

export default Benefits
