import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 240px;
    height: 300px;
    border: 2px solid white;
    border-radius: 20px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 2px solid rgb(122,122,122);
`
const ImageContainer = styled.div`
    flex: 3;
    background-color: white; 
`  
const InfoContainer = styled.div`
    flex: 1;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const CodeContainer = styled.div``
const PriceContainer = styled.div``
const Heding = styled.p`
    color: rgb(122,122,122);
`
const Image = styled.img``
const Price = styled.p`
    color: white;
    text-align: right;
`
const Number = styled.p`
    color: white;
`


export default function SingleNFT({ image, price, number }) {
  console.log(image, price, number);
  return (
    <Container>
      <ImageContainer>

        <Image src={image} alt='' />

      </ImageContainer>

      <InfoContainer>

        <CodeContainer>
          <Heding>Classics</Heding>
          <Number>{number}</Number>
        </CodeContainer>

        <PriceContainer>
          <Heding>Price</Heding>
          <Price>{price}</Price>
        </PriceContainer>

      </InfoContainer>
    </Container>
  )
}
