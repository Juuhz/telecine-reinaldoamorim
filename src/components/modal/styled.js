// Import Styled
import styled from 'styled-components';

// Import Utils
import MDReactComponent from 'markdown-react-js';
import { rem } from '../../utils/helpers';
import { DARK_GRAY, DARK_RED, RED } from '../../utils/variables';

export const ModalWrapper = styled.div`
    z-index: 22;
    position: fixed;
    background: rgba( 0,0,0,0.8 );
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    width: 100%;
    max-width: ${rem(650)};
    height: 100%;
    background: ${DARK_GRAY};
    position: relative;
    padding: ${rem(25)};
    color: #FFF;
    text-align: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`;

export const CloseModal = styled.div`
    position: absolute;
    top: 0;
    right: 0px;
    text-align: center;
    font-weight: 100;
    font-size: ${rem(25)};
    padding: ${rem(5)} ${rem(10)};
    cursor: pointer;
    color: #FFF;
    z-index: 2;
`;

export const Logo = styled.div`
    width: ${rem(152)};
    height: ${rem(37)};
    background: url('/static/images/logo.svg') no-repeat;
    background-size: cover;
    margin: 0 auto;
`;

export const Text = styled(MDReactComponent)`
    font-size: ${rem(13)};
    font-weight: 300;
    margin: 0 auto;
    line-height: 1.7;
    margin-top: ${rem(20)};
    margin-bottom: ${rem(10)};
    display: block;

    @media (min-width: 375px){
        font-size: ${rem(15)};
    }
`;

export const BoxInput = styled.div`
    display: block;
    margin-bottom: ${rem(10)};
    text-align: left;
    position: relative;
`;

export const Label = styled.label`
    position: absolute;
    left: 0px;
    top: ${rem(9)};
    font-weight: 100;
`;

export const Input = styled.input`
    width: 100%;
    padding: ${rem(10)} 0px;
    color: #FFF;
    background: transparent;
    border-bottom: 1px solid #FFF;
    font-size: ${rem(16)};
    font-weight: 100;
    outline: none;
`;

export const ButtonCTA = styled.button`
    background: ${RED};
    color: #FFF;
    font-size: ${rem(14)};
    padding: ${rem(12)} ${rem(20)} ${rem(14)};
    border-radius: ${rem(30)};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    outline: none;
    margin-top: ${rem(15)};

    &:after{
        content: "";
        width: ${rem(20)};
        height: ${rem(14)};
        background: url('/static/images/arrow.svg') no-repeat center center;
        display: inline-block;
        background-size: cover;
        vertical-align: middle;
        margin-left: ${rem(10)};
    }

    &:hover{
        background: ${DARK_RED};
    }
`;

export const TextFooter = styled.p`
    font-size: ${rem(14)};
    font-weight: 300;
    line-height: 1.7;
    margin-top: ${rem(20)};
`;

export const HelpLink = styled.a`
    color: ${RED};
    text-decoration: none;
    display: inline-block;
    transition: all 0.3s ease-in-out;

    &:hover{
        color: ${DARK_RED};
    }
`;