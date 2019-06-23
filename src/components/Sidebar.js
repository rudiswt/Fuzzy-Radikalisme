/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class SideBar extends Component {
  state = {
    leftMenu : [
      { id: 1 , text: "Dashboard", link:"/", icon: "dashboard", liclass: "nav-tem"},
      { id: 2 , text: "Quisioner", link:"/survey", icon: "book", liclass: "nav-tem"},
    ]
  }
  componentDidMount = () =>{
    this.setState({ idNav: this.props.active })
  }
      render() {
        return (
          <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
            <div className="logo">
              <a href="#" className="simple-text logo-normal">
                <b>Fuzzy Apps</b>
              </a>
            </div>
            <div className="sidebar-wrapper">
              <ul className="nav">
                {this.state.leftMenu.map(items=>(
                  <li key={items.id} className={items.liClass, this.state.idNav === items.id ? 'active' : ''} >
                    <Link className="nav-link" to={items.link}>
                      <i className="material-icons">{items.icon}</i>
                      <p>{items.text}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      }
}

export default SideBar;