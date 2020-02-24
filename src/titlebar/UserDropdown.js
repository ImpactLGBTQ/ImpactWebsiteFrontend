import * as React from "react";
import Button from "./TitleButton";
import User from "../User";
import LoginPage from "../page/LoginPage";
import {to_page} from "./TitleBar";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from "react-bootstrap/DropdownButton";
import ThemeProvider from "react-bootstrap/ThemeProvider";

class UserDropdown extends React.Component {

    constructor(props) {
        super(props);


        // Setup username
        const user = new User(() => {
            this.setState(
                {
                    user_username: user.getUsername()
                });
            this.setState({
                logged_in: !!user.getToken()
            });
        });

        this.state = {
            logged_in: !!user.getToken(),
            user_username: "Loading...",
            user: user,
        };

    }


    render() {
        if (this.state.logged_in) {
            return (
                <DropdownButton className="header_btn" title={this.state.user_username} id="dropdown-user-info-btn">

                    <Dropdown.Item bsPrefix="header_btn" onClick="profile_page()" >
                        Profile
                    </Dropdown.Item>

                    <Dropdown.Item bsPrefix="header_btn" onClick="make_post()">
                        Make a post
                    </Dropdown.Item>

                    <Dropdown.Divider />
                    <Dropdown.Item bsPrefix="header_btn" onClick={() => this.state.user.logout()} >
                        Logout
                    </Dropdown.Item>

                </DropdownButton>
            );
        }
        else return (<Button onClick={() => to_page(<LoginPage user={this.state.user} />)} text="Login" />);

    }

}

export default UserDropdown;