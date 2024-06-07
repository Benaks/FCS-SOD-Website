import React from 'react';
import Nenrot from './img/NentorIMG.jpg'
import Enoch from './img/EnochIMG.jpg'
import PromiseA from './img/PromiseIMG.jpg'
import Daodu from './img/DaoduIMG.jpg'
const testimonials = [
    {
      image: Daodu,
      name: 'Michael Daodu',
      level: '200L',
      testimony: 'SOD Class of intimacy and supernatural nurtured my mind, body, and spirit, reigniting my passion for life and deepening my spiritual connection.',
    },
    {
      image: PromiseA,
      name: 'Promise Amma',
      level: '300L',
      testimony: 'Attending SOD has deepened my understanding of my life’s purpose and faith, truly preparing me for my destiny.',
    },
    {
      image:Enoch,
      name: 'Oladeji Enoch Victor',
      level: '400L',
      testimony: 'SOD refined my mind towards the concept of ethics, communication, purpose, finance and spirituality. It exposed me holistically about life.',
    },
    {
      image:Nenrot,
      name: 'Msugh Favour Nenrot',
      level: '500L',
      testimony: 'From 100 to 500 level, each SOD class reshaped my thoughts, aligning with my life seasons, fostering intentional learning and growth.',
    },
  ];

const Testimonial = () => {
  return (
      <div className='bg-white'>
            {/* heading */}
            <div className='bg-white dark:bg-primary px-[10vw] tect-center dark:text-white flex flex-col justify-center items-center py-14'>
                     <p className='font-bold text-accent'>TESTIMONIALS</p>
                    <h1 className='text-3xl py-2 font-bold text-secondary'>Testimony from Past students</h1>
             
                  </div>
                  
           <div className="flex flex-col items-center justify-center p-6 space-y-6 md:flex-row md:space-y-0 md:space-x-6">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="max-w-sm p-4 bg-white rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <img
              className="w-20 h-20 rounded-full"
              src={testimonial.image}
              alt={`${testimonial.name}'s profile`}
            />
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-accent">{testimonial.name}</h3>
              <p className="text-secondary">{testimonial.level}</p>
            </div>
          </div>
          <p className="text-gray-600">{testimonial.testimony}</p>
        </div>
      ))}
    </div>
      </div>
  );
};

export default Testimonial;
