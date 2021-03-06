// Imports React Defaults
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Actions Redux
import { changeStatusModal } from '../../../redux/actions';

// Import Components
import Loader from '../../atoms/loader';
import ModalForm from '../../molecules/modalForm';
import ModalSuccess from '../../molecules/modalSuccess';

// Import Style
import {
    ModalWrapper, ModalContent, CloseModal
} from './styled';

const Modal = ({ data, changeStatusModal, loaderStatus, sucessModal }) => (
    <ModalWrapper id="modal">
        <CloseModal onClick={() => changeStatusModal(false)}>X</CloseModal>
        <ModalContent>
            {
                ( !loaderStatus && !sucessModal ) && 
                    <ModalForm {...data} />
            }
            {
                ( loaderStatus && !sucessModal ) &&
                    <Loader />
            }
            {
                sucessModal &&
                    <ModalSuccess 
                        textFooter={data.textFooter} 
                        link={data.link} 
                        {...data.success} 
                    />
            }
        </ModalContent>
    </ModalWrapper>
);

function mapStateToProps ( state ) {
    const { loaderStatus, sucessModal } = state;
    return { loaderStatus, sucessModal }
}

const mapDispatchToProps = dispatch => bindActionCreators({ changeStatusModal }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);