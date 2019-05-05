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
    
    @media (min-width: 734px){
        text-align: left;
        display: inline-block;

        &:after{
            content: "";
            position: absolute;
            width: 100%;
            height: calc( 100% + 160px );
            background: url(/static/images/hero-bg.jpeg) no-repeat;
            background-size: cover;
            top: 0px;
            left: 0px;
            opacity: 0.3;
            z-index: -1;
        }
    }
`;

export const Title = styled(MDReactComponent)`
    font-size: ${rem(22)};
    font-weight: 300;
    display: inline-block;
    line-height: 1.7;
    max-width: ${rem(250)};
    
    strong{
        font-weight: 500;
    }

    @media (min-width: 734px){
        max-width: ${rem(300)};
    }
`;

export const Text = styled(MDReactComponent)`
    font-size: ${rem(14)};
    font-weight: 300;
    max-width: ${rem(230)};
    margin: ${rem(25)} auto ${rem(30)};
    line-height: 1.7;

    @media (min-width: 734px){
        margin: ${rem(25)} 0 ${rem(30)};
    }
`;