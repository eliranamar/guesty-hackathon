import * as React from 'react'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ImgDiv = styled('div')(({ src }) => ({
    width: '100%',
    height: 140,
    background: `url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: 16,
    // '&:hover': {
    //     cursor: 'pointer',
    // }
}));

export default function ExperienceCard({ experience }) {
    const { title, distance, type, description, img } = experience;

    return (
        <div>
            <Chip label="Host recommendation" />
            <Grid container justifyContent="space-between" alignItems="center" style={{ margin: '24px 0' }}>
                <Typography variant="h5">
                    <strong>{title}</strong>
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    <LocationOnIcon/> {distance}
                </Typography>
            </Grid>

            <ImgDiv src={img}>
                <Chip label="Host recommendation" variant="filled" />
            </ImgDiv>

            <Typography variant="body1" style={{ margin: '24px 0' }} color="text.secondary">
                {description}
            </Typography>

            <Link href="https://google.com" target="_blank">
                Learn more >
            </Link>
        </div>
    )
}
