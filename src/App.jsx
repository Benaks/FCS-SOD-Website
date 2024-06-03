import { useEffect, useState } from "react"
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from './Components/Hero/Hero';
import QandA from "./Components/QandA/QandA";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Partners from "./Components/Partners/Partners";
import Benefits from "./Components/Benefits/Benefits";
import Principals from "./Components/Principals/Principals";
import Testimonial from "./Components/Testimonials/Testimonial";


const App = () => {
  // aos init
  useEffect(() => {
    Aos.init()
}, [])


  let heroData = [
    {text1:'Manifesting the life of the spirit,', text2:'Embrace the journey of self-discovery and inner peace. Manifesting the life of the spirit means awakening to your true potential, finding harmony within, and living with purpose and mindfulness. Join us in exploring the depths of spiritual growth and enlightenment'},
    {text1:'Its SOD24', text2:'Prepare for the journey ahead with faith and strength. Equipping men for the future means nurturing a steadfast heart, grounded in the teachings of Christ, ready to face life challenges with courage and wisdom. Join us in '},
    {text1:'The outpouring of the spirit', text2:'Experience the transformative power of God love. The outpouring of the Spirit brings renewal, guidance, and an unshakeable faith. Embrace the blessings of the Holy Spirit, allowing it to fill your heart and lead you on a path of divine purpose and spiritual fulfillment.'},
   
  ]
 
  
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
         return count ===2?0:count+1
       })
    }, 7000);
   },[])

  return (
    <div>
     

    
        <Background
        playStatus={playStatus}
        heroCount={heroCount}
      />
      <Navbar />
      
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
      
        <Partners />
        <Principals/>
      <Benefits/>
      <Testimonial/>
        <QandA />
   
       
    

      

    </div>
  )
}

export default App


// {/* <NavLink to='/' className={() =>
//   `block pr-4`
// }>
//        Home
//     </NavLink>
// </li> */}

// {
//   Links.map((link) => (
//       <li className={`md:ml-8 md:my-0 my-7 font-semibold `}>
//       <a href={link.link} className='text-accent hover:text-secondary duration-500  dark:text-secondary'>{link.name}</a>
//   </li>))
// }