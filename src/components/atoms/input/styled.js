// Import Styled
import styled from 'styled-components';

// Import Utils
import InputMask from 'react-input-mask';
import { DARK_GRAY } from '../../../utils/variables';
import { rem } from '../../../utils/helpers';

export const BoxInput = styled.div`
    display: block;
    margin-bottom: ${rem(10)};
    text-align: left;
    position: relative;

    @media (min-width: 375px){
        margin-bottom: ${rem(15)};
    }
`;

export const Label = styled.label`
    position: absolute;
    left: 0px;
    top: ${rem(9)};
    font-weight: 100;
    transition: all 0.3s ease-in-out;
    font-size: ${rem(14)};
`;

export const Field = styled(InputMask)`
    width: 100%;
    padding: ${rem(10)} 0px;
    color: #FFF;
    background: transparent;
    border-bottom: ${rem(1)} solid #FFF;
    font-size: ${rem(14)};
    font-weight: 100;
    outline: none;

    &:active,
    &:focus,
    &:valid{
        + .labelInput{
            transition: all 0.3s ease-in-out;
            top: ${rem(-5)};
            font-size: ${rem(10)};
        }
    }

    &:invalid{
        + .labelInput{
            background: ${DARK_GRAY};
            width: 100%;
        }
    }
`;