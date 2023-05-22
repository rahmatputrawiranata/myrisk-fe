import React from 'react'
import { Box, SxProps } from '@mui/material'

// create enum for color
const LabelComponent = ({children, color, filled = false, font_color}: {children?: React.ReactNode, color?: string, filled?: boolean, font_color?: string}) => {
    
    let labelStyle: SxProps = {}

    if(filled) {
        labelStyle = {
            backgroundColor: color,
            color: font_color || 'white',
            paddingY: '12px',
        }
    }else{
        labelStyle = {
            borderColor: color,
            borderStyle: 'solid',
            borderWidth: '2px',
            color: font_color || 'black'
        }
    }
    
    return (
        <Box
            sx={{
                paddingY: '10px',
                minWidth: 'calc(100% - 20px)',
                borderRadius: '100px',
                fontWeight: 'bold',
                fontSize: '12px',
                ...labelStyle,
                display: 'inline-block',
                marginX: '10px',
                textAlign: 'center'
            }}
        >
            {children}
        </Box>
    )
}

export default LabelComponent