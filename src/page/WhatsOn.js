import * as React from "react";
import MainPage from "./MainPage";
import $ from 'jquery';

// Fetches posts asyncthorusly from the backend
function getPosts(user, num, successCallback, errorCallback) {

    $.ajax({
        url: "localhost:8000/api/posting/get/"+num,
        crossdomain: true,
        header: user.getAuthHeader(),
        success: successCallback,
        error: errorCallback,
    })

}

class WhatsOn extends MainPage {

    // This will have to be more complex as it fetches results from the backend

}
