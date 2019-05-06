// Import Style
import { BoxInput, Field, Label } from './styled';

const Input = ( props ) => {
    const { input } = props;
    return(  
        <BoxInput {...props}>
            <Field type={input.type} name={input.id} id={input.id} mask={input.mask} maskChar={null} required/>
            <Label className="labelInput" htmlFor={input.id}>{input.label}</Label>
        </BoxInput>
    );
}

export default Input;