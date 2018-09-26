import React from "react";
import Collapsible from "react-collapsible";

class SubCategoryPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="banner-area relative about-banner" id="home">
          <div className="overlay overlay-bg" />
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="about-content col-lg-12">
                <h1 className="text-white">Popular Courses</h1>
                <p className="text-white link-nav">
                  <a href="index.html">Home </a>{" "}
                  <span className="lnr lnr-arrow-right" />{" "}
                  <a href="courses.html"> Popular Courses</a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <div>
          <Collapsible trigger="Start here">
            <p>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>
          </Collapsible>
          <Collapsible trigger="Start here">
            <p>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>
          </Collapsible>
          <Collapsible trigger="Start here">
            <p>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <p>
              It can even be another Collapsible component. Check out the next
              section!
            </p>
          </Collapsible>
        </div>
      </React.Fragment>
    );
  }
}

export default SubCategoryPage;
