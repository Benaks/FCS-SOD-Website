import React, { useState } from 'react';
import QandA from '../QandA/QandA';
import Card from '../Departments/Card/Card';
import { Link } from 'react-router-dom';
import DeptImg from '../../assets/pick.jpg';

const Departments = () => {

  const [cards] = useState([
      { dept: 'Wealth and Craftsmanship (WAC)', desc: 'Focuses on financial stewardship and enhancing creative skills, integrating them into a holistic approach for effective management.' },
      { dept: 'Doctrinal Dialects and Polemics (DDP)', desc: 'Explores various theological debates, helping students understand and navigate diverse doctrinal expressions within the Christian faith.' },
      { dept: 'Governance and Administration (GAA)', desc: 'Teaches key principles of leadership and organizational management, with a specific focus on applications within faith-based contexts.' },
      { dept: 'Pneumatology and Proseuche (PAP)', desc: 'Studies the role of the Holy Spirit and various prayer practices, deepening spiritual understanding and engagement.' },
      { dept: 'Ecclesiology and Ecumenism (EAE)', desc: 'Examines the structure of the Church and efforts to promote unity among different Christian denominations worldwide.' },
      { dept: 'Witnessing and Purposeful Living (WPL)', desc: 'Encourages students to live out their faith through personal testimony and purposeful actions that reflect Christian values.' },
      { dept: 'Kingdom Artistry (KA)', desc: 'Promotes the use of artistic expressions, such as music and visual arts, to glorify and expand God’s Kingdom.' },
      { dept: 'Covenant Relationship (CR)', desc: 'Investigates the significance and dynamics of covenant relationships, emphasizing their role and importance within the Christian faith.' },
  ]);

  return (
    <div className='py-40 px-[5vw]'>
      {/* Heading */}
      <div className='flex flex-col text-center py-10 justify-center items-center'>
        <p className='font-bold text-accent'>DEPARTMENTS</p>
        <h1 className='text-secondary  text-[1.5em]  md:text-[2em] dark:text-secondary'>Prayerfully pick a department to enroll</h1>
      </div>

      {/* Department cards */}
      <div className='flex flex-col gap-5 justify-center md:flex-row md:flex-wrap'>
        <div className='w-full md:w-1/3 lg:w-1/4 '>
          <img src={DeptImg} alt="" className='w-full h-auto rounded-md shadow-lg'/>
        </div>

        {cards.map((card, index) => (
          <div key={index} className='bg-gray-200 w-full md:w-1/3 lg:w-1/4 p-5 rounded-md shadow-lg'>
            <h1 className='font-bold text-secondary text-[1.2em]'>{card.dept}</h1>
            <p className='my-4'>{card.desc}</p>
            <Link to='/register'>
              <button
                className='bg-accent text-white p-2 rounded-md hover:bg-secondary duration-300 hover:ease-in-out'
              >
                Register
              </button>
            </Link>
          </div>
        ))}
      </div>
      
     
      
    </div>
  );
}

export default Departments;
