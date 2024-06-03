import React from 'react';
import Favour from './img/favour.jpg'
const testimonials = [
    {
      image: 'https://via.placeholder.com/150',
      name: 'John Doe',
      level: '200L',
      testimony: 'This is an amazing platform! I have learned so much.',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Jane Smith',
      level: '300L',
      testimony: 'The courses are well structured and easy to follow.',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: '400L',
      level: 'Advanced',
      testimony: 'I love the advanced topics covered here, it’s really insightful!',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Favour Nenrot',
      level: '500',
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
              src={Favour}
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
