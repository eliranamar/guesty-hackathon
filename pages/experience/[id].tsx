import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useRouter } from 'next/router'
import Link from '../../src/Link'

export default function Experience() {
    const router = useRouter()
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
                    This is the guest experience page with id: {router.query.id}
                </Typography>
                <Link href="/" color="secondary">
                    Go to the home page
                </Link>
            </Box>
        </Container>
    )
}
