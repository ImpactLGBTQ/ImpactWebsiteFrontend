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