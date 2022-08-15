import React from 'react'
import bg1 from '../../images/HeroImage/bgcloud0.png'
import bg2 from '../../images/HeroImage/bgcloud1.png'
import bg3 from '../../images/HeroImage/bgcloud2.png'
import bg4 from '../../images/HeroImage/bgcloud3.png'
import bg5 from '../../images/HeroImage/bgcloud4.png'
import bg7 from '../../images/HeroImage/bgcloud5.png'
import bg6 from '../../images/HeroImage/shootingStar2.png'



import OSLogo from '../../images/OpenseaIcon.png';
import TLogo from '../../images/TwitterIcon.png';
import DLogo from '../../images/DiscordIcon.png';

import '../HeroSection/Herocss.css'

import { Link } from 'react-scroll';


import { HeroContainer, HeroBg, ImgBg, ImgBg2, ImgBg3, ImgBg4,ImgBg5, ImgBg6 , ImgBg7} from './HeroElements'




const HeroSection = () => {
  return (
    <HeroContainer>
        <HeroBg>

                    
            <ImgBg  src={bg1} type='image/png' />

            <ImgBg6 src={bg6} type='image/png'/>
            <ImgBg7 src={bg7} type='image/png' />

            <ImgBg2 src={bg2} type='image/png'/>
            <ImgBg3 src={bg3} type='image/png'/>

            
            <ImgBg5 src={bg5} type='image/png' />
            <ImgBg4 src={bg4} type='image/png' />
            
            
            
    

        </HeroBg>
        
        <Link to="about" smooth={true} duration={1000} spy={true} exact='true' offset={-60}>
        <div className="arrow">  
          <span></span>
          <span></span>
          <span></span>
        </div>
        </Link>
        <div className='Word'>
            <p > In The</p>
            <h1>Clouds</h1>
        </div>
        <div className="SocialIconWrap">

        <div className="SocialIcon">
        <a href="//www.opensea.io" target="_blank" aria-label="OpenSea" rel="noreferrer" >
          <img src={OSLogo} alt="openseaLogo" width="30px" />
          </a>
        </div>

        <div className="SocialIcon">
        <a href="//www.twitter.com/WGMIPsycho" target="_blank" aria-label="Twitter" rel="noreferrer" >
            <img src={TLogo} alt="TwitterLogo" width="30px" />
        </a>
        </div>

        <div className="SocialIcon">
        <a href="//www.discord.com/invite/YZwQXbHksD" target="_blank" aria-label="Discord"  rel="noreferrer">
              <img src={DLogo} alt="DiscordLogo" width="30px" />
        </a>
        </div>
      
      </div>
    </HeroContainer>
  )
}

export default HeroSection