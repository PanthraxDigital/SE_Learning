import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import _courseCategory from "../content/courseCategory.json";
import CourseCategorySlider from "./courseCategorySlider";


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseCategory: _courseCategory
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="banner-area relative" id="home">
          <div className="overlay overlay-bg" />
          <div className="container">
            <div
              className="row fullscreen d-flex align-items-center justify-content-between"
              style={{ height: "630px" }}
            >
              <div className="banner-content col-lg-9 col-md-12">
                <h1 className="text-uppercase">
                  We Ensure better education for a better world
                </h1>
                <p className="pt-10 pb-10" />
                <a href="#" className="primary-btn text-uppercase">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="feature-area" style={{ display: "none" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="single-feature">
                  <div className="title">
                    <h4>Learn Online Courses</h4>
                  </div>
                  <div className="desc-wrap">
                    <p>
                      Usage of the Internet is becoming more common due to rapid
                      advancement of technology.
                    </p>
                    <a href="#">Join Now</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-feature">
                  <div className="title">
                    <h4>No.1 of universities</h4>
                  </div>
                  <div className="desc-wrap">
                    <p>
                      For many of us, our very first experience of learning
                      about the celestial bodies begins when we saw our first.
                    </p>
                    <a href="#">Join Now</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-feature">
                  <div className="title">
                    <h4>Huge Library</h4>
                  </div>
                  <div className="desc-wrap">
                    <p>
                      If you are a serious astronomy fanatic like a lot of us
                      are, you can probably remember that one event.
                    </p>
                    <a href="#">Join Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="popular-course-area" style={{ height: "110px" }}>
          <div className="container">
            <div
              className="row d-flex justify-content-center"
              style={{ marginTop: "30px" }}
            >
              <div className="menu-content pb-70 col-lg-8">
                <div className="title text-center">
                  <h2
                    className="mb-10"
                    style={{ marginBottom: "10px", color: "#f7631b" }}
                  >
                    Popular Courses
                  </h2>
                  <p>There is a moment in the life of any aspiring.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="popular-course-area">
          <div className="container">
            <CourseCategorySlider courseCategories={_courseCategory} />
          </div>
        </section>
        <section className="cta-two-area" style={{ marginTop: "200px" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 cta-left">
                <h1>Not Yet Satisfied with our Trend?</h1>
              </div>
              <div className="col-lg-4 cta-right">
                <a className="primary-btn wh" href="#">
                  view our blog
                </a>
              </div>
            </div>
          </div>
        </section>
        
      </React.Fragment>
    );
  }
}

export default Main;
