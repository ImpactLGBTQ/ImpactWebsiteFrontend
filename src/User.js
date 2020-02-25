// For handling user requests to the API

import $ from 'jquery';
import get_csrf from "./csrf";
import Cookies from 'js-cookie';

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
                url: 'http://localhost:8000/api/user',
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
            url: 'http://localhost:8000/api/auth/logmeout',
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