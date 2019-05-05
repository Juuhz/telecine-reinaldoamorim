// Import Styled
import styled from 'styled-components';

// Import Utils
import { rem } from '../../../utils/helpers';
import { DARK_GRAY } from '../../../utils/variables';

export const ModalWrapper = styled.div`
    z-index: 22;
    position: fixed;
    background: rgba( 0,0,0,0.8 );
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    width: 100%;
    max-width: 100%;
    height: 100%;
    background: ${DARK_GRAY};
    position: relative;
    padding: ${rem(25)};
    color: #FFF;
    text-align: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`;

export const CloseModal = styled.div`
    position: absolute;
    top: 0;
    right: 0px;
    text-align: center;
    font-weight: 100;
    font-size: ${rem(25)};
    padding: ${rem(5)} ${rem(10)};
    cursor: pointer;
    color: #FFF;
    z-index: 2;
`;