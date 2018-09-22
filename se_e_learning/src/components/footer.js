import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer class="footer-area" >
        <div class="container">
          <div class="footer-bottom row align-items-center justify-content-between">
            <p
              class="footer-text m-0 col-lg-6 col-md-12"
              style={{ paddingBottom: "20px" }}
            >
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved | Powered by{" "}
              <i class="fa fa-heart-o" aria-hidden="true" /> by{" "}
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
