import { Box, SxProps, Theme } from '@mui/material';
import React from 'react';

type CardListComponentProps = {
    outline?: boolean;
    children: React.ReactNode;
    sx?: SxProps<Theme>;
}

const CardListComponent = ({
    outline,
    children,
    sx
}: CardListComponentProps): JSX.Element => {

    let cardStyle: SxProps<Theme> = {}

    if(outline) {
        cardStyle = {
            borderColor: '#CCCCCC',
            borderWidth: 1,
            borderStyle: 'solid',
        }
    }

    return (
        <Box
            sx={{
                paddingX: 2,
                paddingY: 2,
                minHeight: '100px',
                borderRadius: 5,
                ...cardStyle,
                ...sx
            }}
        >
            {children}
        </Box>
    )

}

export default CardListComponent;