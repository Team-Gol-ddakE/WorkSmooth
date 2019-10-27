import React, { Fragment } from "react";
import * as Styles from "../global/Styles";


const titStyle = {
  display: "block",
  marginBottom: "16px",
}

class Login extends React.Component {
  render(){
    return(
      <Styles.Wrapper>
        <Styles.DecoText>WorkSmooth</Styles.DecoText>
        <Styles.Panel>
          <Styles.TitleText style={titStyle}>Login</Styles.TitleText>
          <Styles.Text>ID</Styles.Text><Styles.Input></Styles.Input><br/>
          <Styles.Text>PW</Styles.Text><Styles.Input></Styles.Input>
        </Styles.Panel>
      </Styles.Wrapper>
    )
  }
}

export default Login;