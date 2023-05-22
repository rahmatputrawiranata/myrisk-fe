import { Autocomplete, MenuItem, Select, TextField, TextareaAutosize } from "@mui/material"
import React from 'react';
import Form, { FormProps } from "./Form"

interface FormSelectProps extends FormProps {
    onChange?: () => void;
    value?: string | number | readonly string[] | undefined;
    items?: {
        label: string | number | readonly string[] | undefined;
        value: string | number | readonly string[] | undefined;
    }[];
    multiline?: boolean
    multiple?: boolean
}

const FormAutoComplete = ({...props}: FormSelectProps) =>  {
    return (
        <Form
            label={props.label}
            labelPosition={props.labelPosition}
            formComponent={
                <Autocomplete
                    multiple={props.multiple}
                    fullWidth
                    onChange={props.onChange}
                    options={props.items ? props.items : []}
                    size="small"
                    renderInput={(params) => props.multiline ? (<TextareaAutosize {...params} />) : (<TextField  
                        {...params} />)}
                />
            }
        />

    )
}

export default FormAutoComplete