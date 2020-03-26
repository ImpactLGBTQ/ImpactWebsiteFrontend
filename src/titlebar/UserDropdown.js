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