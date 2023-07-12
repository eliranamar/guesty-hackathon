import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from '../src/Link'
import ProTip from '../src/ProTip'
import Copyright from '../src/Copyright'

export default function Home() {
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
                    Welcome to your dashboard
                </Typography>
                <Link href="/about" color="secondary">
                    Go to the about page
                </Link>
                <Link href="/host/manage" color="secondary">
                    Go to manage experiences page
                </Link>
                <ProTip />
                <Copyright />
            </Box>
        </Container>
    )
}
