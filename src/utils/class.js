// Import Styled
import styled from 'styled-components';

// Import Utils
import { rem } from './helpers';

// Classes
export const Wrapper = styled.section`
    position: relative;
`;

export const Container = styled.div`
    margin: 0 auto;
    padding: 0px ${rem(15)};
    width: 100%;

    @media (min-width: 734px){
        max-width: ${rem(704)};
        padding: 0px;
    }

    @media (min-width: 1024px){
        max-width: ${rem(960)};
    }

    @media (min-width: 1200px){
        max-width: ${rem(1170)};
    }
`;

