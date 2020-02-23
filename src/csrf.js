// Takes a callback and returns the csrf token through it
import $ from "jquery";
import Cookies from 'js-cookie';

export default function get_csrf(callback) {
    var csrf = Cookies.get('csrf_token');
    if (!csrf) {
        // Get the token if not stored
        $.ajax({
            url: 'localhost:8000/api/csrf',
            success: function (data) {
                // Store it and callback
                Cookies.set('csrf_token', data);
                callback(data);
            },
            error: (xhr, status, error) => console.log("ERROR GETTING CRSF TOKEN: "+error),
        });
    } else callback(csrf);
}
