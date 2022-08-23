import React,{useEffect} from 'react'
import styled from 'styled-components'
import bcg from '../image/bcg.JPG'
import WOW from 'wowjs';
import About from './About'
import Menu from './Menu'
import Contact from './Contact'
const Home = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
  return (
    <>
      <Container>
        <Wrapper>
                <Background>
                    <div className='wow slideIn'>delicious foods</div>
                    <div className='text'>Enjoy the very  best of dining experience with mouth watering yet affordable meal.</div>
                    <div className='reserve'>Order Now</div>
                </Background>
        </Wrapper>
      </Container>
      <About/>
      <Menu/>
      <Contact/>
    </>
  )
}

export default Home

const Container = styled.div`
width:100%;
height:100vh ;
`
const Wrapper = styled.div`
    width: 100%;
    height:100vh ;
    background-color: rgba(0,0,0,0.450);
    background-blend-mode:darken;
    background-image: ${`url(${bcg})`};
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

`
const Background = styled.div`
width:70%;
height:30%;
justify-content: center;
text-align: center;
font-size: 20px;
.slideIn{
  text-transform:uppercase;
}

div{
    width:100%;
    font-size:80px;
    font-weight:750;
    color:white;
    font-family: 'Kdam Thmor Pro', sans-serif;
}
.spec{
    width:100%;
    color:white;
    font-size:60px;
    font-weight:600;
}
.text{
    width:50%;
    color:white;
    font-size:25px;
    font-weight:400;
    margin-left:300px;
}
.reserve{
  width: 15%;
  /* border-radius:0px 8px 0px 8px; */
  height: 50px;
  background-color:brown;
  color: white;
  margin-top:50px;
  cursor: pointer;
  font-size:25px;
  margin-left:500px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  display: flex;
  :hover{
    background-color: #975d42;
  }}`
