import * as React from "react";
import Button from "./TitleButton";
import User from "../User";
import LoginPage from "../page/LoginPage";
import {to_page} from "./TitleBar";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from "react-bootstrap/DropdownButton";
import PropTypes from 'prop-types'
import MakeAPost from "../page/MakeAPost";

class UserDropdown extends React.Component {

    constructor(props) {
        super(props);


        // Setup username
        this.props.user.setStateChangeCallback(() => {
            this.setState(
                {
                    user_username: this.props.user.getUsername()
                });
            this.setState({
                logged_in: !!this.props.user.getToken()
            });
        });

        this.state = {
            logged_in: !!this.props.user.getToken(),
            user_username: "Loading...",
            user: this.props.user,
        };

    }


    render() {
        if (this.state.logged_in) {
            return (<>
                <h3>{this.state.user.getUsername()}</h3><Button text="Logout" onClick="/logout" />
                </>
            );
        }
        else return (
        <Button onClick="/login" text="Login" />);
        

    }

}

UserDropdown.propTypes = {
    user: PropTypes.objectOf(User).isRequired,
};
export default UserDropdown;