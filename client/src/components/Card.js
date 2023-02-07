import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import pics from '../img/bird.png'



const Container = styled.div`
width: ${(props) => props.type !== "small" && "360px"};
margin-bottom: ${(props) => props.type === "small" ? "10px" : "45px"};
cursor: pointer;
display: ${(props) => props.type === "small" && "flex"};
gap: 10px;
`;
const Image = styled.img`
width:95%;
height: ${(props) => props.type === "small" ? "120px" : "202px"};
background-color: #999;
flex: 1;
`;
const Details = styled.div`
display: flex;
margin-top: ${(props) => props.type === "small" && "0px"};
gap: 12px;
flex: 1;
`;
const ChannelImage = styled.img`
width: 36x;
height: 36px;
border-radius: 50%;
background-color: #999;
display: ${(props) => props.type === "small" && "none"};
`;
const Texts = styled.div`

`;
const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({theme}) => theme.text};
    margin-top: 0px;
`;
const ChanneName = styled.h2`
    font-size: 14px;
    color: ${({theme}) => theme.textSoft};
    margin: 4px 0px;
`;
const Info = styled.div`
    font-size: 14px;
    color: ${({theme}) => theme.textSoft};
`;


function Card({type}) {
  return (
      
    <Link to="/video/test" style={{textDecoration:"none"}}>
    <Container type={type}>
        <Image src={pics} type={type}/>
        <Details type={type}>
            <ChannelImage type={type} src={pics}/>
            <Texts>
                <Title>Test Video</Title>
                <ChanneName>Lama Dev</ChanneName>
                <Info>660,908 views . 1 day ago</Info>
            </Texts>
        </Details>
    </Container>
    </Link>
  )
}

export default Card