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
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="courses.html">Courses</a>
                </li>
                <li className="menu-has-children">
                  <a href="">Notes</a>
                  <ul>
                    <li>
                      <a href="blog-home.html">Blog Home</a>
                    </li>
                    <li>
                      <a href="blog-single.html">Blog Single</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
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
