import React, { useState } from 'react';
import { useEffect } from 'react';
import Background from './Components/Background/Background';
import './App.css';
import Nav from './Components/Navbar/Nav';
import Hero from './Components/Hero/Hero';

const App = () => {
    const HeroData = [
        { text1: "Benelli", text2: "TRK 502" },
        { text1: "Suzuki", text2: "GSX-R" },
        { text1: "Yamaha", text2: "YZF-R1" },
    ];

    const [HeroCount, setHeroCount] = useState(2);
    const [PlayStatus, setPlayStatus] = useState(false);

    useEffect(()=>{
        setInterval(()=>{
            setHeroCount((count)=>{return count===2?0:count+1})
        },3000)
    },[])
    return (
        <div>
            <Background PlayStatus={PlayStatus} HeroCount={HeroCount} />
            <Nav />
            <Hero
                setPlayStatus={setPlayStatus}
                HeroCount={HeroCount}
                HeroData={HeroData[HeroCount]}
                PlayStatus={PlayStatus}
                setHercount={setHeroCount}
            />
        </div>
    );
}

export default App;
