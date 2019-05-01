import styled from 'styled-components';

export const ModalWrapper = styled.div`
    z-index: 22;
    position: fixed;
    background: rgba( 0,0,0,0.8 );
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    width: 650px;
    height: auto;
    background: #FFF;
    position: relative;
    padding: 30px;
`;

export const CloseModal = styled.div`
    position: absolute;
    top: 0;
    right: 0px;
    text-align: center;
    font-weight: 100;
    font-size: 25px;
    padding: 0px 10px;
    font-family: monospace;
    cursor: pointer;
`;

export const Thumbinial = styled.img`
    max-width: 200px;
    display: inline-block;
    vertical-align: top;
`;

export const Infos = styled.div`
    display: inline-block;
    vertical-align: top;
    width: calc( 100% - 200px );
    padding: 0px 20px;
`;

export const Name = styled.div`
    font-size: 26px;
`;

export const Stars = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

export const InfoStar = styled.div`
    font-size: 13px;
    margin-left: 7px;
    margin-top: 3px;
`;

export const InstaStats = styled.ul`
    border-top: 1px solid rgba(34, 34, 34, 0.21);
    margin-top: 10px;
    padding-top: 10px;
`;

export const ItemStats = styled.li`
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    margin-bottom: 4.5px;
`;

export const Label = styled.div`
    width: 200px;
`;

export const Value = styled.div`
    opacity: 0.65;
`;