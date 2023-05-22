import { Autocomplete, MenuItem, Select, TextField } from "@mui/material"
import React from 'react';
import Form, { FormProps } from "./Form"
import { DatePicker, DateValidationError } from "@mui/x-date-pickers";
import { PickerChangeHandlerContext } from "@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.types";
import dayjs from "dayjs";

interface FormDatePickerProps extends FormProps {
    value?: dayjs.Dayjs | null;
    onChange?: ((value: dayjs.Dayjs | null, context: PickerChangeHandlerContext<DateValidationError>) => void) | undefined

}

const FormDatePicker = ({...props}: FormDatePickerProps) =>  {
    return (
        <Form
            {...props}
            formComponent={
                <DatePicker
                    value={props.value}
                    slotProps={{
                        textField: { size: "small" },
                    }}
                    onChange={props.onChange}
                />
            }
        />

    )
}

export default FormDatePicker