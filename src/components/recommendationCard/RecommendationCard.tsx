import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { Button, Typography } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border: 'none',
    boxShadow: 'none',
}))

export default function RecommendationCard() {
    return (
        <Box
            sx={{
                flexGrow: 1,
                border: '1px solid #D1D1D1',
                borderRadius: '8px',
                minHeight: '90px',
                alignItems: 'center',
                display: 'flex',
                padding: '15px',
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={2} md={2} alignItems="center" display="flex">
                    Image mock
                </Grid>
                <Grid item xs={8}>
                    <Box>
                        <Box display="flex" alignItems="center">
                            <Typography
                                variant="h4"
                                fontWeight={600}
                                marginRight={1}
                            >
                                Ramen Ibuki
                            </Typography>
                            <Typography
                                fontSize={14}
                                color="#B79727"
                                fontWeight={600}
                                marginRight={1}
                            >
                                Restaurant
                            </Typography>
                            <Typography marginRight={1}>•</Typography>
                            <Typography fontSize={14} fontWeight={500}>
                                Assigned to 4 listings{' '}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography color="#8c8c8c" fontSize={14}>
                                4 Chome-58-10 Maenocho, Itabashi City, Tokyo
                                174-0063, Japan
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={2}
                    alignItems="center"
                    display="flex"
                    justifyContent="end"
                >
                    <Button>
                        <Typography textTransform="none" color="#8c8c8c">
                            Edit
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}
