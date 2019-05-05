// Imports React Defaults
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Actions Redux
import { changeStatusModal } from '../../../redux/actions';

// Import Ultils
import { Container } from '../../../utils/class';
import Button from '../../atoms/button';
import Logo from '../../atoms/logo';

// Import Style
import {
    Section, Title, Text
} from './styled';

const Hero = ({ title, text, buttonCTA, changeStatusModal }) => {
    return(
        <Section id="hero">
            <Container>
                <Logo title="true" />
                <Title 
                    text={title}
                    tags={{html: 'h2'}}
                />
                <Text
                    text={text}
                    tags={{html: 'h3'}}
                />
                <Button
                    text={buttonCTA} 
                    onClick={() => changeStatusModal(true)}
                />
            </Container>
        </Section>
    );
}

function mapStateToProps ( state ) {
    const { modalStatus } = state;
    return { modalStatus }
}

const mapDispatchToProps = dispatch => bindActionCreators({ changeStatusModal }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hero);