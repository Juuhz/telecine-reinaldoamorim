// Import Ultils
import { Container } from '../../../utils/class';

// Import API
import FooterProps from '../../../api/footer';

// Import Style
import {
    Section, LogoFooter, HelpLinkFooter
} from './styled';

const Footer = () => {
    const { text, link } = FooterProps;
    return(
        <Section id="footer">
            <Container>
                <LogoFooter 
                    width={115}
                    height={28}
                />
                <HelpLinkFooter {...FooterProps} />
            </Container>
        </Section>
    );
}


export default Footer;