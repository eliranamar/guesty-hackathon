import {
    ExperienceSoruce,
    ExperienceType,
    Recommender,
} from '../../../constants/types'

export type Experience = {
    id: string
    account_id: string
    listing_id: string[]
    reservation_id: string
    name: string
    description: string
    distance: string
    recommender: Recommender
    type: ExperienceType
    source: ExperienceSoruce
    discount_amount: string
    discount_type: string
    location_longitude: string
    location_latitude: string
    location_address: string
    image: string
    date_from: string
    date_to: string
    time: string
    link: string
    rating: number
}

export interface ExperienceCardProps {
    experience: Experience
    showDescription?: boolean
}
