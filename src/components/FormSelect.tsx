import { MenuItem, Select } from "@mui/material"
import React from 'react';
import Form, { FormProps } from "./Form"

interface FormSelectProps extends FormProps {
    onChange?: () => void;
    value?: any;
    items?: {
        value: any;
        label: React.ReactNode | string;
    }[]
}

const FormSelect = ({...props}: FormSelectProps) =>  {
    return (
        <Form
            {...props}
            formComponent={
                <Select
                    size="small"
                    fullWidth
                    onChange={props.onChange}
                    value={props.value}
                    >
                        {
                            props?.items?.map((item, index) => (
                                <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                            ))
                        }
                    </Select>
            }
        />

    )
}

export default FormSelect