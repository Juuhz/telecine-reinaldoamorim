// Import Styled
import styled from 'styled-components';

// Import Utils
import { Wrapper } from '../../utils/class';
import { RED } from '../../utils/variables';
import { rem } from '../../utils/helpers';

export const Section = styled(Wrapper)`
    width: 100%;
    text-align: center;
    color: #FFF;
`;

export const Logo = styled.div`
    width: ${rem(115)};
    height: ${rem(28)};
    background: url('/static/images/logo.svg') no-repeat;
    background-size: cover;
    margin: ${rem(25)} auto ${rem(10)};
`;

export const Text = styled.p`
    font-size: ${rem(14)};
    font-weight: 300;
    line-height: 1.7;
    margin-top: ${rem(20)};
`;

export const HelpLink = styled.a`
    color: ${RED};
    text-decoration: none;
    margin-bottom: ${rem(25)};
    display: inline-block;
`;