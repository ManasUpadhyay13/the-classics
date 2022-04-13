import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 250px;
    height: 320px;
    border: 2px solid black;
    border-radius: 20px;
    margin: 20px;
    display: flex;
    flex-direction:column;
    overflow: hidden;
`
const ImageContainer = styled.div`
    flex: 4;
    background-color: rgb(238,237,222);
    border: 1px solid black;
    border-radius: 10px;
    margin: 15px;
`

const Image = styled.img`
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`

const InfoContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Name = styled.p`
    font-weight: bold;
    font-size: 1.2rem;
`
const Job = styled.p``
export default function SingleMember({ image, job, name }) {
    return (
        <Container>

            <ImageContainer>
                <Image src={image} />
            </ImageContainer>

            <InfoContainer>
                <Name>{name}</Name>
                <Job>{job}</Job>
            </InfoContainer>

        </Container>
    )
}
