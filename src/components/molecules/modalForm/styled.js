// Import Styled
import styled from 'styled-components';

// Import Utils
import MDReactComponent from 'markdown-react-js';
import Button from '../../atoms/button';
import Input from '../../atoms/input';
import { rem } from '../../../utils/helpers';

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
        margin-bottom: ${rem(15)};
    }
`;

export const Field = styled(Input)`
    @media (min-width: 375px){
        margin-bottom: ${rem(15)};
    }
`;

export const ButtonCTA = styled(Button)`
    margin-top: ${rem(15)};
`;