import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useRouter } from 'next/router'
import Chip from '@mui/material/Chip'
import Link from '../../src/Link'
import ExperienceCard from '../../src/components/experienceCard'
import { EXPERIENCE_SOURCE, EXPERIENCE_TYPE } from '../../constants/memory'

const experiences = [
    {
        id: '1',
        account_id: '5f1050359f311f002ce2eaf2',
        listing_id: ['61a1fef12a4e1c0033292de0'],
        reservation_id: '649d218795c82f002be7a1c8',
        name: "Negroni's Trio at the Jamboree Jazz Club",
        description:
            'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        distance: '450 m',
        type: EXPERIENCE_TYPE.CONCERT,
        source: EXPERIENCE_SOURCE.AI,
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
        distance: '450 m',
        type: EXPERIENCE_TYPE.VOLUNTEERING,
        source: EXPERIENCE_SOURCE.AI,
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
        distance: '450 m',
        type: EXPERIENCE_TYPE.SPORT,
        source: EXPERIENCE_SOURCE.HOST,
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
                                key={experience.id + experience.reservation_id}
                                experience={experience}
                            />
                        ))}
                    </div>
                </Container>
            </Container>
        </div>
    )
}
