import React from 'react'
import styled from 'styled-components'
import { Data } from '../Data'
import SingleNFT from './SingleNFT'

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: rgb(32,32,32);
    padding: 20px;
    position: relative;
    overflow: hidden;
`

const RowOne = styled.div`
  display: block;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  animation: slide 20s infinite;
  animation-timing-function: linear;
  @keyframes slide {
    0%{
      transform: translateX(100%);
    }
    100%{
      transform: translateX(-100%);
    }
  }
  &:hover{
    animation-play-state: paused;
  }
`

const RowTwo = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  animation: slidee 20s infinite;
  animation-timing-function:linear ;
  @keyframes slidee {
    0%{
      transform: translateX(-100%);
    }
    100%{
      transform: translateX(100%);
    }
  }
  &:hover{
    animation-play-state: paused;
  }
`

function Showcase() {
  return (
    <Container>
        <RowOne>
          {
            Data.slice(0,5).map((item)=>{
              
              return(
                <SingleNFT image={item.image} price = {item.price} number = {item.number} key={item.id} />
              )
            })
          }
        </RowOne>

        <RowTwo>
          {
            Data.slice(4,9).map((item)=>{
              return(
                <SingleNFT image={item.image} price = {item.price} number = {item.number} key={item.id} />
              )
            })
          }
        </RowTwo>
    </Container>
  )
}

export default Showcase