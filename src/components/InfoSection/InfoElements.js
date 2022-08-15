import styled from "styled-components";

export const InfoContainer = styled.div`

    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#DBE2E9' : '#1E1E1E')} ;
    
    @media screen and (max-width : 768px) {
        padding: 100px 0;
        
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index:2;
    height: 700px;
    width:100%;
    max-width:1200px;
    margin-right:auto;
    margin-left:auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width:780px){
        height: 880px;
        
    }

`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items:center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1' ` : `'col1 col2'`)};

    @media screen  and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
        
    }
`
export const Column1 =styled.div`
    margin-bottom: 10px;
    padding: 0x 15px;
    grid-area: col1;
   
    
    


`

export const Column2 = styled.div`
    margin-bottom: 10px;
    padding: 0 15px;
    grid-area: col2;
   

`
export const TextWrapper = styled.div`
    max-width: 600px;
    padding-top: 0;
    padding-bottom: 60px;

    

`
export const TopLine = styled.p`
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;

`

export const Heading= styled.h1`
     margin-bottom: 24px;
     font-size: 42px;
     line-height: 1.1;
     font-weight: 600;
     color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

     
     

     @media screen and (max-width:780px){
        font-size: 32px;

        
     }
`
export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height:24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff' )};

`;

export const Subtitle2 = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height:24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff' )};

`;


export const ImgWrap= styled.div`
    max-width: 600px;
    height: 100%;

   
    
   
`

export const Img = styled.img`
    width: 99%;
    margin: 00 10px 0;
    padding-right: 0;
    opacity: 90%;
    transition: all 0.2s ease-in-out;
    
    &:hover{
        width:100%;
        transition: all 0.2s ease-in-out;
    }
    
    
`;



