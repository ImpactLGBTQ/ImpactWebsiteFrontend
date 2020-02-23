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
import $ from "jquery";
import get_csrf from "../csrf";
import User from "../User";

function to_page(page) {
    // Call an api here to get content
    render(page, document.getElementById(MainPage.getId()));
}


export default class TitleBar extends React.Component {
    title_buttons = [{"text": "Home"}];

    constructor(props) {
        super(props);


        const user = new User();
        const token = Cookies.get('cred_token');

        if (token) {
            user.setToken();
            user.fetchData();
        }

        this.state = {
            auth_token: token,
            csrf_token: null,
            logged_in: false,
            user: user
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
                      <Button onClick="whats_on()" text="Whats on" />
                      <Button onClick={() => to_page(<Signposting />)} text="Signposting" />
                      {
                          this.state.logged_in?
                              <div className="dropdown">
                                  <Button className="dropdown-toggle header_btn" type="button" id="dropdownMenuButton"
                                          data-toggle="dropdown" text={this.state.username} />
                                  <div className="dropdown-menu" style="color: black"
                                       aria-labelledby="dropdownMenuButton">
                                      <button className="header_btn dropdown-item menu_btn"
                                              onClick="profile_page()
">Profile
                                      </button>
                                      <button className="header_btn dropdown-item menu_btn"
                                              onClick="make_post()
">Make a post
                                      </button>
                                      <div className="dropdown-divider"/>
                                      <button className="header_btn dropdown-item menu_btn"
                                              onClick="logout()
">Logout
                                      </button>
                                  </div>
                              </div>
                              :
                          <Button onClick={() => to_page(<LoginPage />)} text="Login" />
                      }

                  </nav>
              </div>
            </div>
        );
    }

}


/*

                  <div className="dropdown">
                      <button className="dropdown-toggle header_btn" type="button" id="dropdownMenuButton"
                              data-toggle="dropdown"
                      >{ }</button>
                      <div className="dropdown-menu" style="color: black" aria-labelledby="dropdownMenuButton">
                          <button style="color: black" className="header_btn dropdown-item menu_btn"
                                  onClick="profile_page()
">Profile
                          </button>
                          <button style="color: black" className="header_btn dropdown-item menu_btn" onClick="make_post()
">Make a post
                          </button>

                          <div className="dropdown-divider"></div>
                          <button style="color: black" className="header_btn dropdown-item menu_btn" onClick="logout()
">Logout
                          </button>
                      </div>
                  </div>
                  {% else %}
                  <button className="header_btn" onClick="login_portal()">Login</button>
                  {% endif %}
 */