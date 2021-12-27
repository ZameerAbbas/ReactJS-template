import styled from "styled-components";
import { Link } from "react-scroll";


export const Button = styled(Link)`

background: ${({primary})=>(primary ? '#01BF71' : '#01BF71')};
white-space:nowrap;
padding: ${({big })=>(big ? '14px 4px':'12px 30px')} ;
color: ${({dark})=>(dark ?  '#010606':'#fff')};
font-size : ${({fontBig})=>(fontBig ? '20px':'16px')};
outline:none;
border:none;
cursor:pointer;
justify-content:center;
display:flex;
align-items:center;
transition:all 0.2s ease-in-out;
position: absolute;
border-radius: 50px;

&:hover{
    transition:all 0.2s ease-in-out; 
    background:    ${({primary})=>(primary ? '#fff':'#01BF71')} 
}

  `
   