// Import Ultils
import { Container } from '../../../utils/class';

// Import Style
import {
    Section, LogoFooter, HelpLinkFooter
} from './styled';

const Footer = ( props ) => (
    <Section id="footer">
        <Container>
            <LogoFooter 
                width={115}
                height={28}
            />
            <HelpLinkFooter {...props} />
        </Container>
    </Section>
);

export default Footer;