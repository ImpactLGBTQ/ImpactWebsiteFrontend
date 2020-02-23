// For handling user requests to the API

import $ from 'jquery';
import get_csrf from "./csrf";

class User {
    username;
    uuid;
    token;

    constructor() {
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
        alert("Fetching data with token: "+this.token);
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

    setToken(set) {this.token = set}
    getToken() { return this.token}
    getUUID() {return this.uuid}
    setUUID(set) {this.uuid = set}
    setUsername(set) {this.username = set}
    getUsername() {return this.username}
}


export default User;