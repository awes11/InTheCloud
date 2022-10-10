import styled from "styled-components"; 


export const Button = styled.a`
    border-radius: 50px;
    background:${({primary}) => (primary ? '#A7C7E7' : '#7289da')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#010606')};
    font-size: ${({fontBig}) => (fontBig ? '20px': '16px')};
    outline: none;
    text-decoration:none;
    
    
    cursor: pointer;
    display:flex;
    justify-content: center;
    align-items:center;
    transition: all 0.2s ease-in-out;


    &:hover{
        transition: all 0.2s ease-in-out;
        background:${({primary}) => (primary ? '#fff' : '#000')};
        color: ${({dark}) => (dark ? '#010606' : '#DBE2E9')};
        border: 1px solid #7289da;
        outline: 2px solid #424556;
  outline-offset: 2px;
        
        
    }
`
export const ButtonMint = styled.a`
    position:absolute;
    top:130%;
    left:50%;
    transform: translate(-50%,-50%);
    border-radius: 50px;
    background:${({primary}) => (primary ? '#A7C7E7' : '#1E1E1E')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px': '16px')};
    outline: none;
    text-decoration:none;
    width:200px;
    font-weight:600;
    letter-spacing:3px;
    animation: fadein 2s ;
   
    
    
    cursor: pointer;
    display:flex;
    justify-content: center;
    align-items:center;
    transition: all 0.2s ease-in-out;


    &:hover{
        transition: all 0.2s ease-in-out;
        background:${({primary}) => (primary ? '#fff' : '#000')};
        color: ${({dark}) => (dark ? '#010606' : '')};
        border: 1px solid #7289da;
        outline: 1px solid #424556;
  outline-offset: 2px;
  width:210px;

  @keyframes fadein {
 0%   { top:100% ;
        opacity: 0%;}
 50%  { opacity: 30%}
 100% { top:130% ; 
        opacity:100%}
    }
        
        
    }
`
