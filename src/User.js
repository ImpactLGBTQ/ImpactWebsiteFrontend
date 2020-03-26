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

// For handling user requests to the API

import $ from 'jquery';
import get_csrf from "./csrf";
import Cookies from 'js-cookie';
import CONFIG from './config.js';

class User {
    username;
    uuid;
    token;
    stateChangeCallback;

    constructor(state_change_callback = null) {
        // Try and get the token
        this.token = Cookies.get('cred_token');

        // Fetch if token exists
        this.token && this.fetchData();

        this.stateChangeCallback = state_change_callback;

    }
    // returns the authentication header required as json
    getAuthHeader() {
        return {"Authorization": "Token "+this.token}
    }

    // Attempts to log in with the provided token asynchronusly calling the callback with the result
    login(data) {
        Cookies.set('cred_token', data.token);
        this.setToken(data.token);
        this.fetchData();
    }

    // Fetches data about itself from the backend
    fetchData() {
        $.ajax({
                url: CONFIG['backend_url']+'/api/user',
                crossDomain: true,
                headers: { 'Authorization': 'Token '+this.token},
                datatype: 'json',
                success: (data) => {
                    this.setUsername(data.username);
                    this.setUUID(data.uuid);
                    this.stateChanged();
                },
                error: (xhr, code, err) => {
                    console.log("ERROR GETTING USER DATA: "+err);
                }
            }
        )
    }
    // Logs the user out
    logout() {
        // Send ajax to logout
        $.ajax({
            url: CONFIG['backend_url']+"/api/auth/logmeout",
            headers: { 'Authorization': 'Token '+this.token},
            success: () => {
                Cookies.remove('cred_token');
                // Update self
                this.setUsername(null);
                this.setUUID(null);
                this.setToken(null);
                this.stateChanged();
            },
            error: (xhr, code, err) => console.log("Error signing out: "+err),
    });
    }

    stateChanged() {
        this.stateChangeCallback && this.stateChangeCallback();
    }

    setToken(set) {this.token = set; }
    getToken() { return this.token}
    getUUID() {return this.uuid}
    setUUID(set) {this.uuid = set; }
    setUsername(set) {this.username = set; }
    getUsername() {return this.username}
    setStateChangeCallback(set) {this.stateChangeCallback = set}
}


export default User;