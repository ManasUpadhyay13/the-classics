import { Menu } from '@material-ui/icons'
import styled from 'styled-components'


const Nav = styled.div`
    width: 100%;
    height: 12vh;
    padding: 0px 100px;
    display: flex;
    justify-content: space-between;
`
const Logo = styled.h1`
  font-family: 'Akaya Telivigala', cursive;
  font-size: 4rem;
  display: inline-block;
`
const Navigation = styled.ul`
  position: relative;
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: center;
  @media (max-width : 1000px) {
    width: 20%;
    height: 100%;
    flex-direction: column;
  }
`

const Items = styled.li`
  list-style: none;
  margin: 5px 10px;
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
  @media (max-width : 1000px) {
    margin: 20px;
    top: -300%;
  }
`

const Button = styled.button`
  border: none;
  background-color: black;
  color: white;
  width: 15%;
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
    left: -3%;
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
  @media (max-width: 1260px) {
    &::after{
      left: -4%;
    }
    font-size: 0.7rem;
  }

  @media (max-width : 1040px) {
    &::after{
      left: -6%;
    }
  }
`

const Icon = styled.p`
    position: absolute;
    top: 35%;
    left: 50%;
    display : none;
    @media (max-width : 1000px) {
        display: block;
        cursor: pointer;
    }
`
function Navbar() {
  // const [ style , setStyle ] = useState('0%')
  // const [ up , setUP ] = useState(false)
  // const navStyle = {
  //   top : '0%'
  // }
  // const hanldeClick = () =>{
  //   if(style === '0%'){
  //     navStyle.top = '100%'
  //   }
  //   else if(style === '100%'){
  //     navStyle.top = '0%'
  //   }
  // }
  return (
    <>
      <Nav>
        <Logo>C.</Logo>

        <Navigation
            style={{}}
        >

          <Items>Home</Items>

          <Items>About</Items>
          <Items>Roadmap</Items>
          <Items>Showcase</Items>
          <Items>Team</Items>
          <Items>FAQ</Items>

          <Icon> <Menu/> </Icon>
        </Navigation>

        <Button>Connet Wallet</Button>
      </Nav>
    </>
  )
}

export default Navbar