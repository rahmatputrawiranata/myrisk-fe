import React from 'react';
import { Grid } from "@mui/material";
import { LineDivider } from '../../../components';

export const ObjectiveWrapperComponent = ({children, showLineDivider= true}: {children?: React.ReactNode, showLineDivider?: boolean}) => (
    <Grid container item sx={{paddingTop: '25px'}}>
        <Grid container item xs={12} sm={12} md={12} lg={12} alignItems="center">
            {children}
        </Grid>
        {
            showLineDivider && (
                <Grid container item xs={12} sm={12} md={12} lg={12} alignItems="center" sx={{paddingTop: '25px'}}>
                    <LineDivider />
                </Grid>
            )
        }
        
    </Grid>
)

export default ObjectiveWrapperComponent;