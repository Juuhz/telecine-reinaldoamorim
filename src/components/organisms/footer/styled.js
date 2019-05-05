// Import Styled
import styled from 'styled-components';

// Import Utils
import { Wrapper } from '../../../utils/class';
import { rem } from '../../../utils/helpers';
import HelpLink from '../../atoms/helpLink';
import Logo from '../../atoms/logo';

export const Section = styled(Wrapper)`
    width: 100%;
    text-align: center;
    color: #FFF;
`;

export const LogoFooter = styled(Logo)`
    margin: ${rem(25)} auto ${rem(10)};
`;

export const HelpLinkFooter = styled(HelpLink)`
    margin-top: ${rem(20)};
    margin-bottom: ${rem(25)};
`;