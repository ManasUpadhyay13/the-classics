import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = motion(styled.div`
    width: 50%;
    height: 200px;
    border: 3px solid black;
    padding: 15px;
    border-top-left-radius : 60px;
    border-bottom-right-radius : 70px;
`)
const Bucket = styled.div`
    width: 100%;
    height: 160px;
    border: 2px solid black;
    border-top-left-radius : 50px;
    border-bottom-right-radius : 60px;
    background-color: rgb(238,237,222);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    padding: 15px;
`
const Title = styled.h1`
    text-align: right;
    font-weight: 200;
`

const Desc = styled.p`
    text-align: right;
`

export default function Map({ click, id, title }) {
    return (
        <Container
            initial={{
                scale: 0
            }}
            animate={{
                scale: click ? 0.9 : 0,
            }}
            transition={{
                type: 'spring',
                stiffness: 240,

                delay: 1 * id / 2
            }}

        >
            <Bucket>
                <Title>{title}</Title>
                <Desc>
                    Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.
                </Desc>
            </Bucket>
        </Container>
    )
}
