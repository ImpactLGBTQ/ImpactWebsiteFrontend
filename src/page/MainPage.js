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
        return content;
    }

}



export default MainPage;


