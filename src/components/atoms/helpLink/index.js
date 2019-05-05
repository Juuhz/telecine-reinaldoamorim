// Import Style
import { HelpBox, Text, Link } from './styled';

const HelpLink = (props) => {
    const { text, link } = props;
    return (
        <HelpBox {...props}>
            <Text>{text}</Text>
            <Link href={link.href} target="_blank">{link.text}</Link>
        </HelpBox>
    );
};

export default HelpLink;