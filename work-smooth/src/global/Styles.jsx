import styled from "styled-components";

const switchSizeFunc = (size, big, normal, small) => {
  if(!size){
    return normal;
  }

  switch(size){
    case "big":
      return big;
    case "small":
      return small;
    default:
      return normal;
  }
}

export const DecoText = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  text-align: center;
  user-select: none;
  color: #DAABF7;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`

export const Panel = styled.div`
 padding: 8px;
 background: white;
 display: inline-block;
 border-radius: 4px;
 box-shadow: 0 1px 3px 0 #888888;
`


//Test Sets

export const Text = styled.span`
  font-size: ${props => switchSizeFunc(props.size, "1.8", "1", "0.8")}rem;
`

export const TitleText = styled.span`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 16px;
  display: block;
`

export const Input = styled.input`
  height: 32px;
  font-size: 1.2rem;
  padding-left: 4px;
`