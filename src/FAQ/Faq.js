import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: rgb(32,32,32);
    text-align: center;
    overflow: hidden;
`
const Heading = styled.h1`
    display: inline-block;
    margin: 30px 20px;
    font-size: 3rem;
    color: white;
    border-bottom : 2px solid white;
`
const Wrapper = styled.div`
    min-height: 80vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    text-align: left;
`
const QnA = styled.div`
    width: 40%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`
const Question = styled.p`
    color: white;
    font-weight: bold;
    font-size: 1.1rem;
`
const Answer = styled.p`
    color: rgb(132,132,132);
`


export default function Faq() {
    return (
        <Container>
            <Heading>FAQ</Heading>
            <Wrapper>

                <QnA>
                    <Question>WHERE CAN I VIEW MY NFTS?</Question>
                    <Answer>Once minted or bought simply connect to your OpenSea account to view your NFTs.</Answer>
                </QnA>

                <QnA>
                    <Question>HOW CAN I USE MY NFT?</Question>
                    <Answer>You will be able to use your NFT as an avatar in the Metaverse and our future video game. Holding also means that you are part of an exclusive network of investors and entrepreneurs.</Answer>
                </QnA>

                <QnA>
                    <Question>WHAT IS THE METAVERSE?
                    </Question>
                    <Answer>A metaverse is a network of 3D virtual worlds focused on social connection. In futurism and science fiction, it is often described as a hypothetical iteration of the Internet as a single, universal virtual world that is facilitated by the use of virtual and augmented reality headsets.</Answer>
                </QnA>

                <QnA>
                    <Question>WHAT ARE THE CLASSICS?</Question>
                    <Answer>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt consequatur quisquam maxime molestias dolores ipsum, exercitationem vel sint quidem aliquam modi quis impedit corporis unde inventore fugiat provident in.</Answer>
                </QnA>

                <QnA>
                    <Question>WHY DO WE NEED ROYALTIES?</Question>
                    <Answer>The amount of royalties was fixed at 5% to finance the Weirdos Club's projects. We have the ambition to organize multiple events around the world in order to strengthen the community and build a network of entrepreneurs and investors with the same mindset and common interests.</Answer>
                </QnA>

                <QnA>
                    <Question>WHAT IS THE FUSION PROCESS?</Question>
                    <Answer>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel enim veritatis iusto officia. Exercitationem, ducimus reiciendis. Rem, maxime, similique neque minus aliquam dolore doloremque laboriosam, facilis quibusdam unde sint officia.</Answer>
                </QnA>

            </Wrapper>
        </Container>
    )
}
