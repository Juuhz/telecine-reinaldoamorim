// Import Styled
import styled from 'styled-components';

// Import Utils
import MDReactComponent from 'markdown-react-js';
import { rem } from '../../../utils/helpers';

export const Section = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
`;

export const BoxContent = styled.div`
    position: relative;
`;

export const Title = styled.div`
    font-size: ${rem(25)};
    font-weight: 300;
    line-height: 1.7;
`;

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
    }
`;