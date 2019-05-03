// Import Styled
import styled from 'styled-components';

// Import Utils
import MDReactComponent from 'markdown-react-js';
import { Wrapper } from '../../utils/class';
import { RED, LIGTH_GRAY, DARK_GRAY } from '../../utils/variables';
import { rem } from '../../utils/helpers';

export const Section = styled(Wrapper)`
    width: 100%;
    background-size: cover;
    color: #FFF;
    background: ${LIGTH_GRAY};
    padding: 0px 15px 10px;
    margin-top: -50px;
`;

export const Title = styled.h2`
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 400;
    position: relative;
    display: inline-block;
    margin-bottom: 20px;

    &:after{
        content: "";
        width: 80px;
        height: 2px;
        background: #FFF;
        position: absolute;
        right: -100px;
        top: 8px;
        opacity: 0.4;
    }
`;

export const ItensWrapper = styled.div`
    margin-top: 10px;
`;

export const ItemWrapper = styled.div`
    position: relative;
`;

export const TitleItem = styled.p`
    font-size: 20px;
    line-height: 1.2;
    margin-bottom: 20px;
    font-weight: 300;
`;

export const ImageItem = styled.img`
    max-width: 100%;
    border-radius: 15px;
`;

export const TitleList = styled.h3`
    font-size: 16px;
    font-weight: 400;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const List = styled.ul`
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
`;

export const Label = styled.li`
    width: 50%;
    font-weight: 300;
    margin-bottom: 15px;
    position: relative;
    padding-left: 27px;

    &:before{
        content: "";
        position: absolute;
        left: 0px;
        top: 6px;
        background: url('/static/images/check.svg') no-repeat center center;
        width: 15px;
        height: 10px;
        background-size: cover;
        opacity: 0.8;
    }
`;