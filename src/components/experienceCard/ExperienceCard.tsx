import * as React from 'react'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Stack from '@mui/material/Stack'
import { EXPERIENCE_TYPE, RECOMMENDER } from '../../../constants/memory'
import { ExperienceCardProps } from './types'

const ImgDiv = styled('div')<{ src: string }>(({ src }) => ({
    width: '100%',
    height: 140,
    background: `url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: 16,
    padding: 16,
    // '&:hover': {
    //     cursor: 'pointer',
    // }
}))

const getChipColor = (type: string) => {
    switch (type) {
        case EXPERIENCE_TYPE.RESTAURANT:
            return '#FFF964'
        case EXPERIENCE_TYPE.CONCERT:
            return '#FF87B2'
        case EXPERIENCE_TYPE.VOLUNTEERING:
            return '#FFD787'
        case EXPERIENCE_TYPE.TRIP:
            return '#87C9FF'
        default:
            return '#87FF9A'
    }
}

const getLabelByType = (recommender: string) => {
    switch (recommender) {
        case RECOMMENDER.GUEST:
            return 'Previous Guest recommendation'
        case RECOMMENDER.HOST:
            return 'Host recommendation'
    }
}

export default function ExperienceCard({
    experience,
    showDescription = true,
}: ExperienceCardProps) {
    const {
        distance,
        type,
        recommender,
        discount_amount,
        description,
        image,
        name,
        link,
    } = experience
    console.log({ experience })
    return (
        <div style={{ marginBottom: 48 }}>
            <Chip
                size="small"
                label={getLabelByType(recommender)}
                sx={{
                    borderRadius: '4px',
                    backgroundColor: getChipColor(type),
                }}
            />
            <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                sx={{ margin: '16px 0' }}
            >
                <Typography variant="h5" fontWeight={600}>
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <LocationOnIcon sx={{ verticalAlign: 'middle' }} />
                    {distance}
                </Typography>
            </Grid>
            <ImgDiv src={image}>
                <Grid container justifyContent="flex-end">
                    <Stack direction="row" spacing={1}>
                        {discount_amount && (
                            <Chip
                                size="small"
                                label={`${discount_amount}% off`}
                                sx={{
                                    borderRadius: '4px',
                                    backgroundColor: '#46FF59',
                                }}
                            />
                        )}
                        <Chip
                            size="small"
                            label={type}
                            sx={{
                                borderRadius: '4px',
                                backgroundColor: getChipColor(type),
                            }}
                        />
                    </Stack>
                </Grid>
            </ImgDiv>

            {showDescription && (
                <Typography
                    variant="body1"
                    style={{ margin: '16px 0' }}
                    color="text.secondary"
                >
                    {description}
                </Typography>
            )}

            <Link
                href={link}
                target="_blank"
                sx={{
                    margin: '16px 0',
                    textDecoration: 'none',
                }}
            >
                <Typography variant="button" color="text.primary">
                    Learn more
                </Typography>
            </Link>
        </div>
    )
}