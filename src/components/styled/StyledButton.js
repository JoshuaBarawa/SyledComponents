import styled from "styled-components";



export const StyledButton = styled.button`
border-radius: 50px;
border: none;
box-shadow: 0 0 10px rgda(0, 0, 0, 0.15);
cursor: pointer;
font-size: 16px;
font-weight: 700;
padding: 15px 60px;
background-color: ${({bg}) => bg || '#fff'};

&:hover{
    opacity: 0.9;
     transform: scale(0.98);
 }

 @media (max-width: ${({theme}) => theme.mobile }){
   margin-bottom: 40px;
    }
`

