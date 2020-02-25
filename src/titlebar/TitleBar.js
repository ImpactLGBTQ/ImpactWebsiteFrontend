import * as React from "react";
import Button from './TitleButton';
import {render} from "react-dom";
import MainPage from "../page/MainPage";
import HomePage from "../page/HomePage";
import "./title_bar.css";
import FAQPage from "../page/FAQPage";
import WhoAreWe from "../page/WhoAreWe";
import Signposting from "../page/Signposting";
import LoginPage from "../page/LoginPage";
import get_csrf from "../csrf";
import User from "../User";
import UserDropdown from "./UserDropdown";
import WhatsOn from "../page/WhatsOn";

export function to_page(page) {
    // Call an api here to get content
    render(page, document.getElementById(MainPage.getId()));
}


export default class TitleBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            csrf_token: null,
        };

        // set csrf token
        get_csrf(function(token) {
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
              <div className="header_bar_inner" id="title_container">
                  <h3 className="header_text" >Impact LGBTQ+</h3>
                  <h4 className="header_text">A group where LGBTQ+ young people can be
                      themselves</h4>
              </div>
              <div className="header_bar_inner" id="header_btns_container">
                  <nav className="navbar navbar-expand-lg navbar-nav">
                      <Button onClick={() => to_page(<HomePage />)} text="Home" />
                      <Button onClick={() => to_page(<WhoAreWe />)} text="Who are we" />
                      <Button onClick="find_us()" text="Find us" />
                      <Button onClick={() => to_page(<FAQPage />)} text="LGBTQ+ FAQ" />
                      <Button onClick={() => to_page(<WhatsOn user={this.props.user}/>)} text="Whats on" />
                      <Button onClick={() => to_page(<Signposting />)} text="Signposting" />
                  </nav>
                  <div>
                    <UserDropdown user={this.props.user} />
                  </div>
              </div>
            </div>
        );
    }

}

TitleBar.propTypes = {
    user: React.PropTypes.objectOf(User).isRequired,
};