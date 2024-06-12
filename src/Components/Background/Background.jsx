import video from '../../assets/video.mp4'
import slide1 from '../../assets/slide3.jpg'
import slide2 from '../../assets/slide2.jpg'
import slide3 from '../../assets/slide1.jpg'
import './Background.css'





const Background = ({playStatus, heroCount} ) => {
 
    if (playStatus) {
        return (
            <video autoPlay loop muted fade-in className='background '>
                <source src={video}  type = 'video/mp4'/>
           </video>
        )
    }
    
   else if (heroCount === 0) {
        return <img src={ slide1}  className='background fade-in transition ease-in-out '/>
    } 
        
   else if (heroCount === 1) {
        return <img src={ slide2} className='background fade-in transition ease-in-out' />
        } 


   else if (heroCount === 2) {
        return <img src={ slide3} className='background fade-in transition ease-in-out' />
        } 


}

export default Background
