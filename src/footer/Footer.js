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


import React from 'react';
import './footer.css';
import {
    Link, 
    Router, 
    Route, 
    Switch,
    } from 'react-router-dom';

export default class Footer extends React.Component {



    render() {
        return (
            <div className="footer_container">
               
                    <div className="footer_inner">
                        <div className="footer_list_item footer_left">
                            Impact LGBTQ+ Website
                        </div>
                        <div className="footer_list_item footer_stack footer_right">
                            <div>
                                Copyright © 2020 Natasha England-Elbro under the GNU GPLv3
                            </div>
                            <div>
                                <Link to="/LICENSE">View License</Link>
                            </div>
                        </div>
                    </div>
                   

                
            </div>
        );
    }
}

