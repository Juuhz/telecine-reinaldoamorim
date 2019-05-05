// Import Styled
import styled from 'styled-components';

// Import Utils
import { RED, DARK_RED } from '../../utils/variables';
import { rem } from '../../utils/helpers';

export const ButtonCTA = styled.button`
    background: ${RED};
    color: #FFF;
    font-size: ${rem(14)};
    padding: ${rem(12)} ${rem(20)} ${rem(14)};
    border-radius: ${rem(30)};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    outline: none;

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