import React, { Fragment } from "react";

class Main extends React.Component {
  componentWillMount(){
    this.props.history.push('/login');
  }

  render(){
    return <Fragment />
  }
}

export default Main;