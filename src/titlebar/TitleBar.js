import * as React from "react";
import Button from './TitleButton';
import "./title_bar.css";
import PropTypes from 'prop-types'
import get_csrf from "../csrf";
import User from "../User";
import UserDropdown from "./UserDropdown";


export function to_page(page) {
    // Call an api here to get content
    //render(page, document.getElementById(MainPage.getId()));
}


export default class TitleBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            csrf_token: null,
        };

        // set csrf token
        get_csrf((token) => {
            this.setState(
                {
                    csrf_token: token
                }
            )
        });

    }

    render() {
        return (
            <div>
              <div className="header_bar_inner head_bar_upper" id="title_container">
                  <h3 className="header_text" >Impact LGBTQ+</h3>
                  <h4 className="header_text">A group where LGBTQ+ young people can be
                      themselves</h4>
              </div>
              <div className="header_bar_inner head_bar_upper" id="header_btns_container">
                <div className="header_bar_inner">
                      <Button onClick="/home" text="Home" />
                      <Button onClick="/about" text="Who are we" />
                      <Button onClick="" text="Find us" />
                      <Button onClick="/faq" text="LGBTQ+ FAQ" />
                      <Button onClick="/events" text="Whats on" />
                      <Button onClick="/signposting" text="Signposting" />
                </div>
                <div className="header_bar_inner">
                    <UserDropdown user={this.props.user} />
                
                </div>
            </div>
        </div>
        );
    }

}

TitleBar.propTypes = {
    user: PropTypes.objectOf(User).isRequired,
};