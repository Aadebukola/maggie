import React from 'react'
import styled from 'styled-components'
import img from '../image/logo.JPG'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
            <Container>
        <Wrapper>
            <Logo src={img}/> 
          <Navigation>
            <NavWrap>
              <Home to ='/'>Home</Home>
              <About to ='/about'>about</About>
              <Menu to = '/menuPage'>menu</Menu>
              <Contact to ='/contact'>Contact</Contact>
              <Login to = '/'></Login>
            </NavWrap>
            <Reservevation>Reservation</Reservevation>
          </Navigation>
        </Wrapper>
      </Container>
    </>
  )
}
export default Navbar
const Container = styled.div`
  width: 100%;
  height: 100px;
  /* position:fixed; */
  background-color:white;
  z-index:100;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
 
`;
const Logo = styled.img`
  display: flex;
  margin-left:80px;
  width: 150px;
  height: 100px;

`;
const Navigation = styled.div`
  width: 900px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 80px;

`;
const NavWrap = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
  text-transform: capitalize;
  color: black;
  gap:50px;
  :hover{
    color:brown;
  }
`;
const Home = styled(NavLink)`
  font-size: 25px;
  cursor: pointer;
  position: relative;
  font-family: 'Kdam Thmor Pro', sans-serif;
  color: inherit;
  text-decoration:none;
  ::before {
    content: " ";
    position: absolute;
    bottom: -1px;
    left: 0px;
    height: 2px;
    width: 100%;
    background-color: brown;
    transform: scaleX(1);
    transform-origin: left;
    transition: transform all 750ms;
    display: none;
  }
  :hover {
    ::before {
      display: block;
    }
  }
`;

const About = styled(Home)``;
const Menu = styled(Home)``;
const Contact = styled(Home)``;
const Login = styled(Home)``;

const Reservevation = styled.div`
  width: 180px;
  /* border-radius:0px 8px 0px 8px; */
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border:2px solid brown;
  color: brown;
  margin-right:80px;
  font-size:20px;
  cursor: pointer;
  :hover{
    background-color:brown;
    color:white;
  }
`;