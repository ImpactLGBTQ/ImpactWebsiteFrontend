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

// Takes a callback and returns the csrf token through it
import $ from "jquery";
import Cookies from 'js-cookie';
import CONFIG from './config.js';


export default function get_csrf(callback) {
    var csrf = Cookies.get('csrf_token');
    if (!csrf) {
        // Get the token if not stored
        $.ajax({
            url: CONFIG['backend_url']+'/api/csrf',
            success: function (data) {
                // Store it and callback
                Cookies.set('csrf_token', data);
                callback(data);
            },
            error: (xhr, status, error) => console.log("ERROR GETTING CRSF TOKEN: "+error),
        });
    } else callback(csrf);
}
