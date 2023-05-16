import React from "react"
import { Grid, Input, SxProps, TextField, Typography } from "@mui/material"
import Form, { FormProps } from "../Form";

interface FormTextProps extends FormProps {
    value?: string;
    placeholder?: string;
    sx?: SxProps;
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