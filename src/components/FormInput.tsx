import React, { useState } from "react";
import { useForm } from "./useForm";
import { PaymentResponse, InputVariant } from "../utils/types";
import { postEndpoint } from "../utils/api";
import { useDispatch } from "react-redux";
import { setBalance, setCard } from "../redux/paymentSlice";
import { Button, TextField } from "@mui/material";

interface Props {
    inputVariant?: InputVariant,
    label?: string,
    validator?: (...args: any[]) => boolean,
}

const FormInput: React.FC<Props> = (props) => {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    const [formState, setFormState] = useState({inputValid: true, errMsg: '', acct: ''})

    const callback = async () => {
        setFormState({...formState, inputValid: true, errMsg:''})
        let data: PaymentResponse = await postEndpoint(input);
        dispatch(setCard(data.card));
        dispatch(setBalance(data.balance));
    }

    const { onChange, onSubmit } = useForm(
        callback,
        formState,
        props.validator,
        (msg: string) => setFormState({ ...formState, inputValid: false, errMsg: msg})
    );

    return (
        <form onSubmit={onSubmit}>
        <div>
            <TextField 
                label={props.label} 
                variant={props.inputVariant} 
                onChange={onChange} name='acct' 
                error={!formState.inputValid}
                helperText={formState.inputValid ? '' : formState.errMsg}
            />
            <Button variant="contained" type='submit'>Submit</Button>
        </div>
        </form>
    );
}

FormInput.defaultProps = {
    inputVariant: InputVariant.STANDARD,
    label: 'Ebt card number',
    validator: (input: any) => input.length > 3,
}

export default FormInput;   