// Import Styled
import styled from 'styled-components';

// Import Utils
import { rem } from '../../../utils/helpers';

export const LogoTitle = styled.h1`
    width: ${props => props.width ? rem(props.width) : rem(152)};
    height: ${props => props.height ? rem(props.height) : rem(37)};
    background: url('/static/images/logo.svg') no-repeat;
    background-size: cover;
    margin: ${rem(30)} auto;
    text-indent: -9999em;

    @media (min-width: 734px){
        margin: ${rem(30)} 0;
    }
`;

export const LogoImg = styled.div`
    width: ${props => props.width ? rem(props.width) : rem(152)};
    height: ${props => props.height ? rem(props.height) : rem(37)};
    background: url('/static/images/logo.svg') no-repeat;
    background-size: cover;
    margin: 0 auto;
`;