import * as React from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Button, Typography } from '@mui/material'

import EditModal from '../modals/editModal/EditModal'

// TODO: Listings
export default function RecommendationCard({
    image,
    address,
    name,
    type,
    listing_id,
}: {
    image: string
    address: string
    name: string
    type: string
    listing_id: string[]
}): React.ReactNode {
    const [isOpenModal, setIsOpenModal] = React.useState(false)

    const handleOpenModal = () => {
        setIsOpenModal(true)
    }

    const handleCloseModal = () => {
        setIsOpenModal(false)
    }

    const handleSaveModal = () => {
        setIsOpenModal(false)
    }

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
                marginBottom: '30px',
            }}
        >
            <Grid container spacing={2}>
                <Grid
                    item
                    xs={2}
                    sm={12}
                    md={2}
                    alignItems="center"
                    display="flex"
                >
                    <Box width={64} height={64} display="flex">
                        <img
                            style={{
                                objectFit: 'cover',
                                width: '100%',
                                height: '100%',
                            }}
                            src={image}
                            alt={name}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={8}>
                    <Box>
                        <Box display="flex" alignItems="center" flexWrap="wrap">
                            <Typography
                                variant="h4"
                                fontWeight={600}
                                marginRight={1}
                            >
                                {name}
                            </Typography>
                            <Box display="flex" flexDirection="row">
                                <Typography
                                    fontSize={14}
                                    color="#B79727"
                                    fontWeight={600}
                                    marginRight={1}
                                >
                                    {type}
                                </Typography>
                                <Typography fontSize={14} fontWeight={500}>
                                    • Assigned to{' '}
                                    {listing_id.length > 0
                                        ? listing_id.length
                                        : 0}{' '}
                                    listings
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Typography color="#8c8c8c" fontSize={14}>
                                {address}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={4}
                    md={2}
                    alignItems="center"
                    display="flex"
                    justifyContent="end"
                >
                    <Button
                        sx={{ color: 'text.primary' }}
                        onClick={handleOpenModal}
                    >
                        <Typography textTransform="none" color="#8c8c8c">
                            Edit
                        </Typography>
                    </Button>
                    <EditModal
                        isOpen={isOpenModal}
                        handleCloseModal={handleCloseModal}
                        handleSaveModal={handleSaveModal}
                        values={{
                            name,
                            address,
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}
