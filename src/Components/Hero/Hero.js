import './Hero.css';
import arrow from '../../assets/arrow.png';
import arrow2 from '../../assets/arrow2.png';
const Hero = ({ HeroData, HeroCount, setHercount, setPlayStatus, PlayStatus }) => {
   
    if (!HeroData) {
        return null; 
    }

    return (
        <div className='Hero'>
            <div className='text'>
                <p>{HeroData.text1}</p>
                <p>{HeroData.text2}</p>
            </div>
            <div className='Explore'>
                <p>Explore the Bike-Evolution</p>
                <img src={arrow} alt='arrow' />
            </div>
            <div className='dot'>
                <ul className='hero-dots'>
                    <li onClick={() => setHercount(0)} className={HeroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => setHercount(1)} className={HeroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => setHercount(2)} className={HeroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
                </ul>
                <div className='play'>
                    <img 
                        onClick={() => setPlayStatus(!PlayStatus)} 
                        src={arrow2} 
                        alt={PlayStatus ? 'Pause Video' : 'Play Video'}
                    />
                    <p>See the video</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
