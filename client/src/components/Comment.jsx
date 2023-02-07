import React from 'react'
import styled from 'styled-components'
import pics from '../img/bird.png';

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
`;

const Avatar = styled.img`
    width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
display: flex;
flex-direction:  column;
gap: 10px;
color: ${({theme}) => theme.text};
`;

const Name = styled.span`
font-size: 13px;
font-weight: 500;
`;
const Date = styled.span`
font-size: 12px;
font-weight: 400;
color: ${({theme}) => theme.soft};
margin-left: 5px ;
`;
const Text = styled.span`
font-size: 12px
`;

function Comment() {
  return (
    <Container>
        <Avatar src={pics}/>
        <Details>
            <Name>
                John Doe <Date>1 day ago</Date>
            </Name>
            <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique ea beatae, nesciunt, vero earum quaerat saepe quisquam magnam pariatur voluptate quis dolores inventore reiciendis temporibus voluptates optio! Reiciendis, reprehenderit expedita!
            </Text>
        </Details>
    </Container>
  )
}

export default Comment