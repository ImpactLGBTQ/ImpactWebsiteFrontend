// Copyright (C) 2020 Natasha England-Elbro
// 
// This file is part of ImpactWebsiteFrontend.
// 
// ImpactWebsiteFrontend is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// ImpactWebsiteFrontend is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with ImpactWebsiteFrontend.  If not, see <http://www.gnu.org/licenses/>.

import * as React from "react";
import MainPage from "./MainPage";
import $ from 'jquery';
import Cookies from 'js-cookie'
import User from "../User";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import HomePage from "./HomePage";
import {to_page} from "../titlebar/TitleBar";
import CONFIG from '../config.js';



export class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.inputChange = this.inputChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);

        this.state = {
            invalidCredentials: false,
            invalidEntry: false,
        };
    }

    inputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
                [name]: value
        }
        );
    }

    submitHandler(event) {
        event.preventDefault();

        const successCallback = (data) => {
            // Tell the user to login
            this.props.user.login(data);
            to_page(<HomePage />);
        };

        const data = JSON.stringify({"username": this.state.username, "password": this.state.password});
        $.ajax(
            {
                type: "POST",
                url: CONFIG['backend_url']+"/api/auth/logmein/",
                dataType: 'json',
                async: true,
                crossdomain: true,
                data: data,
                success: successCallback,
                statusCode: {
                    401: () =>
                        // Invalid credentials
                    {
                        this.setState(
                            {
                                invalidCredentials: true
                            }
                        )
                    }
                }
            }
        );

    }

    render() {
        return (
        <Form onSubmit={this.submitHandler}>
            <Form.Group>
                {this.state.invalidCredentials && <Alert variant="danger">Invalid username or password</Alert>}
                {
                    this.state.invalidEntry && <Alert variant="danger">{this.state.invalidEntry}</Alert>
                }
                <Form.Label>Username</Form.Label>
                <Form.Control placeholder="Enter username" type="text" name="username" onChange={this.inputChange} required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" name="password" onChange={this.inputChange} required/>
            </Form.Group>
            <Form.Group>
            <Button className="form_btn" type="submit" >Login</Button>
            </Form.Group>
        </Form>
        );
    }

}
        /*
        <div className="form-group">
            Dont have an account? <a className="signup_link" href="#">create
            one</a>.<br /> (You must be a member of Impact and have an authentication token) */

class LoginPage extends MainPage {

    render() {
        return (
            <div className="form_container">
                <h2>Login to the Impact website</h2>
                <LoginForm user={this.props.user} />
            </div>
        );
    }

}
export default LoginPage;

