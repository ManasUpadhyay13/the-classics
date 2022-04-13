import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ArrowDownwardRounded } from '@material-ui/icons'
import Map from './Map'

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `

const Heading = motion(styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 3;
`)
const Title = motion(styled.h1`
    display: inline-block;
    cursor: pointer;
    border-bottom: 2px solid black;
`)
const Span = motion(styled.span`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`)

const Content = motion(styled.div`
    width: 100%;
    height: 110vh;
    display: flex;
`)

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`
function Roadmap() {
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    return (
        <Container>
            <Heading
                initial={{y:300}}
                animate={{
                    y: click ? -10 : 300
                }}
                transition={{
                    delay: click ? 3 : 0
                }}
            >
                <Span
                    animate={{
                        opacity: click ? 0 : 1
                    }}
                >( click <ArrowDownwardRounded /> )</Span>
                <Title
                    onClick={handleClick}
                    animate={{
                        scale: click ? 1.2 : 1
                    }}
                >
                    Roadmap.
                </Title>
            </Heading>

            <Content
                animate={{
                    opacity: click ? 1 : 0
                }}
            >

                <Left>
                    <Map click={click} id={1} title={'Early Access'} />
                    <Map click={click} id={3} title={'New Merch'} />
                </Left>


                <Right>
                    <Map click={click} id={0} title={'Grand Opening'} />
                    <Map click={click} id={2} title={'Great Benefits'} />
                    <Map click={click} id={4} title={'Holders Ranking'} />
                </Right>
            </Content>

        </Container>
    )
}

export default Roadmap