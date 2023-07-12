import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from '../src/Link'
import ProTip from '../src/ProTip'
import Copyright from '../src/Copyright'

export default function Home() {
    return (
        <Container>
            <Box
                sx={{
                    my: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Link href="/dashboard" color="secondary">
                    Login to host dashboard
                </Link>
                <Link href="/experience/574027539872235" color="secondary">
                    Login to guest
                </Link>
                <ProTip />
                <Copyright />
            </Box>
        </Container>
    )
}
