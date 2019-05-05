// Import Styled
import styled from 'styled-components';

// Import Utils
import { rem } from '../../../utils/helpers';
import { DARK_RED, RED } from '../../../utils/variables';

export const HelpBox = styled.div`
    position: relative;
`;

export const Text = styled.p`
    font-size: ${rem(14)};
    font-weight: 300;
    line-height: 1.7;
    margin-top: ${rem(20)};
`;

export const Link = styled.a`
    color: ${RED};
    text-decoration: none;
    display: inline-block;
    transition: all 0.3s ease-in-out;

    &:hover{
        color: ${DARK_RED};
    }
`;