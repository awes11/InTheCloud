import React, { useEffect } from 'react'







import Aos from 'aos';
import 'aos/dist/aos.css';

import img1 from '../../images/cloud/pixil-layer-13.1.png'
import img2 from '../../images/cloud/pixil-layer-15.1.png'
import img3 from '../../images/cloud/pixil-layer-12.1.png'
import img4 from '../../images/cloud/pixil-layer-14.1.png'
import img5 from '../../images/cloud/pixil-layer-16.1.png'
import img6 from '../../images/cloud/pixil-layer-6.1.png'
import img7 from '../../images/cloud/pixil-layer-13.1.png'

import { TeamContainer, TeamH1, TeamWrapper, TeamCard, TeamH2, TeamP, ImgWrap, Img} from './TeamElements'

const Team = () => {


  useEffect(()=> {
    Aos.init({duration:1600});
},[]);

  return (
    <>
        <TeamContainer id="team" >
          <TeamH1 data-aos="fade-">FAQ</TeamH1>
          
          <TeamWrapper >
          
            
            <TeamCard data-aos="fade-right">
              
              <TeamH2>Why 'In The Clouds'?</TeamH2>
              <TeamP>In the Clouds is a "setting" for future things to come</TeamP>
            </TeamCard>
            <TeamCard data-aos="fade-left">
              
              <TeamH2>What is the supply?</TeamH2>
              <TeamP>420</TeamP>
            </TeamCard>
            <TeamCard  data-aos="fade-right">
              
              <TeamH2>What is the mint price?</TeamH2>
              <TeamP>TBA - Looking to be around 0.069eth</TeamP>
            </TeamCard>
            <TeamCard data-aos="fade-left">
              
              <TeamH2>Wen launch?</TeamH2>
              <TeamP>TBA - Looking to be approximately late august.</TeamP>
            </TeamCard>
          
          </TeamWrapper>
          

          <ImgWrap>
          <Img src= {img1} alt="image"/>
          <Img src= {img2} alt="image"/>
          <Img src= {img3} alt="image"/>
          <Img src= {img4} alt="image"/>
          <Img src= {img5} alt="image"/>
          <Img src= {img6} alt="image"/>
          <Img src= {img7} alt="image"/>
          </ImgWrap>
          
          
        </TeamContainer>
    </>
  )
}

export default Team