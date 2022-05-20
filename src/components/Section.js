import React from 'react'
import styled,{ keyframes } from "styled-components"
import "./../index.css"


function Section(props) {
  return (
    
    <Wrap bgImage={props.backgroundImg}>
    
        <ItemText>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </ItemText>
      
        <Buttons>
        <ButtonGroup>
          <LeftButton>
            {props.leftBtnText}
          </LeftButton>
          {props.rightBtnText &&
          <RightButton>
          {props.rightBtnText}
        </RightButton>
          
          }
          
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg"/>
        </Buttons>
    </Wrap>
    
  )
}

export default Section;

//balckground-size:cover;--->Resize the background image to cover the entire container, even if it has to stretch the image or cut a little bit off one of the edges
const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-image:${props=>`url("/images/${props.bgImage}")`};
    display:flex;
    flex-direction:column;
    justify-content:space-between; //when we switch flex dierection this will be for vertical
    align-items:center;
    
`

const ItemText = styled.div`
  padding-top:15vh;
  text-align:center;

`

const ButtonGroup=styled.div`
  display:flex;
  margin-bottom:30px;
  @media(max-width:768px){
    flex-direction:column;
  }
`
const LeftButton=styled.div`
  background-color:rgba(23,26,32,0.8);
  height:40px;
  width:256px;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:100px;
  opacity:0.85;
  text-transform:uppercase;
  font-size:12px;
  cursor:pointer;
  margin:8px;

`
const RightButton=styled(LeftButton)`
  background:white;
  opacity:0.65;
  color:black;
`
const animateDown=keyframes`
0%,20%,50%,80%,100%{
  transform: translateY(0);
}
40%{
  transform: translateY(15px);
}
60%{
  transform: translateY(3px);
}
`
const DownArrow=styled.img`
  
  height:40px;
  overflow-x:hidden;
  animation-name:${animateDown};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;

`
const Buttons=styled.div`
`