import * as React from "react";
import MainPage from "./MainPage";
import $ from 'jquery';
import Cookies from 'js-cookie'

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = $.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});


export class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.inputChange = this.inputChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);

        this.state = {
            invalidCredentials: false
        }
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
                url: "http://localhost:8000/api/auth/logmein/",
                dataType: 'json',
                async: true,
                crossdomain: true,
                data: data,
                success: function(data) {
                    // Set the token cookie
                    Cookies.set('dsf_token', data.token);
                },
                statusCode: {
                    401: () =>
                        // Invalid credentials
                        this.setState(
                            {
                                invalidCredentials: true
                            }
                        )
                }
            }
        );

    }

    render() {
        return (
        <form className="standard_form" onSubmit={this.submitHandler}>
            <div className="form-group">
                {
                    this.state.invalidCredentials ?
                        <div className="alert alert-danger">Invalid username or password</div>
                        :
                        <div/>
                }
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

