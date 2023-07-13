import styled from '@emotion/styled'
import Header from '../../src/components/header/Header'
import Recommendations from '../../src/components/recommendations/Recommendations'
import Container from '@mui/material/Container'
import { useEffect, useState } from 'react'

const Background = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`

export default function RecommendationsPage() {
    const [recommendationList, setRecommendationList] = useState([])

    const getRecommendationList = async (type: 'HOST' | 'GUEST') => {
        try {
            const recommendations = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/experiences/list?source=${type}`,
            )

            const recommendationsData = await recommendations.json()

            setRecommendationList(recommendationsData)
        } catch (error) {}
    }

    useEffect(() => {
        getRecommendationList('HOST')
    }, [])

    return (
        <Background>
            <Header />
            <Container>
                <Recommendations
                    recommendationList={recommendationList}
                    handleGetRecommendations={getRecommendationList}
                />
            </Container>
        </Background>
    )
}
