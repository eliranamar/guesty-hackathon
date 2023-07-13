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
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'
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
    switch (type.toLowerCase()) {
        case ExperienceType.CONCERT.toLowerCase():
            return '#fec802'
        case ExperienceType.SPORT.toLowerCase():
            return '#ab47bc'
        case ExperienceType.VOLUNTEERING.toLowerCase():
            return '#5dc483'
        case ExperienceType.TRIP.toLowerCase():
            return '#b8edef'
        case ExperienceType.EVENT.toLowerCase():
            return '#14c4c4'
        case ExperienceSource.AI.toLowerCase():
            return '#bdbecd'
        case ExperienceSource.HOST.toLowerCase():
            return '#ff8a00'
        case ExperienceSource.GUEST.toLowerCase():
            return '#d40033'
        default:
            return '#87FF9A'
    }
}

const getChipColorBySource = (source: string) => {
    switch (source) {
        case ExperienceSource.AI:
            return '#b8edef'
        case ExperienceSource.HOST:
            return '#8fd4a7'
        case ExperienceSource.GUEST:
            return '#fef9e5'
    }
}

const getLabelBySource = (source: string, numOfGuests: number) => {
    switch (source) {
        case ExperienceSource.AI:
            return 'AI recommendation'
        case ExperienceSource.HOST:
            return 'Host recommendation'
        case ExperienceSource.GUEST:
            return `Highly praised by ${numOfGuests || 21} previous guests`
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
                        {getLabelBySource(source, previous_guests_counter || 0)}
                    </Typography>
                }
                sx={{
                    borderRadius: '4px',
                    backgroundColor: getChipColorBySource(source),
                }}
                icon={
                    source === ExperienceSource.AI ? (
                        <AutoFixHighIcon />
                    ) : undefined
                }
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
                                    backgroundColor: '#D9D9D9',
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
