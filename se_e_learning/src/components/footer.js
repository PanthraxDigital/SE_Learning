import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-area" >
        <div className="container">
          <div className="footer-bottom row align-items-center justify-content-between">
            <p
              className="footer-text m-0 col-lg-6 col-md-12"
              style={{ paddingBottom: "20px" }}
            >
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved | Powered by{" "}
              <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
              <a href="https://www.panthrax.com" target="_blank">
                PDA
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
