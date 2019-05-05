// Import Styled
import styled from 'styled-components';

// Import Utils
import { RED } from '../../utils/variables';
import { rem } from '../../utils/helpers';

export const LoaderBox = styled.div`
    position: relative;
`;

export const LoaderIcon = styled.div`
    display: inline-block;
    
    &:after {
        content: " ";
        display: block;
        width: ${rem(46)};
        height: ${rem(46)};
        margin: ${rem(1)};
        border-radius: 50%;
        border: ${rem(5)} solid ${RED};
        border-color: ${RED} transparent ${RED} transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }

    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export const LoaderText = styled.p`
    color: ${RED};
    margin-top: ${rem(20)};
    font-size: ${rem(16)};
    font-weight: 100;
`;