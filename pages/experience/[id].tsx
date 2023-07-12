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
import OutlinedInput from '@mui/material/OutlinedInput'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
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
import exper from '../../data/experiences.json'
import Fade from '@mui/material/Fade'

console.log({ exper })
const experiences: Experience[] = [
    {
        id: '1',
        account_id: '5f1050359f311f002ce2eaf2',
        listing_id: ['61a1fef12a4e1c0033292de0'],
        reservation_id: '649d218795c82f002be7a1c8',
        name: "Negroni's Trio at the Jamboree Jazz Club",
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
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
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        distance: '450m',
        recommender: Recommender.HOST,
        type: ExperienceType.VOLUNTEERING,
        source: ExperienceSoruce.AI,
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
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
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

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
}

export default function Experience() {
    const [typeFilter, setTypeFilter] = React.useState<string>('ALL')
    const [recommenderFilter, setRecommenderFilter] =
        React.useState<string>('ALL')

    const filteredExperiences = useMemo(() => {
        let tempExperiences = [...exper]
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
    }, [exper, typeFilter, recommenderFilter])

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
                <div style={{ textAlign: 'center', marginBottom: 50 }}>
                    <img src="/host_logo.png" alt="" />
                </div>
                <Typography
                    variant="h3"
                    fontWeight={600}
                    style={{ marginBottom: 25 }}
                >
                    Experiences we tailored for you
                </Typography>
                <Paper variant="outlined" sx={{ padding: 2, marginBottom: 4 }}>
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
                                    {/* TODO: multi select filter */}
                                    {/*<FormControl sx={{ m: 1, width: 300 }}>
                                        <InputLabel id="demo-multiple-checkbox-label">
                                            Type
                                        </InputLabel>
                                        <Select
                                            labelId="demo-multiple-checkbox-label"
                                            id="demo-multiple-checkbox"
                                            multiple
                                            value={personName}
                                            onChange={handleChange}
                                            input={
                                                <OutlinedInput label="Tag" />
                                            }
                                            renderValue={(selected) =>
                                                selected.join(', ')
                                            }
                                            MenuProps={MenuProps}
                                        >
                                            {Object.values(ExperienceType).map(
                                                (name) => (
                                                    <MenuItem
                                                        key={name}
                                                        value={name}
                                                    >
                                                        <Checkbox
                                                            checked={
                                                                personName.indexOf(
                                                                    name,
                                                                ) > -1
                                                            }
                                                        />
                                                        <ListItemText
                                                            primary={name}
                                                        />
                                                    </MenuItem>
                                                ),
                                            )}
                                        </Select>
                                    </FormControl>*/}
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
                <div style={{ marginBottom: 80 }}>
                    {filteredExperiences.map((experience, index) => (
                        <Fade
                            key={`Host${experience.id}`}
                            in
                            timeout={index * 300}
                        >
                            <div>
                                <ExperienceCard experience={experience} />
                            </div>
                        </Fade>
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
