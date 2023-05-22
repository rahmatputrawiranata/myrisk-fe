import { MenuItem, Select, SelectProps, SxProps, Theme } from "@mui/material"
import React from 'react';
import Form, { FormProps } from "./Form"

interface FormSelectProps extends FormProps {
    items?: {
        value: any;
        label: React.ReactNode | string;
    }[],
    sx?: SxProps<Theme>;
    value?: string;
    onChange?: SelectProps['onChange'];
}

const FormSelect = ({
    items,
    label,
    labelPosition,
    onChange,
    sx,
    value
}: FormSelectProps) =>  {
    return (
        <Form
            label={label}
            labelPosition={labelPosition}
            formComponent={
                <Select
                    size="small"
                    fullWidth
                    onChange={onChange}
                    sx={sx}
                    value={value}
                    >
                        {
                            items?.map((item, index) => (
                                <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                            ))
                        }
                    </Select>
            }
        />

    )
}

export default FormSelect