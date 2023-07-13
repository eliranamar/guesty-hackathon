import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from '../src/Link'
import ProTip from '../src/ProTip'
import Copyright from '../src/Copyright'
import Button from '@mui/material/Button'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'

export default function Home() {
    return (
        <Container>
            <Box
                sx={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Link href="/experience/574027539872235" color="secondary">
                    <Button color="secondary" variant="contained">
                        Login as guest
                    </Button>
                </Link>

                <br />
                <br />
                <Link href="/dashboard" color="secondary">
                    <Button variant="outlined">login to host dashboard</Button>
                </Link>
                <ProTip />
                <Copyright />
                <br />
                <TravelExploreIcon sx={{ color: '#616161', fontSize: 64 }} />
            </Box>
        </Container>
    )
}
