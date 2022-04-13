import {  Facebook, Instagram, LinkedIn, YouTube } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { Data } from '../Data'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
`

const Upper = styled.div`
    flex : 1;
    background-color: rgb(54,54,54);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`

const UpperItem = styled.div`
    padding: 100px;
    width: 100%;
    height: 50vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Heading = styled.h1`
    font-size: 4rem;
    color: white;
`
const Button = styled.button`
  border: none;
  background-color: white;
  color: black;
  width: 15%;
  height: 10vh;
  border-radius: 100px;
  font-size: 1.3rem;
  font-weight: bold;
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
    top: -11%;
    width: 100%;
    height: 100%;
    border: 2px solid white;
    border-radius: 100px;
    transform:  scale(0);
    transition: 0.3s;
  }
  &:hover::after{
    transform: scale(1);
    padding: 0.3rem;
  }
`

const Image = styled.img`
    width: 200px;
    margin: 10px;
    opacity: 0.2;
`


const Lower = styled.div`
    flex : 1;
    padding: 30px 100px;
    display: flex;
    flex-direction: column;
`

const LowerUpper = styled.div`
    flex:1;
    border-bottom : 1px solid black;
    display: flex;
`

const Left = styled.div`
    flex : 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Logo = styled.h1`
  font-family: 'Akaya Telivigala', cursive;
  font-size: 5rem;
  display: inline-block;
  flex: 1;
`
const Social = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex: 1;
`

const Right = styled.div`
    flex : 2;
`

const Navigation = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const Items = styled.li`
  list-style: none;
  cursor: pointer;
  position: relative;
  &::after{
    content: '';
    display: block;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: black;
    transition: width 0.3s ease;
  }
  &:hover::after{
    width: 100%;
  }
`
const LowerLower = styled.div`
    flex:1;
    padding: 20px;
    display: flex;
    justify-content: space-between;
`

const LeftMessage = styled.p``
const RightMessage = styled.p``

export default function Footer() {

    const hanldeFacebook = () =>{
        window.open('https://www.instagram.com/its_me__manas/')
    }
    const hanldeYoutube = () =>{
        window.open('')
    }
    const hanldeLinkedIn = () =>{
        window.open('https://www.linkedin.com/in/manas-upadhyay-726b2a225/')
    }
    const hanldeInstagram = () =>{
        window.open('')
    }

    return (
        <Container>
            <Upper>
                {
                    Data.slice(0, 6).map((item) => {
                        return (
                            <Image src={item.image} alt="" key={item.id} />
                        )
                    })
                }
            </Upper>
            <UpperItem>
                <Heading>Join The <br />CLASSICS Club</Heading>
                <Button>Join Now</Button>
            </UpperItem>
            <Lower>

                <LowerUpper>

                    <Left>

                        <Logo>C.</Logo>

                        <Social>
                            <Facebook style={{ margin: '10px', cursor: 'pointer', fontSize: '1.8rem' }} onClick={hanldeFacebook} />
                            <Instagram style={{ margin: '10px', cursor: 'pointer', fontSize: '1.8rem' }} onClick={hanldeInstagram} />
                            <YouTube style={{ margin: '10px', cursor: 'pointer', fontSize: '1.8rem' }} onClick={hanldeYoutube} />
                            <LinkedIn style={{ margin: '10px', cursor: 'pointer', fontSize: '1.8rem' }} onClick={hanldeLinkedIn} />
                        </Social>

                    </Left>
                    <Right>

                        <Navigation>

                            <Items>Home</Items>

                            <Items>About</Items>
                            <Items>Roadmap</Items>
                            <Items>Showcase</Items>
                            <Items>Team</Items>
                            <Items>FAQ</Items>

                        </Navigation>

                    </Right>

                </LowerUpper>
                <LowerLower>

                    <LeftMessage>
                        © 2022 Classics Club. All rights reserved.
                    </LeftMessage>

                    <RightMessage>
                    Made with ❤ by <span style={{borderBottom : '1px solid black'}}>Manas</span>
                    </RightMessage>
                </LowerLower>

            </Lower>
        </Container>
    )
}
