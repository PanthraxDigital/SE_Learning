import React from "react";

class Main extends React.Component {
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
                <p className="pt-10 pb-10">
                  In the history of modern astronomy, there is probably no one
                  greater leap forward than the building and launch of the space
                  telescope known as the Hubble.
                </p>
                <a href="#" className="primary-btn text-uppercase">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-area">
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

        <section className="popular-course-area section-gap">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-70 col-lg-8">
                <div className="title text-center">
                  <h1 className="mb-10">Popular Courses we offer</h1>
                  <p>There is a moment in the life of any aspiring.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="active-popular-carusel">
                <div className="single-popular-carusel">
                  <div className="thumb-wrap relative">
                    <div className="thumb relative">
                      <div className="overlay overlay-bg" />
                      <img
                        className="img-fluid"
                        src={require("../img/p1.jpg")}
                        alt=""
                      />
                    </div>
                    <div className="meta d-flex justify-content-between">
                      <p>
                        <span className="lnr lnr-users" /> 355{" "}
                        <span className="lnr lnr-bubble" />
                        35
                      </p>
                      <h4>$150</h4>
                    </div>
                  </div>
                  <div className="details">
                    <a href="#">
                      <h4>Learn Designing</h4>
                    </a>
                    <p>
                      When television was young, there was a hugely popular show
                      based on the still popular fictional characte
                    </p>
                  </div>
                </div>
                <div className="single-popular-carusel">
                  <div className="thumb-wrap relative">
                    <div className="thumb relative">
                      <div className="overlay overlay-bg" />
                      <img className="img-fluid" src="img/p2.jpg" alt="" />
                    </div>
                    <div className="meta d-flex justify-content-between">
                      <p>
                        <span className="lnr lnr-users" /> 355{" "}
                        <span className="lnr lnr-bubble" />
                        35
                      </p>
                      <h4>$150</h4>
                    </div>
                  </div>
                  <div className="details">
                    <a href="#">
                      <h4>Learn React js beginners</h4>
                    </a>
                    <p>
                      When television was young, there was a hugely popular show
                      based on the still popular fictional characte
                    </p>
                  </div>
                </div>
                <div className="single-popular-carusel">
                  <div className="thumb-wrap relative">
                    <div className="thumb relative">
                      <div className="overlay overlay-bg" />
                      <img className="img-fluid" src="img/p3.jpg" alt="" />
                    </div>
                    <div className="meta d-flex justify-content-between">
                      <p>
                        <span className="lnr lnr-users" /> 355{" "}
                        <span className="lnr lnr-bubble" />
                        35
                      </p>
                      <h4>$150</h4>
                    </div>
                  </div>
                  <div className="details">
                    <a href="#">
                      <h4>Learn Photography</h4>
                    </a>
                    <p>
                      When television was young, there was a hugely popular show
                      based on the still popular fictional characte
                    </p>
                  </div>
                </div>
                <div className="single-popular-carusel">
                  <div className="thumb-wrap relative">
                    <div className="thumb relative">
                      <div className="overlay overlay-bg" />
                      <img className="img-fluid" src="img/p4.jpg" alt="" />
                    </div>
                    <div className="meta d-flex justify-content-between">
                      <p>
                        <span className="lnr lnr-users" /> 355{" "}
                        <span className="lnr lnr-bubble" />
                        35
                      </p>
                      <h4>$150</h4>
                    </div>
                  </div>
                  <div className="details">
                    <a href="#">
                      <h4>Learn Surveying</h4>
                    </a>
                    <p>
                      When television was young, there was a hugely popular show
                      based on the still popular fictional characte
                    </p>
                  </div>
                </div>
                <div className="single-popular-carusel">
                  <div className="thumb-wrap relative">
                    <div className="thumb relative">
                      <div className="overlay overlay-bg" />
                      <img className="img-fluid" src="img/p1.jpg" alt="" />
                    </div>
                    <div className="meta d-flex justify-content-between">
                      <p>
                        <span className="lnr lnr-users" /> 355{" "}
                        <span className="lnr lnr-bubble" />
                        35
                      </p>
                      <h4>$150</h4>
                    </div>
                  </div>
                  <div className="details">
                    <a href="#">
                      <h4>Learn Designing</h4>
                    </a>
                    <p>
                      When television was young, there was a hugely popular show
                      based on the still popular fictional characte
                    </p>
                  </div>
                </div>
                <div className="single-popular-carusel">
                  <div className="thumb-wrap relative">
                    <div className="thumb relative">
                      <div className="overlay overlay-bg" />
                      <img className="img-fluid" src="img/p2.jpg" alt="" />
                    </div>
                    <div className="meta d-flex justify-content-between">
                      <p>
                        <span className="lnr lnr-users" /> 355{" "}
                        <span className="lnr lnr-bubble" />
                        35
                      </p>
                      <h4>$150</h4>
                    </div>
                  </div>
                  <div className="details">
                    <a href="#">
                      <h4>Learn React js beginners</h4>
                    </a>
                    <p>
                      When television was young, there was a hugely popular show
                      based on the still popular fictional characte
                    </p>
                  </div>
                </div>
                <div className="single-popular-carusel">
                  <div className="thumb-wrap relative">
                    <div className="thumb relative">
                      <div className="overlay overlay-bg" />
                      <img className="img-fluid" src="img/p3.jpg" alt="" />
                    </div>
                    <div className="meta d-flex justify-content-between">
                      <p>
                        <span className="lnr lnr-users" /> 355{" "}
                        <span className="lnr lnr-bubble" />
                        35
                      </p>
                      <h4>$150</h4>
                    </div>
                  </div>
                  <div className="details">
                    <a href="#">
                      <h4>Learn Photography</h4>
                    </a>
                    <p>
                      When television was young, there was a hugely popular show
                      based on the still popular fictional characte
                    </p>
                  </div>
                </div>
                <div className="single-popular-carusel">
                  <div className="thumb-wrap relative">
                    <div className="thumb relative">
                      <div className="overlay overlay-bg" />
                      <img className="img-fluid" src="img/p4.jpg" alt="" />
                    </div>
                    <div className="meta d-flex justify-content-between">
                      <p>
                        <span className="lnr lnr-users" /> 355{" "}
                        <span className="lnr lnr-bubble" />
                        35
                      </p>
                      <h4>$150</h4>
                    </div>
                  </div>
                  <div className="details">
                    <a href="#">
                      <h4>Learn Surveying</h4>
                    </a>
                    <p>
                      When television was young, there was a hugely popular show
                      based on the still popular fictional characte
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Main;
