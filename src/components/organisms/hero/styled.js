// Import Styled
import styled from 'styled-components';

// Import Utils
import MDReactComponent from 'markdown-react-js';
import { Wrapper } from '../../../utils/class';
import { rem } from '../../../utils/helpers';

export const Section = styled(Wrapper)`
    width: 100%;
    text-align: center;
    color: #FFF;
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
    margin-bottom: ${rem(30)};
`;