import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from '../../src/Link'
import Button from '@mui/material/Button'

export default function Manage() {
    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    my: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    This is the host dashboard page
                </Typography>
                <Link href="/host/manage" color="secondary">
                    <Button variant="contained">
                        Go to manage experiences page
                    </Button>
                </Link>
                <br />
                <Link href="/" color="secondary">
                    <Button variant="contained">Go to the home page</Button>
                </Link>
            </Box>
        </Container>
    )
}
