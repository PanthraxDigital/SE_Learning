import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";

class CourseCategorySlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      arrows: true,
      responsive: [
        {
          breakpoint: 426,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        }
      ]
    };
    return this.props.courseCategories.map(data1 => (
      <div
        className="single-popular-carusel"
        key={data1.CategroyId}
        style={{ marginTop: "50px" }}
      >
        <h3>{data1.Category}</h3>
        <Slider {...settings}>
          {data1.Courses.map(data2 => (
            <div className="details">
              <Link to={data2.Link}>
                <h5
                  style={{
                    border: "1px solid gray",
                    margin: "10px",
                    padding: "10px"
                  }}
                >
                  {data2.Name}
                </h5>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    ));
  }
}

export default CourseCategorySlider;

{
  /* <Slider {...settings}>
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
        <Link to={data.link}>
          <h4>{data.categoryName}</h4>
        </Link>
        <p
          style={{
            textAlign: "left",
            paddingLeft: "10px",
            color: "#777"
          }}
        >
          {data.description}
        </p>
      </div>
    </div>
  ))}
</Slider>; */
}
