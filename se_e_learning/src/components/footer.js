import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-area">
        <div className="container">
          <p>
            Copyright &copy;
            <script>document.write(new Date().getFullYear());</script> All
            rights reserved | Powered by{" "}
            <i className="fa fa-heart-o" aria-hidden="true" /> {" "}
            <a style={{ color: "#f7631b" }} href="https://www.panthrax.com" target="_blank">
              PDA
            </a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
