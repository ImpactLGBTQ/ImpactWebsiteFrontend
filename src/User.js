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


    }

    // Attempts to log in with the provided token asynchronusly calling the callback with the result
    login(username, password, callback) {

    }

    // Fetches data about itself from the backend
    fetchData() {
        $.ajax({
                url: 'http://localhost:8000/api/user',
                crossDomain: true,
                headers: { 'Authorization': 'Token '+this.token},
                datatype: 'json',
                success: (data) => this.setData(data),
            }
        )
    }
    // Sets up self with the passed json data
    setData(json_data) {
        this.setUsername(json_data.username);
        this.setUUID(json_data.uuid);
    }

    stateChanged() {
        this.stateChangeCallback && this.stateChangeCallback();
    }

    setToken(set) {this.token = set; this.stateChangeCallback()}
    getToken() { return this.token}
    getUUID() {return this.uuid}
    setUUID(set) {this.uuid = set; this.stateChangeCallback()}
    setUsername(set) {this.username = set;  this.stateChangeCallback()}
    getUsername() {return this.username}
    setStateChangeCallback(set) {this.stateChangeCallback = set}
}


export default User;