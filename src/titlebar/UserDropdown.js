import * as React from "react";
import Button from "./TitleButton";
import User from "../User";
import LoginPage from "../page/LoginPage";
import {to_page} from "./TitleBar";

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
                logged_in: true
            });
            user.setStateChangeCallback(null);
        });

        this.state = {
            logged_in: !!user.getToken(),
            user_username: "Loading..."
        };

    }


    render() {
        if (this.state.logged_in) {
            return (
                <div className="dropdown-menu">
                    <Button className="dropdown-toggle header_btn" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" text={this.state.user_username}/>
                    <div className="dropdown-menu"
                         aria-labelledby="dropdownMenuButton">
                        <Button className="header_btn dropdown-item menu_btn"
                                onClick="profile_page()" text="Profile"/>

                        <Button className="header_btn dropdown-item menu_btn"
                                onClick="make_post()" text="Make a post"/>

                        <div className="dropdown-divider"/>
                        <Button className="header_btn dropdown-item menu_btn"
                                onClick="logout()" text="Logout"/>

                    </div>
                </div>);
        }
        else return (<Button onClick={() => to_page(<LoginPage user={this.state.user} />)} text="Login" />);

    }

}

export default UserDropdown;