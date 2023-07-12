import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

import Box from '@mui/material/Box'

import RecommendationCard from '../recommendationCard/RecommendationCard'

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
}: {
    recommendationList: Array<{ [key: string]: any }>
}): React.ReactNode {
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
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
                    <Tab label="Your recommendations" {...a11yProps(0)} />
                    <Tab
                        label="Previous guest recommendation "
                        {...a11yProps(1)}
                    />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                {recommendationList?.length > 0 &&
                    recommendationList?.map((recommendation) => (
                        <RecommendationCard
                            key={recommendation.name}
                            image={recommendation.image}
                            address={recommendation.location_address}
                            name={recommendation.name}
                            type={recommendation.type}
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
                        />
                    ))}
            </CustomTabPanel>
        </Box>
    )
}
