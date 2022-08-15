import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';



import { 
    InfoContainer, 
    InfoWrapper,
    InfoRow,
    Column1 ,
    Column2,
    TextWrapper,
    TopLine,
    Heading, 
    Subtitle, 
    Subtitle2,
    
    ImgWrap,
    Img ,
   
} from './InfoElements'



const InfoSection = ({lightBg,id,imgStart,topLine,lightText, headline, darkText, description,description2,  img, alt,
                       }) => {

            useEffect(()=> {
                Aos.init({duration:1600});
            },[]);



                
  return (
    <>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
            <Column1 data-aos="fade-up">
                    <TextWrapper>
                        <TopLine data-aos="fade-up" lightText={lightText}>{topLine}</TopLine>
                        <Heading data-aos="fade-up" lightText={lightText}>{headline}</Heading>
                        <Subtitle data-aos="fade-up" darkText={darkText}>{description}</Subtitle>
                        <Subtitle2 data-aos="fade-up" darkText={darkText}>{description2}</Subtitle2>
                        
                        
                    </TextWrapper>
                </Column1> 
                
                
                
                <Column2 data-aos="fade-up">
                    <ImgWrap>
                    <Img src= {img} alt={alt}/>
                    </ImgWrap>
                </Column2>
                
            </InfoRow>
        </InfoWrapper>
        
    </InfoContainer>
    
    

    </>
  )
}

export default InfoSection