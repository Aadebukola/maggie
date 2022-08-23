import React from 'react'
import styled from 'styled-components'
import img from '../image/img3.JPG'
const About = () => {
  return (
    <>
     <Container >
        <Wrapper>
          <First>
              <Head>
                About us
              </Head>
              <Text> Maggie Catering is a proudly Nigerian company, operating in the hospitality sectors of the Nigerian economy. <p/>
Our goal is to be the most sought after experience within our sectors of play and we are guided by our core values of INNOVATION, QUALITY, UNPARALLELED AMBIENCE & CONSISTENCY
              </Text>
          </First>
          <Second>
            <ImageWrap>
              <Img3 src={img} />
            </ImageWrap>
          </Second>
        </Wrapper>
      </Container>
    </>
  )
}

export default About


const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);

`;

const Wrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-wrap: wrap;

`;

const First = styled.div`
  flex: 1;
  /* width: 50%; */
`;

const Head = styled.div`
  font-weight: bold;
  font-size: 48px;
  text-align:center;
  width: 90%;
  height: 80px;
  margin-top:80px;
  margin-left:100px;
  color:brown;

`;
const Text = styled.div`
  margin-top: 80px;
  width: 80%;
  font-size: 20px;
  line-height: 42px;
  margin-left:120px;
  margin-bottom:20px;
  align-items:center;
  text-align: center;

`;


const Second = styled.div`
  flex: 1;

  /* width: 50%; */
`;
const ImageWrap = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;
const Img3 = styled.img`
  width: 600px;
  height: 500px;
  left:100px;
  top: 90px;
  position: absolute;
  border:2px;
  border-radius: 50px;
`;
