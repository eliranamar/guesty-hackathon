import styled from '@emotion/styled'
import Header from '../../src/components/header/Header'

const Background = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`

export default function Dashboard() {
    return (
        <Background>
            <Header />
        </Background>
    )
}
