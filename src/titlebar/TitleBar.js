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
import Button from './TitleButton';
import "./title_bar.css";
import PropTypes from 'prop-types'
import get_csrf from "../csrf";
import User from "../User";
import UserDropdown from "./UserDropdown";
import $ from 'jquery';
import CheeseburgerMenu from 'cheeseburger-menu'
import { Sling as Hamburger } from 'hamburger-react'

export function to_page(page) {
    // Call an api here to get content
    //render(page, document.getElementById(MainPage.getId()));
}


class Sidebar extends React.Component {

    constructor(props) {
        super(props)
        // Register escape handler
        document.addEventListener('keydown', (event) => {
            const key = event.key; 
            if (key === "Escape") {
                this.setState({isOpen: false})
            }
        });
    }

    componentWillReceiveProps(newProps) {
        this.setState({isOpen: newProps.isOpen})
    }



    render() {
        return(
        <CheeseburgerMenu isOpen={this.props.isOpen} closeCallback={()=>{ this.props.closeCallback && this.props.closeCallback() }} >
            <div className="menu_container">
                    {this.props.children}
                
            </div>
        </CheeseburgerMenu>
        );
    }

}

Sidebar.propTypes = {
    isOpen: PropTypes.bool,
};


export default class TitleBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            csrf_token: null,
            menu_open: false,
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
        const height = $(window).height();
        const width = $(window).width();
        const isSmall = (height < 600 || width < 1200);
        const expandedBtns = (
            <>
            <Button onClick="/faq" text="LGBTQ+ FAQ" />
            <Button onClick="/events" text="Whats on" />
            <Button onClick="/signposting"  text="Signposting" />
            </>
        );
        return (
            <>
            { isSmall && 
                <div className="bm-wrapper-bar">
                    <Sidebar isOpen={this.state.menu_open} closeCallback={()=>this.setState({menu_open: false})}>
                        {expandedBtns}
                        <UserDropdown user={this.props.user} />
                    </Sidebar>
                </div>
            }
            <div>{
                !isSmall && 
                <div className="header_bar_inner head_bar_upper" id="title_container">
                  <h3 className="header_text" >Impact LGBTQ+</h3>
                  <h4 className="header_text">A group where LGBTQ+ young people can be
                      themselves</h4>
                </div>
            }
              
              <div className="header_bar_inner head_bar_upper" id="header_btns_container">
                <div className="header_bar_inner">  
                {isSmall && 
                        <Hamburger toggled={this.state.menu_open} toggle={this.state.menu_open} id="sidebar_close_btn" className="header_btn" onToggle={toggled => {
                        this.setState({menu_open: toggled});}}/>
                
                }
                    <div className="header_bar_inner header_btn_row">
                            <Button onClick="/home" text="Home" />
                            <Button onClick="/about" text={isSmall ? "About" : "Who are we"} />
                            <Button onClick="" text="Find us" />
                      
                      {!isSmall &&
                      // Larger devices see the whole options row
                      expandedBtns
                      }
                      </div>
                </div>
                {!isSmall && 
                <div className="header_bar_inner header_btn_row">
                    <UserDropdown user={this.props.user} />
                </div>
                }
            </div>
        </div>
        </>
        );
    }

}

TitleBar.propTypes = {
    user: PropTypes.objectOf(User).isRequired,
};