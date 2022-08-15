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