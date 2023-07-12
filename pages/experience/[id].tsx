import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useRouter } from 'next/router'
import Chip from '@mui/material/Chip'
import Link from '../../src/Link'
import ExperienceCard from '../../src/components/experienceCard'

const experiences = [
    {
        id: '1',
        title: 'Experience 1',
        distance: '1.5 km',
        type: 'RESTAURANT',
        img: 'https://www.shutterstock.com/image-illustration/fake-news-on-internet-modern-600w-1121670800.jpg',
        description:
            'Check out Ibuki for a great argument in favor of the style, despite their inconvenient location on Tokyo’s north side. Upwards of 14 different kinds of dried fish from around Japan are used in the preparation of the soup depending on the day, so expect a slightly different experience each time you visit.',
    },
    {
        id: '2',
        title: 'Experience 2',
        distance: '2.5 km',
        type: 'TRIP',
        img: 'https://www.shutterstock.com/image-illustration/fake-news-on-internet-modern-600w-1121670800.jpg',
        description:
            'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
        id: '3',
        title: 'Experience 3',
        distance: '3.5 km',
        type: 'HOTEL',
        discount: 50,
        img: 'https://www.shutterstock.com/image-illustration/fake-news-on-internet-modern-600w-1121670800.jpg',
        description:
            'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
]

export default function Experience() {
    const router = useRouter()
    return (
        <div>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        my: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h3" gutterBottom fontWeight={600}>
                        Experiences we tailored for you
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        This is the guest experience page with id:{' '}
                        {router.query.id}
                    </Typography>
                    <Link href="/" color="secondary">
                        Go to the home page
                    </Link>
                </Box>

                <Container maxWidth="sm">
                    <div>
                        <Chip
                            size="small"
                            label="Host recommendations"
                            sx={{
                                borderRadius: '4px',
                                backgroundColor: '#87FF9A',
                            }}
                        />
                        {experiences.map((experience) => (
                            <ExperienceCard
                                key={experience.id}
                                experience={experience}
                            />
                        ))}
                    </div>
                    <div>
                        <Chip
                            size="small"
                            label="Guests recommendations"
                            sx={{
                                borderRadius: '4px',
                                backgroundColor: '#FFC187',
                            }}
                        />
                        {experiences.map((experience) => (
                            <ExperienceCard
                                key={experience.id}
                                experience={experience}
                            />
                        ))}
                    </div>
                    <div>
                        <Chip
                            size="small"
                            label="A.I. recommendations"
                            sx={{
                                borderRadius: '4px',
                                backgroundColor: '#87FF9A',
                            }}
                        />
                        {experiences.map((experience) => (
                            <ExperienceCard
                                key={experience.id}
                                experience={experience}
                            />
                        ))}
                    </div>
                </Container>
            </Container>
        </div>
    )
}
