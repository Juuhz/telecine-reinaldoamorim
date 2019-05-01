// Import Styled
import styled from 'styled-components';

// Import Utils
import { Wrapper } from '../../utils/class';
import { rem } from '../../utils/helpers';

export const Section = styled(Wrapper)`
    width: 100%;
    text-align: center;
    background-size: cover;
`;

export const Logo = styled.h1`
    width: 152px;
    height: 37px;
    background: url('/static/images/logo.svg') no-repeat;
    background-size: cover;
    margin: 30px auto;
`;

export const Title = styled.h2`
    color: #FFF;
    position: relative;
    z-index: 2;
    font-size: 55px;
    font-weight: 100;
    margin-top: 90px;
    display: inline-block;
`;