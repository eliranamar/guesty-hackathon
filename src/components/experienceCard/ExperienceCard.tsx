import * as React from 'react'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Stack from '@mui/material/Stack'
import { Rating } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { ExperienceCardProps } from './types'
import { toTitleCase } from '../../utils'
import { ExperienceSource, ExperienceType } from '../../../constants/types'
import dayjs from '../../utils/dayjs'

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

const getLabelByType = (recommender: string, numOfGuests: number) => {
    switch (recommender) {
        case ExperienceSource.AI:
            return 'AI recommendation'
        case ExperienceSource.HOST:
            return 'Host recommendation'
        case ExperienceSource.GUEST:
            return `highly praised by ${numOfGuests || 21} previous guests`
    }
}

const nth = function (d: number) {
    if (d > 3 && d < 21) return 'th'
    switch (d % 10) {
        case 1:
            return 'st'
        case 2:
            return 'nd'
        case 3:
            return 'rd'
        default:
            return 'th'
    }
}

const getTimeLabel = (date_from: string, time: string) => {
    let label = ''
    // const date = new Date(date_from)
    // console.log(new Intl.DateTimeFormat('en-US').format(date))
    // label = new Intl.DateTimeFormat('en-US').format(date)

    // format the date to MMM DD format
    const date = new Date(date_from)
    const month = date.toLocaleString('default', { month: 'short' })
    const day = date.getDate()
    label = `${month} ${day + nth(day)}`

    if (time) {
        label = `${label} - ${time}`
    }

    return label
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
        previous_guests_counter,
        date_from,
        time,
    } = experience
    console.log({ experience })

    return (
        <div style={{ marginBottom: 48 }}>
            <Chip
                size="small"
                label={
                    <Typography variant="caption">
                        {getLabelByType(source, previous_guests_counter || 0)}
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
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="stretch"
                >
                    <Grid item>
                        {date_from && (
                            <Chip
                                size="small"
                                label={getTimeLabel(date_from, time)}
                                icon={<AccessTimeIcon />}
                                sx={{
                                    borderRadius: '4px',
                                    backgroundColor: '#d2d2d2',
                                }}
                            />
                        )}
                    </Grid>
                    <Grid item>
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
                    </Grid>
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
