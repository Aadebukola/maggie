import React,{useState} from 'react'
import styled from 'styled-components'
import img from '../image/img1.JPG'
import img2 from '../image/img2.JPG'
import img3 from '../image/img3.JPG'
import img4 from '../image/img4.JPG'
import {NavLink} from 'react-router-dom'
const Menu = () => {
    const[post,setpost] = useState([
        {
        id:1,
        Image:img,
        Name:"french rice",
        Food:"rice, stew & salad",
        Price:'#00.00',
        },
        {
            id:2,
            Image:img2,
            Name:"french rice",
            Food:"rice, stew & salad",
            Price:'#00.00',
            },
            {
                id:3,
                Image:img3,
                Name:"french rice",
                Food:"rice, stew & salad",
                Price:'#00.00',
                },
                {
                    id:4,
                    Image:img4,
                    Name:"french rice",
                    Food:"rice, stew & salad",
                    Price:'#00.00',
                    },
    ])
  return (
    <>
            <Container>
            <Head>
                <Left>Checkout our menu</Left>
                <Right to ='/menuPage'>View more</Right>
            </Head>
            <Row>
            {
                post.map((el)=>(
                    <Wrapper>
                    <Image src={el.Image}/>
                    <Card>
                        <Name>{el.Name}</Name>
                        <Food>{el.Food}</Food>
                        <Price>{el.Price}</Price>
                    </Card>
                    </Wrapper>
                ))
            }
            </Row>
      </Container>
    </>
  )
}

export default Menu

const Container = styled.div`
    width:100%;
    height:100%;
    
`
const Wrapper = styled.div`
width:100%;
height:100%;
padding-left:30px;
padding-top:120px;
cursor:pointer;
`
const Head = styled.div`
justify-content: space-between;
display:flex;
align-items: center;
`
const Left = styled.div`
display: flex;
justify-content: space-between;
width: 70%;
font-size: 55px;
font-weight: 500;
color:brown;
margin-left:90px;
letter-spacing: 3px;
margin-left:100px;
div{
    font-size: 50px;
    font-weight: 500;
    border-radius: 8px;
    color:white;
    background-color: brown;
    width: 30%;
    display: flex;
    text-align: center;
    margin-left:120px;
    
}
`
const Right = styled(NavLink)`
width:190px;
height:60px;
display: flex;
justify-content: center;
font-size: 30px;
font-weight:800;
margin-right:160px;
background-color: brown;
align-items: center;
text-transform: capitalize;
border-radius: 12px;
color:white;
cursor: pointer;
text-decoration:none;

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
display: flex;
justify-content: center;
align-items: center;
height:70vh;
padding-right:80px;
margin-left:60px;
`
