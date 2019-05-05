// Imports React Defaults
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Actions Redux
import { changeStatusModal } from '../../../redux/actions';

// Import Components
import Logo from '../../atoms/logo';
import HelpLink from '../../atoms/helpLink';

// Import Style
import {
    Section, BoxContent, Title, Text, ButtonCTA
} from './styled';

const ModalSuccess = ({ title, text, buttonCTA, textFooter, link, changeStatusModal }) => (
    <Section id="modalSuccess">
        <Logo />
        <BoxContent>
            <Title>{title}</Title>
            <Text
                text={text}
                tags={{html: 'span'}}
            />
            <ButtonCTA 
                text={buttonCTA}
                onClick={() => changeStatusModal(false)}
            />
        </BoxContent>
        <HelpLink 
            text={textFooter}
            link={link}
        />
    </Section>
);


function mapStateToProps ( state ) {
    const { loaderStatus, sucessModal } = state;
    return { loaderStatus, sucessModal }
}

const mapDispatchToProps = dispatch => bindActionCreators({ changeStatusModal }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalSuccess);