import * as React from 'react'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Stack from '@mui/material/Stack'
import { Rating } from '@mui/material'
import { EXPERIENCE_TYPE, RECOMMENDER } from '../../../constants/memory'
import { ExperienceCardProps } from './types'
import { toTitleCase } from '../../utils'
import { ExperienceSource, ExperienceType } from '../../../constants/types'

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
        case ExperienceType.CONCERT:
            return '#FFF964'
        case ExperienceType.SPORT:
            return '#FF87B2'
        case ExperienceType.VOLUNTEERING:
            return '#FFD787'
        case ExperienceType.TRIP:
            return '#87C9FF'
        case ExperienceType.EVENT:
            return '#FFC787'
        case ExperienceSource.AI:
            return '#69e57d'
        case ExperienceSource.HOST:
            return '#87b5ff'
        case ExperienceSource.GUEST:
            return '#eaab60'
        default:
            return '#87FF9A'
    }
}

const getLabelByType = (recommender: string) => {
    switch (recommender) {
        case ExperienceSource.AI:
            return 'AI recommendation'
        case ExperienceSource.HOST:
            return 'Host recommendation'
        case ExperienceSource.GUEST:
            return 'Previous Guest recommendation'
    }
}

export default function ExperienceCard({
    experience,
    showDescription = true,
}: ExperienceCardProps) {
    const {
        distance,
        type,
        discount_amount,
        description,
        image,
        name,
        link,
        rating,
        source,
    } = experience
    console.log({ experience })

    return (
        <div style={{ marginBottom: 48 }}>
            <Chip
                size="small"
                label={
                    <Typography variant="caption">
                        {getLabelByType(source)}
                    </Typography>
                }
                sx={{
                    borderRadius: '4px',
                    backgroundColor: getChipColor(source),
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
                            label={toTitleCase(type)}
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

            <Grid container justifyContent="space-between" alignItems="center">
                {rating && (
                    <Rating readOnly defaultValue={rating} precision={0.5} />
                )}
                <div>
                    <Link
                        href={link}
                        target="_blank"
                        sx={{
                            margin: '16px 0',
                            textDecoration: 'none',
                        }}
                    >
                        <Typography variant="subtitle1" color="text.primary">
                            {'Learn more >'}
                        </Typography>
                    </Link>
                </div>
            </Grid>
        </div>
    )
}
