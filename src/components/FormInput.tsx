import React, { useState } from "react";
import { useForm } from "./useForm";
import { PaymentResponse } from "../utils/types";
import { postEndpoint } from "../utils/api";
import PaymentResponseTable from "./PaymentResponse";

const FormInput = () => {
    const [input, setInput] = useState('')
    const initialErrorFormState = {
        inputIsValid: true,
        errMsg: ''
    };
    let responseStateInitialVal: PaymentResponse = {
        balance: {
            non_snap: '',
            snap: '',
            updated: Date.now().toString(),
        },
        card: {
            last4: '',
            token: '',
            type: null,
        }
    }
    const [formState, setFormState] = useState(initialErrorFormState)
    const [responseState, setResponseState] = useState(responseStateInitialVal);

    const callback = async () => {
        let data: PaymentResponse = await postEndpoint(input);
        setResponseState(data);
    }

    const { onChange, onSubmit } = useForm(
        callback,
        formState,
    );

    return (
        <form onSubmit={onSubmit}>
        <div>
            <input
                name='acct'
                id='acct'
                type='password'
                placeholder='Password'
                onChange={onChange}
                required
                />
                <br />
            {formState.inputIsValid ? <></>: <span color="red">{formState.errMsg}<br /></span>}
            <button type='submit'>Submit</button>
            <PaymentResponseTable balance={responseState.balance} card={responseState.card}/>
        </div>
        </form>
    );
}

export default FormInput;