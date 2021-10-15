
import { StyledContainer } from './styled/Container.styles';
import content from './../content';
import Card from './Card';

export function Container() {
    return ( 
 <StyledContainer>
   {content.map((item, index) => (
       <Card key={index} item={item} />
   ))}
 </StyledContainer>

     );
}

export default Container;