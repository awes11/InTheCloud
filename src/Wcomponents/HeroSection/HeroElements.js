import styled , {keyframes} from "styled-components";

export const HeroContainer=styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content:center;
    align-items:center;
    padding: 0 30px;
    height: 800px;
    position:relative;
    z-index:0;
    overflow:hidden;

    ::before{
        content: '';
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 100% ), 
        linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 100%);
        z-index:2;
    }

     
    @media screen and (max-width:860px){
        height:750px;
        
    }   
    @media screen and (max-width:560px){
        height:750px;
        
    }   
    
    

   
   
`

export const HeroBg =styled.div`
    position: absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    

    
`



export const ImgBg= styled.img`
    position:absolute;
    width: 100%;
    height: 100%;
    -o-object-fit:cover;
    object-fit:cover;
    

`

export const MoveCloud = keyframes`
    from{
        transform: translate(-50px , 100px);

    }
    to{
        transform: translate(0px , 0px);

    }
`

export const MoveCloud2 = keyframes`
    from{
        transform: translate(-100px , 0px);
    }
    to{
        transform: translate(0px , 0px);
    }
`

export const MoveCloud3 = keyframes`
    from{
        transform: translate(80px , 20px);

    }
    to{
        transform: translate(0px , 0px);

    }
`
export const MoveCloud4 = keyframes`
    from{
        transform: translate(50px , 0px);

    }
    to{
        transform: translate(0px , 0px);

    }
`
export const MoveCloud5 = keyframes`
    from{
        transform: translate(100px , 100px);

    }
    to{
        transform: translate(0px , 0px);

    }
`

export const ShootingStar = keyframes`
    from{
        transform: translate(8000px , -1750px);

    }
    to{
        transform: translate(0px , 0px);

    }
`
export const ShootingStar2 = keyframes`
    from{
        transform: translate(10000px , -2750px);

    }
    to{
        transform: translate(0px , 0px);

    }
`




export const ImgBg2 =styled.img`
    position:absolute;
    width: 100%;
    height: 100%;
    -o-object-fit:cover;
    object-fit:cover;
    animation-name: ${MoveCloud};
    animation-duration: 5000ms;
    animation-timing-function: ease-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;

   
`
export const ImgBg3 =styled.img`
    position:absolute;
    width: 100%;
    height: 100%;
    -o-object-fit:cover;
    object-fit:cover;
    animation-name: ${MoveCloud2};
    animation-duration: 5000ms;
    animation-timing-function: ease-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    
`
export const ImgBg5 =styled.img`
    position:absolute;
    width: 100%;
    height: 100%;
    -o-object-fit:cover;
    object-fit:cover;
    animation-name: ${MoveCloud3};
    animation-duration: 5000ms;
    animation-timing-function: ease-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    
`
export const ImgBg4 =styled.img`
    position:absolute;
    width: 100%;
    height: 100%;
    -o-object-fit:cover;
    object-fit:cover;
    animation-name: ${MoveCloud4};
    animation-duration: 5000ms;
    animation-timing-function: ease-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    
`
export const ImgBg6 =styled.img`
    position:absolute;
    width: 100%;
    height: 100%;
    left: -500px;
    top: 60px;
    
    animation-name: ${ShootingStar};
    animation-duration: 6000ms;
    animation-timing-function: ease-in;
    animation-delay: 0s;
    animation-iteration-count: infinite;

    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;

    
    @media screen and (max-width:1000px){
        top: 120px;
        height:80%;
        
    }

    @media screen and (max-width:800px){
        top: 120px;
        height:70%;
        
    }

    @media screen and (max-width:600px){
        top: 180px;
        height:50%;
        
    }
    @media screen and (max-width:400px){
        top: 180px;
        height:40%;
        
       

        
    }
    
`

export const ImgBg8 =styled.img`
    position:absolute;
    width: 100%;
    height: 100%;
    left: -500px;
    top: 80px;
    
    animation-name: ${ShootingStar2};
    animation-duration: 8000ms;
    animation-timing-function: ease-in;
    animation-delay: 0s;
    animation-iteration-count: infinite;

    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;

    
    @media screen and (max-width:1000px){
        top: 120px;
        height:80%;
        
    }

    @media screen and (max-width:800px){
        top: 120px;
        height:70%;
        
    }

    @media screen and (max-width:600px){
        top: 180px;
        height:50%;
        
    }
    @media screen and (max-width:400px){
        top: 180px;
        height:40%;
        
    }
    
`

export const ImgBg7 =styled.img`
    position:absolute;
    width: 100%;
    height: 100%;
    -o-object-fit:cover;
    object-fit:cover;
    animation-name: ${MoveCloud5};
    animation-duration: 5000ms;
    animation-timing-function: ease-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    
`