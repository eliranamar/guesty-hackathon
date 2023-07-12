import * as React from 'react'

import Box from '@mui/material/Box'

import Recommendations from '../src/components/recommendations/Recommendations'

export default function About() {
    return (
        <Box
            sx={{
                my: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Recommendations />
        </Box>
    )
}
