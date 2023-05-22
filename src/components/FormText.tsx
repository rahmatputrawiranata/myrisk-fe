import React from "react"
import { Grid, Input, SxProps, TextField, Typography } from "@mui/material"
import Form, { FormProps } from "./Form";

interface FormTextProps extends FormProps {
    value?: string;
    placeholder?: string;
    sx?: SxProps;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined
}
export const FormText = ({ ...props }: FormTextProps) => {

    return (
        <Form
            {...props}
            formComponent={
                <TextField
                    placeholder={props.placeholder}
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={props.value}
                    onChange={props.onChange}
                    sx={{
                        backgroundColor: '#FFFFFF',
                        borderColor: '#CCCCCC',
                        ...props.sx
                    }}
                />
            }
        />

    )
}