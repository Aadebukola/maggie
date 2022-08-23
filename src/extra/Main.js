import React,{useState} from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import img from '../image/img1.JPG'
import img2 from '../image/img2.JPG'
import img3 from '../image/img3.JPG'
import img4 from '../image/img4.JPG'
const Main = () => {
    const[post1,setpost1] = useState([
        {
        id:1,
        Image:img,
        Name:"Eba",
        Food:"rice, stew & salad",
        Price:'#00.00',
        botton:"add"
        },
        {
            id:2,
            Image:img2,
            Name:"Semo",
            Food:"rice, stew & salad",
            Price:'#00.00',
            botton:"add"
            },
            {
                id:3,
                Image:img3,
                Name:"Fufu",
                Food:"rice, stew & salad",
                Price:'#00.00',
                botton:"add"
                },
                {
                    id:4,
                    Image:img4,
                    Name:" Black Amala",
                    Food:"rice, stew & salad",
                    Price:'#00.00',
                    botton:"add"
                    },
    ])
    const[post2,setpost2] = useState([
        {
        id:1,
        Image:img,
        Name:"Pounded Yam",
        Price:'#00.00',
        botton:"add"
        },
        {
            id:2,
            Image:img2,
            Name:"Wheat",
            Food:"rice, stew & salad",
            Price:'#00.00',
            botton:"add"
            },
            {
                id:3,
                Image:img3,
                Name:"potatoe Flour",
                Price:'#00.00',
                botton:"add"
                },
                {
                    id:4,
                    Image:img4,
                    Name:"White Amala",
                    Food:"rice, stew & salad",
                    Price:'#00.00',
                    botton:"add"
                    },
    ])
  return (
    <>
            <Container>
            <Wrapper>
            <Cards>
            <Head>
            <Left>
            <Swallow to ='/main'>swallow</Swallow>
                <Starter to ='/menuPage'>starter</Starter>
                <Soup to = '/soup'>soup</Soup>
                </Left>
            </Head>
            <Row>
            {
                post1.map((el)=>(
                    <Hold>
                        
                    <Image src={el.Image}/>
                    <Card>
                        <Name>{el.Name}</Name>
                        <Food>{el.Food}</Food>
                        <Price>{el.Price}</Price>
                        <Botton>{el.botton}</Botton>
                    </Card>
                    </Hold>
                ))
            }
            </Row>
            <Row>
            {
                post2.map((el)=>(
                    <Hold>
                    <Image src={el.Image}/>
                    <Card>
                        <Name>{el.Name}</Name>
                        <Food>{el.Food}</Food>
                        <Price>{el.Price}</Price>
                        <Botton>{el.botton}</Botton>
                    </Card>
                    </Hold>
                ))
            }
            </Row>
            </Cards>
            </Wrapper>
      </Container>
    </>
  )
}

export default Main

const Container = styled.div`
    width:100%;
    height:100%;
    
`
const Wrapper = styled.div`
width:100%;
height:100%;
cursor:pointer;
`
const Cards = styled.div`
    justify-items: space-between;

`
const Head = styled.div`
width: 100%;
`
const Left = styled.div`
width:400px;
height:70px;
color:white;
gap:30px;
font-size: 30px;
justify-content: center;
align-items: center;
display: flex;
background-color:brown;
margin-top:20px;
margin-left:120px;`

const Swallow = styled(NavLink)`
  background-color: white;
  color:brown;
  border:2px solid;
 border-radius:5px;
 padding:3px;
 text-decoration:none;
`
const Starter = styled(NavLink)`
text-decoration: none;
color: white;
:hover{
    border:2px solid;
    border-radius:5px;
    color:brown;
    background-color: white;
    padding:3px;
    transition: 0.2s;
}

`
const Soup = styled(NavLink)`
text-decoration: none;
color:white;
padding:3px;
:hover{
    border:2px solid;
    border-radius:5px;
    color:brown;
    background-color: white;
    padding:3px;
    transition: 0.2s;
}

`


const Image = styled.img`
width: 300px;
height: 300px;
border-radius: 20px;
`
const Card = styled.div`
width:150px;
height:40%;

`
const Name = styled.div`
font-size:25px;
font-weight: 600;
text-transform: capitalize;
`
const Food = styled.div`
color:rgba(165, 42, 42, 0.582);
font-size:17px;
font-weight: 700;
text-transform: capitalize;
padding-top: 10px;
`
const Price = styled.div`
font-size:20px;
font-weight: 800;
text-transform: capitalize;
padding-top: 13px; 
`
const Row = styled.div`
width:84%;
display: flex;
justify-content: center;
align-items: center;
height:65vh;
margin-left:120px;
box-shadow:0px 0px 8px rgba(0,0,0,0.142);
margin-right:0px;
`
const Hold = styled.div`
width:100%;
height:100%;
padding-left:30px;
padding-top:40px;
cursor:pointer;
`
const Botton = styled.div`
  width: 80px;
  /* border-radius:0px 8px 0px 8px; */
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border:2px solid brown;
  background-color:brown;
  color: white;
  margin-right:80px;
  font-size:20px;
  cursor: pointer;
  :hover{
    background-color:wheat;
    color:black;
  }
`;