import styled from "styled-components";

export const StyledHeader = styled.header`
background-color: ${({ theme }) => theme.colors.header};
padding: 0px;
width: 100%;
margin: 0;
padding: 20px 0px;
`

export const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 40px;

@media (max-width: ${({theme}) => theme.mobile }){
flex-direction: column;
}

`

export const Logo = styled.img`
@media (max-width: ${({theme}) => theme.mobile }){
    margin-bottom: 40px;
    }
`

export const Image = styled.img`
width: 400px;
margin-left: 40px

@media (max-width: ${({theme}) => theme.mobile }){
    margin: 40px 0px 30px
    }

`

