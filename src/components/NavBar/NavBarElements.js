import styled from 'styled-components';
import {Link as LinkR}  from 'react-router-dom';
import {Link as LinkS}  from 'react-scroll';

 
export const Nav = styled.nav`
background:#0000;
height:80px; 
margin-top: -80px;
display:flex;
justify-content:center;
padding:10px 12px;
font-size:1rem;
position :sticky;
top:0;
z-index:10;
width : 100%;
background-color : black;

@media screen and (max-width:960px){
    transition:0.8s all ease;
}
`
export const NavBarContainer =styled.div`
display:flex;
justify-content :space-between;
height:8vh;
z-index:1;
width:100%;
max-width:1100px;   
` ;
export const NavLogo = styled(LinkR)`
color:#01BF71;  
justify-self :flex-start;
cursor:pointer;
font-size:1.5rem;
display:flex;
align-items:center;
margin-left:24px;
font-weight:bold;
text-decoration:none;



`
export const MoblieIcon = styled.div`
display:none;
 

@media screen and (max-width:768px){
    display : block;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-100%,60%);
    font-size:1.8rem;
    cursor:pointer;
    color:#fff;

}
`

 export const NavMenu = styled.ul`
 display:flex;
 align-items:center; 
 list-style:none;
 text-align:center; 
 /* margin-top: 15px; */

 @media screen and (max-width:768px){
     display : none
 }
 
 `

 export const NavItem = styled.li`
    height:80px;
    /* margin-left:25px; */

 
  `

  export const NavLinks = styled(LinkS)`
   color:#01BF71; 
   display:flex;
   align-items:center;
   text-decoration:none;
   padding : 0 1rem;
   height:100%;
   cursor:pointer;

   

   &.active{
       border-bottom:3px solid #01bf71;
   }

  `
  export const NavBtn = styled.nav`
  
  display:flex;
  align-items:center;



  @media screen and (max-width: 768px){
      display:none;
  }
  `
  export const NavBtnLink = styled(LinkR)`
   border-radius:50px;
   background:#01bf71;
   white-space:nowrap; 
   padding: 0px 21px;
   color:black;
   font-size:16px;  
   outline:none;
   border:none;   
   width: 100%;
   text-align: center;
   height: 50%;
  
   cursor:pointer;   
    transition:all 0.2s ease-in-out;
    text-decoration:none;

    &:hover{
        transition :all 0.2s ease-in-out;
        background:#01BF71;
     
    }
  `