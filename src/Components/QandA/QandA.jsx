import Aos from 'aos';
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
  

const QandA = () => {
  // aos init
  useEffect(() => {
        Aos.init()
    }, [])

  return (
      <div className='bg-white dark:bg-primary dark:text-secondary flex py-20 flex-col justify-center items-center px-[10vw] text-center'>
           
      <div className='flex flex-col justify-center items-center'>
              <p className='font-bold text-accent'>Q&A</p>
               <h1   className='text-secondary font-semibold text-[1em] md:text-[2em] dark:text-secondary'>Likely questions you might ask..</h1>
          </div>
          
          
          <div className='bg-white dark:bg-primary dark:text-secondary  my-10'>
      <Accordion type="single" collapsible>
  <AccordionItem  value="item-1">
    <AccordionTrigger>What is the School of Destiny?</AccordionTrigger>
    <AccordionContent>
    The School of Destiny is a Christian educational program designed to equip individuals with the knowledge, skills, and spiritual growth necessary to fulfill their God-given purpose. Through a combination of theological education,
    </AccordionContent>
  </AccordionItem>
  <AccordionItem  value="item-1">
    <AccordionTrigger>Who can enroll in the School of Destiny?</AccordionTrigger>
    <AccordionContent>
    Our program is open to anyone seeking to deepen their faith, develop leadership skills, and grow spiritually. Whether you are a student, young professional, or someone looking to strengthen your Christian walk, you are welcome to join us
    </AccordionContent>
  </AccordionItem>
  <AccordionItem   value="item-1">
    <AccordionTrigger>What courses are offered?</AccordionTrigger>
    <AccordionContent>
    We offer a variety of courses covering topics such as Biblical studies, Christian leadership, theology, discipleship, and spiritual formation. Each course is designed to provide a comprehensive understanding of the subject matter while encouraging practical application in daily life
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-1">
    <AccordionTrigger>How long is the program?</AccordionTrigger>
    <AccordionContent>
    The duration of the program varies depending on the level and intensity of the courses you choose to take. We offer both short-term and long-term programs to accommodate different schedules and commitments. Typically, programs can range from a few weeks to a full academic year.
    </AccordionContent>
  </AccordionItem>
</Accordion>

    </div>
   </div>
  )
}

export default QandA
