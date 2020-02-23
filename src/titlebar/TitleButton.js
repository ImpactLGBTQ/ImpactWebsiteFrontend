import * as React from 'react';

export default class TitleButton extends React.Component {



    render() {
        return (
            <button className="header_btn" onClick={this.props.onClick}>{this.props.text}</button>
        );
    }

}



