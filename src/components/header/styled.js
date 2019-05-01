// Import Styled
import styled from 'styled-components';

// Import Utils
import MDReactComponent from 'markdown-react-js';
import { Wrapper } from '../../utils/class';
import { RED } from '../../utils/variables';
import { rem } from '../../utils/helpers';

export const Section = styled(Wrapper)`
    width: 100%;
    text-align: center;
    color: #FFF;
`;

export const Logo = styled.h1`
    width: ${rem(152)};
    height: ${rem(37)};
    background: url('/static/images/logo.svg') no-repeat;
    background-size: cover;
    margin: ${rem(30)} auto;
`;

export const Title = styled(MDReactComponent)`
    font-size: ${rem(22)};
    font-weight: 300;
    display: inline-block;
    line-height: 1.7;

    strong{
        font-weight: 500;
    }
`;

export const Text = styled(MDReactComponent)`
    font-size: ${rem(14)};
    font-weight: 300;
    max-width: ${rem(230)};
    margin: 0 auto;
    line-height: 1.7;
    margin-top: ${rem(25)};
`;

export const Button = styled.button`
    background: ${RED};
    color: #FFF;
    font-size: ${rem(14)};
    padding: ${rem(12)} ${rem(20)} ${rem(14)};
    border-radius: ${rem(30)};
    margin-top: ${rem(30)};
    cursor: pointer;

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
`;