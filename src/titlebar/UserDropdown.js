import * as React from "react";
import Button from "./TitleButton";
import User from "../User";
import PropTypes from 'prop-types'

class UserDropdown extends React.Component {

    constructor(props) {
        super(props);


        // Setup username
        this.props.user.setStateChangeCallback(() => {
            this.setState(
                {
                    user_username: this.props.user.getUsername(),
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