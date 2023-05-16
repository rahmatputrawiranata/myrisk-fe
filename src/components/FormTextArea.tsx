import React from 'react';
import Form, { FormProps } from './Form';
import { TextareaAutosize } from '@mui/material';

interface FormTextAreaProps extends FormProps {
    value?: string | number | readonly string[] | undefined;
}

const FormTextArea = (props: FormTextAreaProps) => {

    return (
        <Form
            {...props}
            formComponent={
                <div>
                    <textarea style={{
                        width: '100%',
                        height: '100%',
                    }} cols={30} rows={7}>{props.value}</textarea>
                </div>
            }
        />
    )

}

export default FormTextArea