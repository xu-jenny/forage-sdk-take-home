import { useState } from "react";

export const useForm = (submitCallback: any, initialState = {}, validator = (values: any) => true, errorCallback = (msg: string) => console.log(msg)) => {
    const [values, setValues] = useState(initialState);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //@ts-ignore
        if(validator(values.acct)){
            await submitCallback(); 
        } else {
            errorCallback("Your input is invalid");
        }
    };
    return {
        onChange,
        onSubmit,
        values,
    };
}