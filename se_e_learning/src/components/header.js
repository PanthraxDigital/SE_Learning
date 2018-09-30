import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header id="header" className="header-scrolled">
        <div className="container main-menu">
          <div
            className="row align-items-center justify-content-between d-flex"
            style={{ lineHeight: "0" }}
          >
            <div id="logo">
              <Link to="/">
                <span style={{ color: "#f7631b" }}>
                  Square Education eLearning
                </span>
              </Link>
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="http://squareeducation.in/">About</a>
                </li>
                <li className="menu-has-children">
                  <a href="http://online.squadl.com/">Question Bank</a>
                 </li>
                 <li className="menu-has-children">
                  <a href="#">Notes</a>
                 </li>
                <li>
                  <a href="http://squareeducation.in/centers/">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
