import React, { Component } from 'react';
import {
    Grid, Row, Col,
    FormGroup, ControlLabel, FormControl
} from 'react-bootstrap';

import {Card} from 'components/Card/Card.jsx';
import {FormInputs} from 'components/FormInputs/FormInputs.jsx';
import {UserCard} from 'components/UserCard/UserCard.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';

import avatar from "assets/img/faces/user.png";
class UserProfile extends Component {
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                content={
                                 <div className="name">
                                   <b><h1 style={{textAlign: "center", fontFamily: "Impact"}}>
                                   Welcome Sarah!</h1></b>
                                </div>
                                }
                            />
                        </Col>
                        <Col md={12}>
                            <UserCard
                                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                                avatar={avatar}
                                name="Sarah Doe"
                                userName="wildcat18"
                                description={
                                    <span>
                                        "Everyday
                                        <br />
                                        is a great day
                                        <br />
                                        to be a Wildcat!"
                                    </span>
                                }
                                socials={
                                    <div>
                                        <Button simple><i className="fa fa-facebook-square"></i></Button>
                                        <Button simple><i className="fa fa-twitter"></i></Button>
                                        <Button simple><i className="fa fa-google-plus-square"></i></Button>
                                    </div>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default UserProfile;
