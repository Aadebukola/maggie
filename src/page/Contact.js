import React from 'react'
import styled from 'styled-components'
import bcg from '../image/logo.JPG'
const Contact = () => {
  return (
    <>
     <Container>
        <Wrapper>
        <Second>
        <Head>
                Contact us
              </Head>
        <Card>
                <Email type='text' placeholder='Your Name'/>
                <Password type='email' placeholder='Your Email'/>
                <Message  placeholder='Your Message'/>
                <Button type='submit'>SUBMIT</Button>
            </Card>
          </Second>

        </Wrapper>
      </Container>
    </>
  )
}

export default Contact


const Container = styled.div`
  width: 100%;
  height: calc(100vh - 30px);
`;

const Wrapper = styled.div`
    width: 100%;
    height:100vh;
    background-color: rgba(0,0,0,0.450);
    background-blend-mode:darken;
    background-image: ${`url(${bcg})`};
    background-attachment: fixed;
    background-position: top;
    background-size: cover;
    justify-content: center !important;
    align-items: center;
    /* margin-top: 50px; */

`;

const Head = styled.div`
  font-weight: bold;
  font-size: 48px;
  text-align:center;
  width: 540px;
  height: 80px;
  color:brown;
  margin-top:170px;
 
`;


const Second = styled.div`
padding-top:95px;
margin-top:100px;
margin:auto;
width:fit-content;

`
//   flex: 1;
  /* width: 50%; */

  const Card = styled.div`
    width:500px;
    height:350px;
    border-radius:7px;
    background-color:white;
    text-align: center;
    padding-top:20px;
    box-shadow:0px 0px 8px rgba(0,0,0,0.142);
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-bottom:25px;

`

const Email = styled.input`
    width:350px;
    height: 100px;
    /* border-radius: 100px; */
    background-color: transparent;
    color: brown !important;
    border:2px solid brown;
    outline:none;
    padding: 0px 18px;
    font-size: 16px;
    font-weight: 500;
    margin-top:20px;
    /* margin:10px 0px; */
    transition: all 0.3s;
    ::placeholder{
        color: brown !important;
    }
`
const Password = styled(Email)``
const Message = styled.textarea`
margin-bottom:30px;
width:380px;
resize:none;

    height: 250px;
    background-color: transparent;
    color: brown !important;
    border:2px solid brown;
    outline:none;
    font-size: 16px;
    font-weight: 500;
    margin-top:25px;
    transition: all 0.3s;
    ::placeholder{
        color: brown !important;
    }
`
const Button = styled.div`
    width:80px;
    height:15px;
    border: 2px solid brown;
    background-color: brown;
    color:white;
    padding:18px;
    font-weight:600;
    font-size:16px;
    margin-right:250px;
    cursor:pointer;
`


