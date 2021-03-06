import React, { Component } from 'react';
import {Card} from 'components/Card/Card.jsx';
import {Grid, Row, Col, ButtonToolbar, Button, Form} from 'react-bootstrap';
//import {FormInputs} from 'components/FormInputs/FormInputs.jsx';
//import {UserCard} from 'components/UserCard/UserCard.jsx';
//import Button from 'elements/CustomButton/CustomButton.jsx';
class Header extends Component {
    constructor(props) {
        super(props)
}
render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
      </div>
    )
  }
}

class Footer extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return <div><h3>{this.props.text}</h3></div>
  }
}

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVal: ""
    }
    this.changeHandler = this.changeHandler.bind(this)
  }
    
  changeHandler(e) {
    this.props.parentFunction(e.target.value)
  }
  
  render() {
    return (
      <div>
        <label>{this.props.labelName}</label>
        <input type={this.props.inputType} id={this.props.id} onChange={this.changeHandler} />
      </div>
    )
  }
}

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
    this.clickHandler = this.clickHandler.bind(this)
    this.setUsername = this.setUsername.bind(this)
    this.setPassword = this.setPassword.bind(this)
  }
  
  setUsername(username) {
    this.setState({username: username})
  }
  
  setPassword(password) {
    this.setState({password: password})
  }
  
  clickHandler() {
    // put your own code here
    window.location.href = "http://localhost:3000/?#/user"
  }

  render() {
    return (
      <div>
        <Form>
          <Input id ="username" labelName="Username: " inputType="text" parentFunction={this.setUsername}  />
          <Input margin="auto" id ="password" labelName="Password: " inputType="password" parentFunction={this.setPassword} />
        </Form>
        <Button bsStyle="primary" bsSize="medium" onClick={this.clickHandler} active> {this.props.buttonName} </Button>
      </div>
    )
  }
}
class Content extends Component {
  constructor(props) {
    super(props)
  } 
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <LoginForm buttonName="Submit"/>
      </div>
    )
  }
}
class Login extends Component {
  render() {
    return (


      <div className="content">
        <Grid fluid>
          <Row className="text-center">
            <Col md={4}></Col>
            <Col md={4}>
              <Card
                  content={
                    <div className="login">
                    <Header text="Welcome to Attorney Insider!"/>
                    <Content title=""/>
                    <Footer text=""/>
                  </div>
                  }
              />
            </Col>
            <Col md={4}></Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
export default Login;
