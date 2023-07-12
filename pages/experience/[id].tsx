import * as React from 'react'
import { useMemo } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Stack from '@mui/material/Stack'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import ExperienceCard from '../../src/components/experienceCard/ExperienceCard'
import styled from '@emotion/styled'
import { toTitleCase } from '../../src/utils'
import { Experience } from '../../src/components/experienceCard/types'
import {
    ExperienceSoruce,
    ExperienceType,
    Recommender,
} from '../../constants/types'

const experiences: Experience[] = [
    {
        id: '1',
        account_id: '5f1050359f311f002ce2eaf2',
        listing_id: ['61a1fef12a4e1c0033292de0'],
        reservation_id: '649d218795c82f002be7a1c8',
        name: "Negroni's Trio at the Jamboree Jazz Club",
        description:
            'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        distance: '450m',
        recommender: Recommender.HOST,
        type: ExperienceType.CONCERT,
        source: ExperienceSoruce.AI,
        discount_amount: '5',
        discount_type: '',
        location_longitude: '',
        location_latitude: '',
        location_address: 'Plaça Reial, 17 08002 Barcelona, Spain',
        image: 'https://images.sk-static.com/images/media/profile_images/artists/503547/huge_avatar',
        date_from: '2023-08-05',
        date_to: '2023-08-05',
        time: '20:00',
        link: 'https://www.songkick.com/concerts/41121072-negronis-trio-at-jamboree-jazz-club',
        rating: 4.5,
    },
    {
        id: '2',
        account_id: '5f1050359f311f002ce2eaf2',
        listing_id: ['61a1fef12a4e1c0033292de0'],
        reservation_id: '649d218795c82f002be7a1c8',
        name: 'Volunteering at the local animal shelter',
        description:
            'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        distance: '450m',
        recommender: Recommender.HOST,
        type: ExperienceType.VOLUNTEERING,
        source: ExperienceSoruce.AI,
        discount_amount: '5',
        discount_type: '',
        location_longitude: '',
        location_latitude: '',
        location_address: 'Plaça Reial, 17 08002 Barcelona, Spain',
        image: 'https://images.sk-static.com/images/media/profile_images/artists/503547/huge_avatar',
        date_from: '2023-08-05',
        date_to: '2023-08-05',
        time: '20:00',
        link: 'https://www.songkick.com/concerts/41121072-negronis-trio-at-jamboree-jazz-club',
        rating: 5,
    },
    {
        id: '3',
        account_id: '5f1050359f311f002ce2eaf2',
        listing_id: ['61a1fef12a4e1c0033292de0'],
        reservation_id: '649d218795c82f002be7a1c8',
        name: 'Soccer match at Camp Nou',
        description:
            'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        distance: '450m',
        recommender: Recommender.HOST,
        type: ExperienceType.SPORT,
        source: ExperienceSoruce.HOST,
        discount_amount: '5',
        discount_type: '',
        location_longitude: '',
        location_latitude: '',
        location_address: 'Plaça Reial, 17 08002 Barcelona, Spain',
        image: 'https://images.sk-static.com/images/media/profile_images/artists/503547/huge_avatar',
        date_from: '2023-08-05',
        date_to: '2023-08-05',
        time: '20:00',
        link: 'https://www.songkick.com/concerts/41121072-negronis-trio-at-jamboree-jazz-club',
        rating: 5,
    },
]

const Background = styled('div')<{}>(({}) => ({
    position: 'relative',
    width: '100%',
    display: 'flex',
    height: 'calc(100vh - 64px)',
}))

const AbstractBackground = styled('img')(() => ({
    position: 'absolute',
    width: '100%',
    objectFit: 'cover',
    opacity: 0.4,
    top: 0,
    left: 0,
    right: 0,
    zIndex: -1,
}))

export default function Experience() {
    const [typeFilter, setTypeFilter] = React.useState<string>('ALL')
    const [recommenderFilter, setRecommenderFilter] =
        React.useState<string>('ALL')

    const filteredExperiences = useMemo(() => {
        let tempExperiences = [...experiences]
        if (typeFilter && typeFilter !== 'ALL') {
            tempExperiences = tempExperiences.filter(
                (experience) => experience.type === typeFilter,
            )
        }

        if (recommenderFilter && recommenderFilter !== 'ALL') {
            tempExperiences = tempExperiences.filter(
                (experience) => experience.recommender === recommenderFilter,
            )
        }

        return tempExperiences
    }, [experiences, typeFilter, recommenderFilter])

    // const hostRecommendations = useMemo(() => {
    //     return experiences.filter(
    //         (experience) => experience.source === EXPERIENCE_SOURCE.HOST,
    //     )
    // }, [experiences])

    // const autoRecommendations = useMemo(() => {
    //     return experiences.filter(
    //         (experience) => experience.source === EXPERIENCE_SOURCE.AI,
    //     )
    // }, [experiences])

    const handleTypeChange = (event: SelectChangeEvent) => {
        setTypeFilter(event.target.value as string)
    }
    const handleRecommenderChange = (event: SelectChangeEvent) => {
        setRecommenderFilter(event.target.value as string)
    }
    return (
        <Background>
            <AbstractBackground src="/Abstract.svg" />
            <Container style={{ maxWidth: 620, marginTop: 50 }}>
                <Typography
                    variant="h3"
                    fontWeight={600}
                    style={{ marginBottom: 25 }}
                >
                    Experiences we tailored for you
                </Typography>
                <Paper variant="outlined" sx={{ padding: 2 }}>
                    <Grid
                        container
                        spacing={1}
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid item>Filter by</Grid>
                        <Grid item>
                            <Grid container>
                                <Stack direction="row" spacing={1}>
                                    <FormControl fullWidth size="small">
                                        <InputLabel id="demo-simple-select-label">
                                            Type
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={typeFilter}
                                            label="Type"
                                            onChange={handleTypeChange}
                                        >
                                            <MenuItem value="ALL">All</MenuItem>
                                            {Object.values(ExperienceType).map(
                                                (type) => (
                                                    <MenuItem
                                                        key={type}
                                                        value={type}
                                                    >
                                                        {toTitleCase(type)}
                                                    </MenuItem>
                                                ),
                                            )}
                                        </Select>
                                    </FormControl>
                                    <FormControl fullWidth size="small">
                                        <InputLabel id="demo-simple-select-label">
                                            Recommender
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={recommenderFilter}
                                            label="Recommender"
                                            onChange={handleRecommenderChange}
                                        >
                                            <MenuItem value="ALL">All</MenuItem>
                                            {Object.values(Recommender).map(
                                                (type) => (
                                                    <MenuItem
                                                        key={type}
                                                        value={type}
                                                    >
                                                        {toTitleCase(type)}
                                                    </MenuItem>
                                                ),
                                            )}
                                        </Select>
                                    </FormControl>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
                <div>
                    {filteredExperiences.map((experience) => (
                        <ExperienceCard
                            key={`Host${experience.id}`}
                            experience={experience}
                        />
                    ))}
                </div>
                {filteredExperiences.length === 0 && (
                    <Typography
                        variant="h4"
                        fontWeight={600}
                        style={{ marginTop: 25 }}
                    >
                        No experiences found
                    </Typography>
                )}
            </Container>
        </Background>
    )
}
