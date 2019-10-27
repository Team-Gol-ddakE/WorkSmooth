import React from "react";

class Main extends React.Component {
  componentWillMount(){
    this.props.history.push('/login');
  }

  render(){
    return(
      <div stlye={{border: "1px solid black"}} onClick={this.clickEvent}>
        날 눌러줘
      </div>
    )
  }
}

export default Main;