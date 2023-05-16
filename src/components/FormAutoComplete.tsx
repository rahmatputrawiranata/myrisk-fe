import { Autocomplete, MenuItem, Select, TextField } from "@mui/material"
import React from 'react';
import Form, { FormProps } from "./Form"

interface FormSelectProps extends FormProps {
    onChange?: () => void;
    value?: string | number | readonly string[] | undefined;
    items?: {
        label: string | number | readonly string[] | undefined;
        value: string | number | readonly string[] | undefined;
    }[]
}

const FormAutoComplete = ({...props}: FormSelectProps) =>  {
    return (
        <Form
            {...props}
            formComponent={
                <Autocomplete
                    fullWidth
                    onChange={props.onChange}
                    options={props.items ? props.items : []}
                    size="small"
                    renderInput={(params) => (<TextField  
                                                {...params} />)}
                />
            }
        />

    )
}

export default FormAutoComplete