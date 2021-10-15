import { StyledContainer } from './styled/Container.styles';
import { StyledHeader, Nav, Logo, Image } from './styled/StyledHeader';
import { StyledButton } from './styled/StyledButton';
import {Flex} from './styled/Flex.styles'
export  function Header() {
    return ( 
<div>
    <StyledHeader>
        <StyledContainer>
            <Nav>
    <Logo src="./images/logo.svg" alt='' />
    <StyledButton>Try It Free</StyledButton>
            </Nav>

       <Flex>
            <div>
       <h1>Build The Community Your Fans Will Love</h1>

       <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id purus ligula.
        Suspendisse interdum congue volutpat. Fusce auctor sed mi id fermentum. Nunc efficitur leo a felis euismod, eu hendrerit mi placerat.
        Pellentesque porta felis vitae ante ultricies efficitur. Morbi a semper urna, porttitor convallis quam.
       </p>
       <StyledButton bg='#ff0099' color='#fff'>Get Started For Free</StyledButton>  
            </div>

     <Image src="./images/illustration-mockups.svg" />


       </Flex>



      </StyledContainer>
    </StyledHeader>
</div>


     );
}

export default Header;