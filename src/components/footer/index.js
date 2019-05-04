// Import Ultils
import { Container } from '../../utils/class';

// Import API
import FooterProps from '../../api/footer';

// Import Style
import {
    Section, Logo, Text, HelpLink
} from './styled';

const Footer = () => {
    const { text, link } = FooterProps;
    return(
        <Section id="footer">
            <Container>
                <Logo />
                <Text>{text}</Text>
                <HelpLink href={link.href} target="_blank">{link.text}</HelpLink>
            </Container>
        </Section>
    );
}


export default Footer;