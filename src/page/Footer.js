import React from 'react'
import {FaWhatsappSquare} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'
import {SiInstagram} from 'react-icons/si'
import {BsPhone} from 'react-icons/bs'
import styled from 'styled-components'
const Footer = () => {
  return (
    <>
      <Container>
        <Wrapper>
          {/* <h1>we are open mon - sat <br/> 9am - 10pm</h1> */}
          <p>hungry? call us here</p>
          <h3>+234 090 00000</h3>
          <div>
                <a href='https://wa.me/+2348180980419/' className='whatsapp'><FaWhatsappSquare/></a>
                <a href='' className='facebook'><FaFacebookSquare/></a>
                <a href='' className='gram'><SiInstagram/></a>
              </div>
        </Wrapper>
      </Container>
    </>
  )
}

export default Footer

const Container = styled.div`
    width: 100%;
    /* height:40vh; */

    
`
const Wrapper = styled.div`
    width: 100%;
    height:80%;
    text-align: center;
    background-color:white; 
    div{
      font-size:40px;
    }
    .whatsapp{
      color:green;
      font-size: 40px;
      cursor: pointer;
   }
   .facebook{
  color:blue;
 font-size:40px;
 padding-left: 30px;
 padding-right: 30px;
 cursor: pointer;
   }
   .gram{
 color:red;
 font-size: 40px;
 cursor: pointer;
   }
`
