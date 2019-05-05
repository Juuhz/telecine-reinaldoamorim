// Import Styled
import styled from 'styled-components';

// Import Utils
import MDReactComponent from 'markdown-react-js';
import { Wrapper } from '../../../utils/class';
import { LIGTH_GRAY } from '../../../utils/variables';
import { rem } from '../../../utils/helpers';

export const Section = styled(Wrapper)`
    width: 100%;
    background-size: cover;
    color: #FFF;
    background: ${LIGTH_GRAY};
    padding: 0px ${rem(15)} ${rem(1)};
    margin-top: ${rem(-50)};
`;

export const Title = styled.h2`
    font-size: ${rem(14)};
    text-transform: uppercase;
    letter-spacing: ${rem(3)};
    font-weight: 400;
    position: relative;
    display: inline-block;
    margin-bottom: ${rem(20)};

    &:after{
        content: "";
        width: ${rem(80)};
        height: ${rem(2)};
        background: #FFF;
        position: absolute;
        right: ${rem(-100)};
        top: ${rem(8)};
        opacity: 0.4;
    }
`;

export const SubTitle = styled.p`
    font-size: ${rem(20)};
    line-height: 1.2;
    margin-bottom: ${rem(20)};
    font-weight: 300;
    max-width: ${rem(320)};

    @media (min-width: 734px){
        max-width: 100%;
    }
`;

export const Text = styled(MDReactComponent)`
    font-size: ${rem(14)};
    font-weight: 300;
    margin: ${rem(0)} auto ${rem(20)};
    line-height: 1.7;
    display: none;

    @media (min-width: 734px){
        display: inline-block;
    }
`;

export const ItensWrapper = styled.div`
    margin-top: ${rem(10)};

    @media (min-width: 734px){
        display: flex;
        flex-flow: row;
        justify-content: space-between;
    }
`;

export const ItemWrapper = styled.div`
    position: relative;

    @media (min-width: 734px){
        width: 46%;
    }
`;

export const ImageItem = styled.img`
    max-width: 100%;
    border-radius: ${rem(15)};
`;

export const TitleList = styled.h3`
    font-size: ${rem(16)};
    font-weight: 400;
    margin-top: ${rem(10)};
    margin-bottom: ${rem(10)};
`;

export const List = styled.ul`
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${rem(15)};
`;

export const Label = styled.li`
    width: 50%;
    font-weight: 300;
    margin-bottom: ${rem(15)};
    position: relative;
    padding-left: ${rem(27)};
    
    &:before{
        content: "";
        position: absolute;
        left: 0px;
        top: ${rem(6)};
        background: url('/static/images/check.svg') no-repeat center center;
        width: ${rem(15)};
        height: ${rem(10)};
        background-size: cover;
        opacity: 0.8;
    }
`;