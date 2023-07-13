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
// import OutlinedInput from '@mui/material/OutlinedInput'
// import ListItemText from '@mui/material/ListItemText'
// import Checkbox from '@mui/material/Checkbox'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import ExperienceCard from '../../src/components/experienceCard/ExperienceCard'
import styled from '@emotion/styled'
import { toTitleCase } from '../../src/utils'
import { Experience } from '../../src/components/experienceCard/types'
import { ExperienceType, ExperienceSource } from '../../constants/types'
// import experiences from '../../data/experiences.json'
import Fade from '@mui/material/Fade'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button'
import {
    GetServerSideProps,
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
} from 'next'

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

const Logo = styled.img`
    max-width: 250px;
    width: calc(100% - 15px - 15px);
    height: auto;
    padding: 15px;
`

export const getServerSideProps: GetServerSideProps<{
    isPreview: boolean
    experiences: Array<Experience>
}> = async (context: GetServerSidePropsContext) => {
    const dataPromise = await fetch(
        `${process.env.BASE_URL}/api/experiences/list`,
    )
    const data = await dataPromise.json()

    return {
        props: { isPreview: context.query.id === 'preview', experiences: data },
    }
}

export default function Experience({
    isPreview,
    experiences,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [typeFilter, setTypeFilter] = React.useState<string>('ALL')
    const [sourceFilter, setSourceFilter] = React.useState<string>('ALL')
    const router = useRouter()

    const filteredExperiences = useMemo(() => {
        let tempExperiences: Experience[] = [...experiences] as Experience[]
        if (typeFilter && typeFilter !== 'ALL') {
            tempExperiences = tempExperiences.filter(
                (experience) => experience.type === typeFilter,
            )
        }

        if (sourceFilter && sourceFilter !== 'ALL') {
            tempExperiences = tempExperiences.filter(
                (experience) => experience.source === sourceFilter,
            )
        }

        return tempExperiences
    }, [experiences, typeFilter, sourceFilter])

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
        setSourceFilter(event.target.value as string)
    }
    return (
        <Background>
            <AbstractBackground src="/Abstract.svg" />
            <Container style={{ maxWidth: 620, marginTop: 50 }}>
                <div style={{ textAlign: 'center', marginBottom: 50 }}>
                    <Logo src="/host_logo.png" alt="" />
                </div>
                <Typography
                    variant="h3"
                    fontWeight={600}
                    style={{ marginBottom: 25 }}
                >
                    {isPreview
                        ? 'Experiences preview for your guests'
                        : 'Experiences we tailored for you'}
                </Typography>
                {/* go back button if this is a preview */}
                {isPreview && (
                    <div style={{ marginBottom: 25 }}>
                        <Button onClick={router.back}>
                            Back to your dashboard
                        </Button>
                    </div>
                )}
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
                                    <FormControl
                                        fullWidth
                                        size="small"
                                        sx={{ minWidth: 106 }}
                                    >
                                        <InputLabel id="demo-simple-select-label">
                                            Recommender
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={sourceFilter}
                                            label="Recommender"
                                            onChange={handleRecommenderChange}
                                        >
                                            <MenuItem value="ALL">All</MenuItem>
                                            {Object.values(
                                                ExperienceSource,
                                            ).map((source) => (
                                                <MenuItem
                                                    key={source}
                                                    value={source}
                                                >
                                                    {source ===
                                                    ExperienceSource.AI
                                                        ? 'AI'
                                                        : toTitleCase(source)}
                                                </MenuItem>
                                            ))}
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
