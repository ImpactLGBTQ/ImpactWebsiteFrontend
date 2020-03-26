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
import MainPage from "./MainPage";

class HomePage extends MainPage {

    getContent() {
        return (
        <div>
            <div class="main_body">
                <h1 class="title_text">Impact homepage</h1>
            </div>
            <div>
                <h2>This page needs more content</h2>
                <hr/>
                General outline ideas
                <ul>
                    <li>General summery of the about us page</li>
                    <li>Sitemap</li>
                    <li>Give us money (plz)</li>
                    <li>General overview of some things we've done in the past (i.e pride, show, residential etc)</li>
                </ul>
            </div>
        </div>
    );
    }

}

export default HomePage;