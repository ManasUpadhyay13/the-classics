import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';

const Home = styled.div`
   height: calc(100vh - 12vh);
   width: 100%;
   display: flex; 
`

const HomeLeft = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    flex-direction: column;
`

const Wrapper = styled.div`
    width: 60%;
    height: 50%;
`
const HomeRight = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 50px;
    padding-right: 50px;
`

const Heading = styled.h1`
    font-size: 3.2rem;
`

const Writer = styled.h1`
  font-family: 'Akaya Telivigala', cursive;
  font-size: 2.5rem;
  .text-1{
    color: blue;
  }
  .text-2{
    color: green;
  }
  .text-3{
    color: red;
  }
`
const Desc = styled.p`
  font-weight: bold;
  color: rgb(152,152,152);
`

const Button = styled.button`
border: none;
  background-color: black;
  color: white;
  width: 25%;
  height: 6vh;
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
    left: -6%;
    top: -16%;
    width: 100%;
    height: 100%;
    border: 2px solid black;
    border-radius: 30px;
    transform:  scale(0);
    transition: 0.3s;
  }
  &:hover::after{
    transform: scale(1);
    padding: 0.3rem;
  }
`

const Video = styled.video`
    height: 90%;
`
function HomeContent() {
  return (
    <Home>
      <HomeLeft>
        <Wrapper>
          <Heading>Discover A New</Heading>
          <Heading>Era Of Cool</Heading>
          <Writer>
            <Typewriter
              options={{
                autoStart: true,
                loop: true
              }}
              onInit={(typewriter) => {
                typewriter.typeString(`<span class = 'text-1'>NFTS.</span>`)
                  .pauseFor(2000)
                  .deleteAll()
                typewriter.typeString(`<span class = 'text-2'>APE KILLERS !</span>`)
                  .pauseFor(2000)
                  .deleteAll()
                typewriter.typeString(`<span class = 'text-3'>COLLECTIBLE ITEMS.</span>`)
                  .pauseFor(2000)
                  .deleteAll()
                  .start()
              }}
            />
          </Writer>
          <Desc>Bored OF Apes ? TRY SOMETHING NEW</Desc>
          <Button>Explore</Button>
        </Wrapper>
      </HomeLeft>
      <HomeRight>
              <Video src='https://firebasestorage.googleapis.com/v0/b/nft-collection-2k22.appspot.com/o/Home%20Video.d4bf2265b2f4a01a1582.mp4?alt=media&token=64cd346a-b310-4e6c-bac4-d1d32ce540ee' type="video/mp4" muted autoPlay loop />
      </HomeRight>
    </Home>
  )
}

export default HomeContent