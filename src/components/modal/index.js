// Imports React Defaults
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Actions Redux
import { closeModal } from '../../redux/actions';

// Import Style
import {
    ModalWrapper, ModalContent, CloseModal,
    Thumbinial, Infos, Name, Stars, InfoStar,
    InstaStats, ItemStats, Label, Value
} from './styled';

class Modal extends Component {

    // Evento para fechar o Modal
    changeStatusModal = () => {
        const { closeModal } = this.props;
        closeModal();
    }

    render() {
        const influence = this.props.modalInfluencer;

        return (
            <ModalWrapper id="modal">
                <ModalContent>
                    <CloseModal onClick={this.changeStatusModal}>X</CloseModal>
                    <Thumbinial src={influence.image} alt={`Influenciador: ${influence.name}`} />
                    <Infos>
                        <Name>{influence.name}</Name>
                        <Stars>
                            <ReactStars
                                count={5}
                                value={influence.stars}
                                size={20}
                                color2={'#ffd700'}
                                edit={false}
                            />
                            <InfoStar>{influence.stars} de 5</InfoStar>
                        </Stars>
                        <InstaStats>
                            <ItemStats>
                                <Label>Segmuinto:</Label>
                                <Value>{influence.category}</Value>
                            </ItemStats>
                            <ItemStats>
                                <Label>Seguidores:</Label>
                                <Value>{influence.followers}</Value>
                            </ItemStats>
                            <ItemStats>
                                <Label>Seguidores Reais:</Label>
                                <Value>{influence.real_followers}%</Value>
                            </ItemStats>
                            <ItemStats>
                                <Label>Média de Likes:</Label>
                                <Value>{influence.like_avg}</Value>
                            </ItemStats>
                            <ItemStats>
                                <Label>Média de Comentários:</Label>
                                <Value>{influence.comments_avg}</Value>
                            </ItemStats>
                        </InstaStats>
                    </Infos>
                </ModalContent>
            </ModalWrapper>
        );
    }
}

function mapStateToProps ( state ) {
    const { modalInfluencer } = state;
    return { modalInfluencer }
}

const mapDispatchToProps = dispatch => bindActionCreators({ closeModal }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);