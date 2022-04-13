import React from 'react'
import styled from 'styled-components'
import { Data } from '../Data'
import SingleMember from './SingleMember'

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    text-align: center;
`
const Heading = styled.h1`
    display: block;
    margin: 10px auto;
    border-bottom: 2px solid black;
    font-size: 3rem;
    display: inline-block;
`

const Members = styled.div`
    padding: 20px 200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export default function Team() {
    return (
        <Container>
            <Heading>Team</Heading>
            <Members>
                {
                    Data.map((item) => {
                        return (
                            <SingleMember key={item.id} image={item.image} job={item.job} name={item.name} />
                        )
                    })
                }
            </Members>
        </Container>
    )
}
