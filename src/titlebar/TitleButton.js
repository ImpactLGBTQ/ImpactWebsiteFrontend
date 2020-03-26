import * as React from 'react';
import {Link} from "react-router-dom";

export default class TitleButton extends React.Component {



    render() {
        return (
            <Link className="header_btn" to={this.props.onClick}>{this.props.text}</Link>
        );
    }

}



