import React from "react"
import { Grid, Input, SxProps, TextField, Typography } from "@mui/material"

export interface FormProps {
    label?: string;
    labelPosition?: 'top' | 'left' | 'right' | 'bottom' | 'none';
    formComponent?: React.ReactNode;
}

const Form = ({ label, labelPosition, formComponent }: FormProps) => {
    
    const labelStyle: SxProps = {
        fontWeight: 'bold',
        fontSize: '12px',
        color: '#000000',
    }

    return (
        <Grid container item xs={12} sm={12} md={12} lg={12} alignItems="center">
            {
              label && labelPosition !== 'none' && (
                    <Grid item xs={12} sm={
                        labelPosition === 'left' ? 3 : 12
                    } md={
                        labelPosition === 'left' ? 3 : 12
                    } lg={
                        labelPosition === 'left' ? 3 : 12
                    }
                    >
                        <Typography variant="body1" sx={labelStyle}>{label}</Typography>
                    </Grid>
                )
            }
            <Grid item xs={12} {
                ...(labelPosition === 'left' || labelPosition === 'right' ? {
                    sm: 9,
                    md: 9,
                    lg: 9
                } : {})
            }>
                {formComponent}
            </Grid>
            {
              label && labelPosition === 'right' && (
                    <Grid item xs={12} sm={3} md={3} lg={3}>
                        <Typography variant="body1" sx={
                            labelStyle
                        }>{label}</Typography>
                    </Grid>
                )
            }
        </Grid>
    )
}

export default Form