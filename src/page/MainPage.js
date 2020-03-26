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
import {render} from "react-dom";

class MainPage extends React.Component {

    getContent() {}

    static getId() {
        return 'body_container';
    }

    render() {
        const content = this.getContent();
        const html_page = (<div id={MainPage.getId()}>{content}</div>);
        return html_page;
    }

}



export default MainPage;


