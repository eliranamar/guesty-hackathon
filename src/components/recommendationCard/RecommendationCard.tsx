import * as React from 'react'

import { Button, Typography } from '@mui/material'
import styled from '@emotion/styled'

import { useFormFields } from '../../hooks/useFormFields'
import EditModal from '../modals/editModal/EditModal'


const PreviewImage = styled.img`
    width: 96px;
    height: 96px;
    object-fit: cover;
    border-radius: 5px;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #d1d1d1;
    margin-bottom: 30px;
    border-radius: 15px;
    padding: 10px;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    flex: 1;

    & > * {
        margin-right: 15px;

        &:last-child {
            margin-right: 0;
        }
    }
`

const ContentDetails = styled.div`
    display: flex;
    flex-direction: column;

    & > * {
        margin-bottom: 3px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`

const Details = styled.div`
    display: flex;
    & > * {
        margin-right: 5px;

        &:last-child {
            margin-right: 0;
        }
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`

// TODO: Listings
export default function RecommendationCard({
    image,
    address,
    name,
    type,
    listing_id,
}: {
    image: string
    address: string
    name: string
    type: string
    listing_id: string[]
}): React.ReactNode {
    const [isOpenModal, setIsOpenModal] = React.useState(false)

    const { fields, handleFormChange, resetForm } = useFormFields({
        name,
        address,
        type,
    })

    const handleOpenModal = () => {
        setIsOpenModal(true)
        resetForm()
    }

    const handleCloseModal = () => {
        setIsOpenModal(false)
    }

    const handleSaveModal = () => {
        setIsOpenModal(false)
    }

    return (
        <Container>
            <Content>
                <PreviewImage src={image} alt={name} />
                <ContentDetails>
                    <Typography variant="h4" fontWeight={600} marginRight={1}>
                        {name}
                    </Typography>
                    <Details>
                        <Typography
                            fontSize={14}
                            color="#B79727"
                            fontWeight={600}
                            marginRight={1}
                            style={{ textTransform: 'capitalize' }}
                        >
                            {type}
                        </Typography>
                        <Typography fontSize={14} fontWeight={500}>
                            • Assigned to{' '}
                            {listing_id.length > 0 ? listing_id.length : 0}{' '}
                            listings
                        </Typography>
                    </Details>
                    <Typography color="#8c8c8c" fontSize={14}>
                        {address}
                    </Typography>
                </ContentDetails>
            </Content>
            <Controls>
                <Button
                    sx={{ color: 'text.primary' }}
                    onClick={handleOpenModal}
                >
                    <Typography textTransform="none" color="#8c8c8c">
                        Edit
                    </Typography>
                </Button>
            </Controls>
            <EditModal
              isOpen={isOpenModal}
              handleCloseModal={handleCloseModal}
              handleSaveModal={handleSaveModal}
              handleFormChange={handleFormChange}
              values={fields}
            />
        </Container>
    )
}
