// Imports React Defaults
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Utils
import Loader from '../loader';

// Import Actions Redux
import { changeStatusModal, changeStatusLoader } from '../../redux/actions';

// Import API
import ModalProps from '../../api/modal';

// Import Style
import {
    ModalWrapper, ModalContent, CloseModal,
    Logo, Text, BoxInput, Input, Label,
    ButtonCTA, TextFooter, HelpLink
} from './styled';

class Modal extends Component {

    // Evento para enviar os dados do formulário
    sendForm = async ( form ) => {
        form.preventDefault();

        // Pega actions para as próximas ações
        const { changeStatusLoader } = this.props;

        // Chama evento para exibir o Loader
        changeStatusLoader( true );
        
        // Simula requisição para enviar os dados
        const response = await new Promise((resolve) => {
            setTimeout(() => {
              resolve({
                   success: true,
                   mensage: ""
              });
            }, 4000);
        });

        // Caso tenha retornado sucesso, exibe mensagem de sucesso
        if( response.sucess ){

        }
    }

    render() {
        const { text, inputs, buttonCTA, textFooter, link } = ModalProps;
        const { loaderStatus } = this.props;
        return (
            <ModalWrapper id="modal">
                <CloseModal onClick={() => this.props.changeStatusModal(false)}>X</CloseModal>
                <ModalContent>
                    {
                        !loaderStatus &&
                            <div>
                                <Logo />
                                <Text
                                    text={text}
                                    tags={{html: 'span'}}
                                />
                                <form onSubmit={this.sendForm}>
                                    {
                                        inputs.map( ( input, key ) => {
                                            return(
                                                <BoxInput key={key}>
                                                    <Label htmlFor={input.id}>{input.label}</Label>
                                                    <Input type={input.type} name={input.id} id={input.id} required/>
                                                </BoxInput>
                                            )
                                        })
                                    }
                                    <ButtonCTA>{buttonCTA}</ButtonCTA>
                                </form>
                                <TextFooter>{textFooter}</TextFooter>
                                <HelpLink href={link.href} target="_blank">{link.text}</HelpLink>
                            </div>
                    }
                    {
                        loaderStatus &&
                            <Loader />
                    }
                </ModalContent>
            </ModalWrapper>
        );
    }
}

function mapStateToProps ( state ) {
    const { loaderStatus } = state;
    return { loaderStatus }
}

const mapDispatchToProps = dispatch => bindActionCreators({ changeStatusModal, changeStatusLoader }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);