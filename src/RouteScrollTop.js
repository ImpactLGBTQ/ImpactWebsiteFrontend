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
import {Route, withRouter} from 'react-router-dom';
import $ from 'jquery';


class RouteScrollTop extends React.Component {

    componentDidUpdate(prevProps) {
        // Scroll if the path has changed

        if (this.props.path === this.props.location.pathname && this.props.location.pathname !== prevProps.location.pathname) {
          //  window.scrollTo(0, 0);
          }
    }

    render() {
        // Pass through props
        const { component: Component, ...rest } = this.props;
        $('html,body').animate({ scrollTop: 0 });
        return (
            <Route {...rest} render={props => (<Component {...props} />)} />
        );
    }

}

export default withRouter(RouteScrollTop);

