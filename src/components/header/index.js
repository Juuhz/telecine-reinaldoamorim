// Import Ultils
import { Container } from '../../utils/class';

// Import API
import HeaderProps from '../../api/header';

// Import Style
import {
    Section, Logo, Title
} from './styled';

const Header = () => {
    const { title, text, buttonCTA } = HeaderProps;
    return(
        <Section id="header">
            <Container>
                <Logo />
                <Title>{title.mobile}</Title>
            </Container>
        </Section>
    );
}


export default Header;