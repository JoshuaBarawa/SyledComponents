import {FaTwitter, FaFacebook, FaLinkedin} from 'react-icons/fa';
import { SocialStyled } from './styled/SocialIcons.styles';

function SocialIcons() {
    return ( 
<SocialStyled>
<li>
        <a href='https://twitter.com'>
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href='https://facebook.com'>
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href='https://linkedin.com'>
          <FaLinkedin />
        </a>
      </li>
</SocialStyled>

     );
}

export default SocialIcons;