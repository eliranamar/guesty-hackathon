import * as React from 'react'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Stack from '@mui/material/Stack';

const ImgDiv = styled('div')(({ src }) => ({
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
}));

const getChipColor = (type) => {
    switch (type) {
        case 'RESTAURANT':
            return '#FFF964';
        case 'TOUR':
            return '#FF87B2';
        case 'VOLUNTEERING':
            return '#FFD787';
        case 'HOTEL':
            return '#87C9FF';
        default:
            return '#87FF9A';
    }
}

export default function ExperienceCard({ experience }) {
    const { title, distance, type, description, img } = experience;

    return (
        <div style={{marginBottom: 48}}>
            <Grid container justifyContent="space-between" alignItems="center" sx={{ margin: '16px 0' }}>
                <Typography variant="h5" fontWeight={600}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <LocationOnIcon sx={{ verticalAlign: 'middle' }}/> {distance}
                </Typography>
            </Grid>

            <ImgDiv src={img}>
                <Grid container justifyContent="flex-end">
                    <Stack direction="row" spacing={1}>
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

            <Typography variant="body1" style={{ margin: '16px 0' }} color="text.secondary">
                <strong>{description}</strong>
            </Typography>

            <Link href="https://google.com" target="_blank" sx={{ margin: '16px 0', textDecoration: 'none' }}>
                <Typography variant="button" color="text.primary">
                    Learn more >
                </Typography>
            </Link>
        </div>
    )
}
