// Import Style
import { LogoTitle, LogoImg } from './styled';

const Logo = ( props ) => {
    if( props.title ){
        return (
            <LogoTitle {...props} />
        );
    }else{
        return (
            <LogoImg {...props} />
        );
    }
};

export default Logo;