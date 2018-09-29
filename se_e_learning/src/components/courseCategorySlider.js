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
        key={data1.CategroyId}
        style={{
          marginTop: "50px",
          textAlign: "left",
          fontWeight: "400",
          letterSpacing: "1px"
        }}
      >
        <h3 style={{ padding: "10px" }}>{data1.Category}</h3>
        <Slider {...settings}>
          {data1.Courses.map(data2 => (
            <div>
              <Link to={data2.Link} className="category">
                <h5>{data2.Name}</h5>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    ));
  }
}

export default CourseCategorySlider;
