import './Background.css'

import bike from '../../assets/bike.mp4'
import image1 from '../../assets/img1.jpg'
import image2 from '../../assets/img2.jpg'
import image3 from '../../assets/img3.jpg'

const Background=({PlayStatus,HeroCount})=>{
  if(PlayStatus){
    return(
      
        <video className="background fade-in" autoPlay loop muted>
        <source src={bike} type="video/mp4" />
      </video>
     
    )
  }
  else if(HeroCount===0){
    return(

        <img  className="background fade-in" src={image1} alt="background" />
    )
  }
  else if(HeroCount===1){
    return(

        <img  className="background fade-in" src={image2} alt="background" />
    )
  }
  else if(HeroCount===2){
    return(

        <img  className="background fade-in" src={image3} alt="background" />
    )
  }
}
export default Background;