import React from 'react'

import bg6 from '../../images/HeroImage/shootingStar2.png'
import bg8 from '../../images/HeroImage/shootingStar.png'

import cover from '../../images/HeroCoverBG.webp'



import OSLogo from '../../images/OpenseaIconBlack.webp';
import TLogo from '../../images/TwitterIconBlack.webp';
import DLogo from '../../images/DiscordIconBlack.webp';

import '../HeroSection/Herocss.css'

import { Link } from 'react-scroll';


import { HeroContainer, HeroBg, ImgBg,  ImgBg6 ,  ImgBg8} from './HeroElements'




const HeroSection = () => {
  return (
    <HeroContainer>
        <HeroBg>

            <ImgBg src={cover} type='image/jpg' />


            <ImgBg8 src={bg8} type='image/png' />
            <ImgBg6 src={bg6} type='image/png'/>
            
             
            
            
    

        </HeroBg>
        
        <Link to="about" smooth={true} duration={1000} spy={true} exact='true' offset={-58}>
        <div className="arrow">  
          <span></span>
          <span></span>
          <span></span>
        </div>
        </Link>
        <div className='Word'>
            <p > In The</p>
            <h1>Clouds</h1>
            <div className="description">A "Legacy" Art Collection by @WGMIPsycho</div>
        </div>
        <div className="SocialIconWrap">

        <div className="SocialIcon">
        <a href="https://opensea.io/collection/inthecloudsbypsycho" target="_blank" aria-label="OpenSea" rel="noreferrer" >
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