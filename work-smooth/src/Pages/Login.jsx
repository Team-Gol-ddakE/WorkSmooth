import React from "react";
import * as Styles from "../global/Styles";
import { InputBox } from "../Components";

const pannelStyle = {
  marginTop: "80px",
  padding: "0 32px 16px"
}

const InputStyle = {
  width: "400px",
  marginLeft: "16px",
  marginBottom: "24px",
}

class Login extends React.Component {
  render(){
    return(
      <Styles.Wrapper>
        <Styles.Panel style={pannelStyle}>
        <Styles.DecoText>WorkSmooth</Styles.DecoText>
          <InputBox placeholder="아이디" style={InputStyle}></InputBox><br/>
          <InputBox placeholder="비밀번호" style={InputStyle}></InputBox>
        </Styles.Panel>
      </Styles.Wrapper>
    )
  }
}

export default Login;