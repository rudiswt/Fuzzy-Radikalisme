import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SideBar extends Component {
      render() {
        return (
          <div class="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
            <div class="logo">
              <a href="http://www.creative-tim.com" class="simple-text logo-normal">
                Fuzzy Apps
              </a>
            </div>
            <div class="sidebar-wrapper">
              <ul class="nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="material-icons">dashboard</i>
                    <p>Dashboard</p>
                  </a>
                </li>
                <li class="nav-item ">
                  <Link className="nav-link" to="/survey">
                    <i class="material-icons">book</i>
                    <p>Quisioner</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        );
      }
}

export default SideBar;