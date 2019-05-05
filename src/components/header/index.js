// Imports React Defaults
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Actions Redux
import { changeStatusModal } from '../../redux/actions';

// Import Ultils
import { Container } from '../../utils/class';
import Button from '../button';

// Import API
import HeaderProps from '../../api/header';

// Import Style
import {
    Section, Logo, Title, Text
} from './styled';

const Header = ({ changeStatusModal }) => {
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
)(Header);