import React , {useEffect, useState} from 'react'
import '../FrontSection/front.css'

import { Link } from 'react-scroll';



import bg1 from '../../images/HomePage/background1.png';
import bg2 from '../../images/HomePage/background2.png';
import bg3 from '../../images/HomePage/background3.png';
import bg4 from '../../images/HomePage/background4.png';
import bg5 from '../../images/HomePage/background5.png';
import bg6 from '../../images/HomePage/background6.png';
import bg7 from '../../images/HomePage/background7.png';
import bg8 from '../../images/HomePage/background8.png';
import bg9 from '../../images/HomePage/background9.png';

import OSLogo from '../../images/OpenseaIcon.png';
import TLogo from '../../images/TwitterIcon.png';
import DLogo from '../../images/DiscordIcon.png';


const FrontSection = () => {

  const [offset, setOffset] = useState()

  const handleScroll= () => setOffset(window.pageYOffset)

  useEffect(()=> {
  window.addEventListener('scroll' , handleScroll);

  return ()=> window.removeEventListener('scroll', handleScroll);

  },[]);

 



  
  return (
    
    <div className='FrontApp'>
      <div className='Zoom'>
        <Link to="about" smooth={true} duration={1000} spy={true} exact='true' offset={-60}><div className='arrowbox'> <div className="arrow">  
          <span></span>
          <span></span>
          <span></span>
        </div></div></Link>

        <img src={bg1} alt='' id='bg1' 
          style={{ bottom: `-${0 + offset * 0.06 + '%'}`} } 
        />

        <img src={bg9} alt='' id='bg9' 
        style={{left: `-${0 + offset * 0.02 + '%'}` , bottom: `-${0 + offset * 0.06 + '%'}`}}
        />
         <img src={bg5} alt='' id='bg5' 
        style={{left: `-${0 + offset * 0.003 + '%'}` , bottom: `-${0 + offset * 0.06 + '%'}`}}
        />
        <img src={bg2} alt='' id='bg2' 
        style={{bottom: `-${0 + offset * 0.08 + '%'}`} }
        />
        <img src={bg3} alt='' id='bg3' 
        style={{left: `-${0 + offset * 0.01 + '%'}` , bottom: `-${0 + offset * 0.06 + '%'}`}}
        />
        <img src={bg4} alt='' id='bg4' 
        style={{right: `-${0 + offset * 0.01 + '%'}` , bottom: `-${0 + offset * 0.06 + '%'}`} } 
        />
       
        <img src={bg6} alt='' id='bg6' 
        style={{left: `-${0 + offset * 0.02 + '%'}` , bottom: `-${0 + offset * 0.08 + '%'}`}}
        
        />
        <img src={bg7} alt='' id='bg7' 
        style={{right: `-${0 + offset * 0.01 + '%'}`  ,bottom: `-${0 + offset * 0.08 + '%'}` }}
        />
        <img src={bg8} alt='' id='bg8' 
        style={{right: `-${0 + offset * 0.02 + '%'}` , bottom: `-${0 + offset * 0.08 + '%'}`}}
        />
        
      

        
      </div>
      <div id='FrontContent' style={{transform: `translateX(${offset * 0.8 }px)`}} >
        <div id='heading' >
          
          <p > &#9001;&#9001; in the clouds...&#12297;&#12297;</p>
        </div>
        
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
                        
      </div>
     
  
  )
}

export default FrontSection