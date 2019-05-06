// Imports React Defaults
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Actions Redux
import { changeStatusLoader, showModalSuccess } from '../../../redux/actions';

// Import Utils
import { Wrapper } from '../../../utils/class';
import Logo from '../../atoms/logo';
import HelpLink from '../../atoms/helpLink';

// Import Style
import {
    Text, Field, ButtonCTA
} from './styled';

class ModalForm extends Component {

    // Evento para enviar os dados do formulário
    sendForm = async ( form ) => {
        form.preventDefault();

        // Pega actions para as próximas ações
        const { changeStatusLoader, showModalSuccess } = this.props;

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
        if( response.success ){
            showModalSuccess();
        }
    }

    render() {
        const { text, inputs, buttonCTA, textFooter, link } = this.props;
        return (
            <Wrapper id="modalForm">
                <Logo />
                <Text
                    text={text}
                    tags={{html: 'span'}}
                />
                <form onSubmit={this.sendForm}>
                    {
                        inputs.map( ( input, key ) => (
                            <Field 
                                key={key} 
                                input={input}
                            />
                        ))
                    }
                    <ButtonCTA text={buttonCTA} />
                </form>
                <HelpLink 
                    text={textFooter}
                    link={link}
                />
            </Wrapper>
        );
    }
}

function mapStateToProps ( state ) {
    const { loaderStatus, sucessModal } = state;
    return { loaderStatus, sucessModal }
}

const mapDispatchToProps = dispatch => bindActionCreators({ changeStatusLoader, showModalSuccess }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalForm);