import * as React from "react";
import MainPage from "./MainPage";
import $ from 'jquery';


export class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.inputChange = this.inputChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
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

        const data = JSON.stringify({"username": this.state.username, "password": this.state.password});

        $.ajax(
            {
                type: "POST",
                url: "/backend/api/auth/logmein",
                async: true,
                data: data,
                success: () => alert("Logged in!"),
                error: function (xhr, status, error) {
                    alert(error);
                }
            }
        );

    }

    render() {
        return (
        <form className="standard_form" onSubmit={this.submitHandler}>
            <div className="form-group">
                <label>
                    Username
                    <input type="text" name="username" onChange={this.inputChange}/>
                </label>
            </div>
            <div className="form-group">
                <label>
                    Password
                    <input type="password" name="password" onChange={this.inputChange}/>
                </label>
            </div>
            <input className="form_btn btn btn-primary" type="submit" value="Login" />
            <div className="form-group">
                Dont have an account? <a className="signup_link" href="#">create
                one</a>.<br /> (You must be a member of Impact and have an authentication token)
            </div>
        </form>
        );
    }

}

class LoginPage extends MainPage {

    render() {
        return (
            <div className="form_container">
                <h2>Login to the Impact website</h2>
                <LoginForm />
            </div>
        );
    }

}
export default LoginPage;

