import styled from "styled-components";


export const TeamContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #1E1E1E;
    
    
    overflow:hidden;

    @media screen and (max-width: 768px) {
        height: 1100px;
        
    }
    @media screen and (max-width: 480px) {
        height: 1000px;
        
    }
`



export const TeamWrapper = styled.div`
     max-width: 1000px;
     margin: 0 auto;
     display: grid;
     grid-template-columns: 1fr 1fr;
     align-items: center;
     grid-gap: 16px;
     padding: 0 50px;
     overflow:hidden;
     
     

     @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        
     }
     @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        
     }

     
`

export const TeamCard= styled.div`
    width: 400px;
    background-image: linear-gradient(#C0E9EF,#C4D8F3, #C8C7F7);
   
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    padding-left: 5rem;
    border-radius: 10px;
    
    
    padding: 25px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    overflow:hidden;

    @media screen and  (max-width: 300px) {
        max-width:180px;
       
        
    }
    @media screen and  (max-width: 1000px) {
        width: 320px;
        
    }
    @media screen and (max-width:500px){
       width: 250px;
        
    }

    


    &:hover{
        transform: scale(1.2rem);
        transition: all 0.2s ease-in-out;
        
    }
`

export const TeamIcon = styled.img`
    height: 160px;
    width: 220px;
    margin-bottom: 10px;
`

export const TeamH1 = styled.h1`

    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;
    align-items:center;
    justify-content:center;
    @media screen and (max-width: 480px){
    font-size: 2rem;
}
`
export const TeamH2 = styled.h2`
    font-size: 1 rem;
    margin-bottom: 10px;

    @media screen and (max-width:500px){
       font-size: 1rem;
        
    }
    
`

export const TeamP = styled.p`
    font-size: 1rem;

    @media screen and (max-width:500px){
       font-size: 0.9rem;
        
    }
    
`

export const ImgWrap =styled.div`
position:relative;
    width: 100%;
    top: 100px;
    max-height: 200px;
    background:transparent;
    display:flex;
    overflow:hidden;
    
    justify-content:center;
    
    @media screen and (max-width:580px ){
        width:50%;
        
    }
    

    

`
export const Img = styled.img`
    width: 200px;
    height:200px;
    flex-direction: column;
    margin-right: 16px;
    transition: all 0.2s ease;

    /* &:hover{
        width:205px;
        height:205px;
        
    } */
    
    
`
export const DiscordInfo = styled.div`
position:relative;
    
    max-width: 300px;
    text-align: center;
    background: #383838;
    border-radius: 100px;
    border: 1px solid 	#585858;
    outline: 0.5px solid #A7C7E7;
    outline-offset: 3px;


    


     @media screen and (max-width:580px) {
        max-width:100%;
        
        
     }


`

export const Subtitle3 = styled.p`
    
    padding: 20px;
    margin-bottom: 0px;
    font-size: 20px;
    font-weight: 600;
    font-style: bold;
    line-height:24px;
    color:#fff;
   
    


`;
export const BtnWrap = styled.div`
padding-bottom: 20px;
    display: flex;
    justify-content: center;
`

