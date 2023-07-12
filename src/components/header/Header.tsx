import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'

import { useRouter } from 'next/router'

import IconButton from '@mui/material/IconButton'

import AccountCircle from '@mui/icons-material/AccountCircle'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

const ROUTES = {
    analytics: '/',
    recommendations: '/recommendations',
}

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const [value, setValue] = React.useState(0)

    const router = useRouter()

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleTabClick = (route: string) => {
        router.push(ROUTES[route])
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                color="transparent"
                sx={{ boxShadow: 'none', border: '1px solid #E7E7E7' }}
            >
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        sx={{
                            minHeight: '64px',
                            '& .MuiTabs-flexContainer': {
                                height: '100%',
                            },

                            '& .MuiTabs-indicator': {
                                backgroundColor: 'text.primary',
                            },
                        }}
                        textColor="inherit"
                    >
                        <Tab
                            onClick={() => handleTabClick('analytics')}
                            label="Analytics"
                            {...a11yProps(1)}
                        />
                        <Tab
                            onClick={() => handleTabClick('recommendations')}
                            label="Recommendations"
                            {...a11yProps(2)}
                        />
                    </Tabs>
                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>
                                My account
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
