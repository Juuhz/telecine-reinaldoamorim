// Import Ultils
import { Container } from '../../utils/class';

// Import API
import HeaderProps from '../../api/header';

// Import Style
import {
    Section, Logo, Title, Text, Button
} from './styled';

const Header = () => {
    const { title, text, buttonCTA } = HeaderProps;
    return(
        <Section id="header">
            <Container>
                <Logo />
                <Title 
                    text={title.mobile}
                    tags={{html: 'h2'}}
                />
                <Text
                    text={text}
                    tags={{html: 'h3'}}   
                />
                <Button>{buttonCTA}</Button>
            </Container>
        </Section>
    );
}


export default Header;