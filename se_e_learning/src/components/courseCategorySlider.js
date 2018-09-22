import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

class CourseCategorySlider extends React.Component {
  render() {
    console.log(JSON.stringify(this.props.courseCategories));
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          {this.props.courseCategories.map((data, index) => (
            <div className="single-popular-carusel" key={data.courseCategoryId}>
              <div className="thumb-wrap relative">
                <div className="thumb relative">
                  <div className="overlay overlay-bg" />
                  <img
                    className="img-fluid"
                    src={require("../img/p1.jpg")}
                    alt=""
                    style={{ padding: "10px" }}
                  />
                </div>
              </div>

              <div className="details">
                <a href="#">
                  <h4>{data.categoryName}</h4>
                </a>
                <p style={{ textAlign: "left", paddingLeft:'10px' }}>{data.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default CourseCategorySlider;
