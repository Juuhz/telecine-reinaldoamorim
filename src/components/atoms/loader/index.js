// Import Style
import { 
    LoaderBox, LoaderIcon, LoaderText 
} from './styled';

const Loader = () => (
    <LoaderBox>
        <LoaderIcon>
            <div></div><div></div>
        </LoaderIcon>
        <LoaderText>Enviando, aguarde...</LoaderText>
    </LoaderBox>
);

export default Loader;