import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { Button, IconButton } from '@mui/material'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'

import RecommendationCard from '../recommendationCard/RecommendationCard'
import Modal from '../modals/modal/Modal'
import { useFormFields } from '../../hooks/useFormFields'

interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    )
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

export default function Recommendations({
    recommendationList,
    handleGetRecommendations,
}: {
    recommendationList: Array<{ [key: string]: any }>
    handleGetRecommendations: (type: 'HOST' | 'GUEST') => void
}): React.ReactNode {
    const [value, setValue] = React.useState(0)
    const [isOpenModal, setIsOpenModal] = React.useState(false)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    const { fields, handleFormChange, resetForm } = useFormFields({
        name: '',
        address: '',
    })

    const handleCloseModal = () => {
        setIsOpenModal(false)
    }

    const handleOpenModal = () => {
        resetForm()
        setIsOpenModal(true)
    }

    const handleSaveModal = () => {
        setIsOpenModal(false)
    }

    const renderButtonStyles = (color: string) => ({
        backgroundColor: color,
        color: 'text.primary',
        textTransform: 'none',
        borderRadius: '10px',
        '&:hover': {
            backgroundColor: color,
            opacity: '0.7',
        },
    })

    return (
        <Box sx={{ width: '100%', marginTop: '40px' }}>
            <Box
                sx={{ borderBottom: 1, borderColor: 'divider' }}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    sx={{
                        '& .MuiTabs-indicator': {
                            backgroundColor: 'text.primary',
                        },
                    }}
                    textColor="inherit"
                >
                    <Tab
                        onClick={() => handleGetRecommendations('HOST')}
                        label="Your recommendations"
                        {...a11yProps(0)}
                    />
                    <Tab
                        onClick={() => handleGetRecommendations('GUEST')}
                        label="Previous guest recommendation "
                        {...a11yProps(1)}
                    />
                </Tabs>
                <IconButton onClick={handleOpenModal}>
                    <AddCircleOutlinedIcon />
                </IconButton>
            </Box>
            <div style={{ textAlign: 'end', marginTop: 24, marginRight: 24 }}>
                <Link
                    href="/experience/preview"
                    style={{ textDecoration: 'none' }}
                >
                    <Typography variant="button" color="text.secondary">
                        Preview experiences
                    </Typography>
                </Link>
            </div>
            <CustomTabPanel value={value} index={0}>
                {recommendationList?.length > 0 &&
                    recommendationList?.map((recommendation) => (
                        <RecommendationCard
                            key={recommendation.name}
                            image={recommendation.image}
                            address={recommendation.location_address}
                            name={recommendation.name}
                            type={recommendation.type}
                            listing_id={recommendation.listing_id}
                        />
                    ))}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                {recommendationList?.length > 0 &&
                    recommendationList?.map((recommendation) => (
                        <RecommendationCard
                            key={recommendation.name}
                            image={recommendation.image}
                            address={recommendation.location_address}
                            name={recommendation.name}
                            type={recommendation.type}
                            listing_id={recommendation.listing_id}
                        />
                    ))}
            </CustomTabPanel>
            <Modal
                open={isOpenModal}
                title="Create"
                onClose={handleCloseModal}
                values={fields}
                handleFormChange={handleFormChange}
                renderFooter={() => (
                    <>
                        <Button
                            onClick={handleSaveModal}
                            sx={() => renderButtonStyles('#62DB29')}
                        >
                            Save
                        </Button>
                    </>
                )}
            />
        </Box>
    )
}
