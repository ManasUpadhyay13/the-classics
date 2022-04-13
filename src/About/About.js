import React, { useState } from 'react'
import styled from 'styled-components'
import { Data } from '../Data'

const Container = styled.div`
    height: 100vh; 
    width: 100%; 
    background-color: rgb(32,32,32);
    display: flex;
    overflow: hidden;
`

const Left = styled.div`
    flex : 1;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Right = styled.div`  
    flex : 1; 
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Wrapper = styled.div`
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Heading = styled.h1`
    color: white;
    font-size: 3rem;
`
const Section = styled.p`
    color: white;
    font-size: 1.1rem;

`
const Desc = styled.p`
    color: white;
`
const Button = styled.button`
    border: none;
  background-color: white;
  color: black;
  width: 30%;
  height: 7vh;
  border-radius: 30px;
  font-size: 0.9rem;
  letter-spacing: 1px;
  margin: 15px;
  position: relative;
  cursor: pointer;
  &:hover{
    transform: scale(0.9);
  }
  &::after{
    content: '';
    position: absolute;
    left: -3%;
    top: -16%;
    width: 100%;
    height: 100%;
    border: 2px solid white;
    border-radius: 30px;
    transform:  scale(0);
    transition: 0.3s;
  }
  &:hover::after{ 
    transform: scale(1);
    padding: 0.3rem;
  }
`

const Slider = styled.div`
    height: 90%;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;    
`
const SliderImage = styled.img`
    width: 80%;
    object-fit: cover;
`

export default function About() {
    const [index, setIndex] = useState(0)
    setTimeout(() => {
        index === 8 ? setIndex(0) : setIndex(index + 1)
    }, 1500)
    return (
        <Container>
            <Left>
                <Slider>
                    <SliderImage src={Data[index].image} alt='' >
                        
                    </SliderImage>
                </Slider>
            </Left>
            <Right>
                <Wrapper>
                    <Heading>
                        Welcome To The <br />Classics Club.
                    </Heading>

                    <Section>
                        The CLASSICS
                         CLUB is a private collection of <br />NFTs—unique digital collectibles. The <br />Weirdos are stored as ERC-721 tokens on the <br />Ethereum blockchain and hosted on IPFS.
                    </Section>

                    <Desc>
                        With more than 200+ hand drawn traits, each NFT is <br />unique and comes with a membership to an exclusive  <br />group of successful investors. Join an ambitious ever- <br />growing community with multiple benefits and utilities.
                    </Desc>
                    <Button>JOIN OUR DISCORD</Button>
                </Wrapper>
            </Right>
        </Container>
    )
}
