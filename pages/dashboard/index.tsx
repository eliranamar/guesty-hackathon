import styled from '@emotion/styled'
import Header from '../../src/components/header/Header'

import { Container } from '@mui/material'

const Background = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`
const data = [
    {
        account_id: '5f1050359f311f002ce2eaf2',
        listing_id: ['61a1fef12a4e1c0033292de0'],
        name: "Negroni's Trio at the Jamboree Jazz Club",
        description: '',
        type: 'concert',
        source: 'web',
        discount_amount: '',
        discount_type: '',
        location_longitude: '',
        location_latitude: '',
        location_address: 'Plaça Reial, 17 08002 Barcelona, Spain',
        image: 'https://images.sk-static.com/images/media/profile_images/artists/503547/huge_avatar',
        date_from: '2023-08-05',
        date_to: '2023-08-05',
        time: '20:00',
        link: 'https://www.songkick.com/concerts/41121072-negronis-trio-at-jamboree-jazz-club',
    },
    {
        account_id: '5f1050359f311f002ce2eaf2',
        listing_id: ['61a1fef12a4e1c0033292de0'],
        name: 'Adeline',
        description: '',
        type: 'concert',
        source: 'web',
        discount_amount: '',
        discount_type: '',
        location_longitude: '',
        location_latitude: '',
        distance: '400 m',
        location_address: 'Hotel Barcelo Raval Barcelona, Spain',
        image: 'https://images.sk-static.com/images/media/profile_images/artists/92855/huge_avatar',
        date_from: '2023-08-03',
        date_to: '2023-08-03',
        time: '18:30',
        link: 'https://www.songkick.com/concerts/41240635-adeline-at-hotel-barcelo-raval',
    },
    {
        account_id: '5f1050359f311f002ce2eaf2',
        listing_id: ['61a1fef12a4e1c0033292de0'],
        name: 'Cloonee',
        description: '',
        type: 'concert',
        source: 'web',
        discount_amount: '',
        discount_type: '',
        location_longitude: '',
        location_latitude: '',
        location_address:
            'Passeig Marítim de la Barceloneta 38 08003 Barcelona, Spain',
        image: 'https://www.songkick.com/concerts/41198345-cloonee-at-pacha-barcelona',
        date_from: '2023-08-06',
        date_to: '2023-08-06',
        time: '21:00',
        link: 'https://www.songkick.com/concerts/41121072-negronis-trio-at-jamboree-jazz-club',
    },
    {
        account_id: '5f1050359f311f002ce2eaf2',
        listing_id: ['61a1fef12a4e1c0033292de0'],
        name: 'Restaurant La Boqueria',
        description: '',
        type: 'restaurant',
        rating: 4.2,
        source: 'web',
        discount_amount: '',
        discount_type: '',
        location_longitude: '',
        location_latitude: '',
        distance: '350 m',
        location_address: 'C/ de la Boqueria, 17, 08002 Barcelona, Spain',
        image: 'https://lh5.googleusercontent.com/p/AF1QipNxP8y7FMnV0pJqSi8eMkd2vhup8Zp1-T9x3pJE=w408-h272-k-no',
        date_from: '',
        date_to: '',
        time: '',
        link: 'https://www.restaurantelaboqueria.com',
    },
    {
        account_id: '5f1050359f311f002ce2eaf2',
        listing_id: ['61a1fef12a4e1c0033292de0'],
        name: 'Tosca del Carme',
        description: '',
        type: 'restaurant',
        rating: 4.5,
        source: 'web',
        discount_amount: '',
        discount_type: '',
        location_longitude: '',
        location_latitude: '',
        distance: '350 m',
        location_address: 'C/ del Carme, 40, 08001 Barcelona, Spain',
        image: 'https://toscatapas.com/wp-content/uploads/2022/11/DSC8371-540x280-1.jpg',
        date_from: '',
        date_to: '',
        time: '',
        link: 'https://toscatapas.com',
    },
    {
        account_id: '5f1050359f311f002ce2eaf2',
        listing_id: ['61a1fef12a4e1c0033292de0'],
        name: 'Taco Alto',
        description: '',
        type: 'restaurant',
        rating: 4.0,
        source: 'host',
        discount_amount: '10%',
        discount_type: '',
        location_longitude: '',
        location_latitude: '',
        distance: '350 m',
        location_address: 'Rambla del Raval, 2, 08001 Barcelona, Spain',
        image: 'https://tacoalto.es/wp-content/uploads/2019/07/EventosTacoAlto01-378x252.jpg',
        date_from: '',
        date_to: '',
        time: '',
        link: 'https://tacoalto.es/',
    },
    {
        account_id: '5f1050359f311f002ce2eaf2',
        listing_id: ['61a1fef12a4e1c0033292de0'],
        name: 'Gran Gala Flamenco',
        description: '',
        type: 'event',
        source: 'web',
        discount_amount: '',
        discount_type: '',
        location_longitude: '',
        location_latitude: '',
        distance: '1.1 km',
        location_address: 'Palau de la MusicaPalau de la Musica Catalana',
        image: 'https://s3.eu-central-1.amazonaws.com/pub.bcnyf.p23-s3.secutix.com/images/catalog/product/large/8b177239-b7ee-4f72-b0d4-17098882bad2.png',
        date_from: '2023-08-06',
        date_to: '2023-08-06',
        time: '21:00',
        link: 'https://www.grangalaflamenco.com/en/',
    },
    {
        account_id: '5f1050359f311f002ce2eaf2',
        listing_id: ['61a1fef12a4e1c0033292de0'],
        name: 'Open air film festival at the castle of Montjuïc',
        description: '',
        type: 'event',
        source: 'web',
        discount_amount: '',
        discount_type: '',
        location_longitude: '',
        location_latitude: '',
        distance: '4.2 km',
        location_address: 'Montjuïc Castle, Barcelona, Spain',
        image: 'https://www.salamontjuic.org/wp-content/uploads/2023/03/SalaM-2015-84.jpg',
        date_from: '2023-08-04',
        date_to: '2023-08-04',
        time: '20:15',
        link: 'https://www.salamontjuic.org/en/',
    },
]

export default function Dashboard() {
    return (
        <Background>
            <Header />
            <img
                style={{
                    width: '100%',
                }}
                src="/img.png"
                alt="test"
            />
        </Background>
    )
}
