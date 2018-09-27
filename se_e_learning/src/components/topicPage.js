import React from "react";
import "../styles/topicPage.css";
import axios from "axios";

// 0.The url will contain Subject & Class information on basis of which we can get the Chapters
// 1. Fetch Chapter on basis of Subject ( Sub category ) + Class Selected ( Maths in Hindi for 10 std)
// 2. Fetch Topic on basis of selected chapter
// 3. Fetch video list on basis of selected Topic
// 4. Excercise on basis of topic

class TopicPage extends React.Component {
  constructor(props) {
    super(props);
    this.url = "http://www.khanacademy.org/api/v1/topic/math"; // api/subcategory/course
    
  }

  componentDidMount() {
    axios
      .get(this.url)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <div id="layout" className="content pure-g">
            <div id="nav" className="pure-u">
              <a href="#" className="nav-menu-button">
                Menu
              </a>

              <div className="nav-inner">
                <div className="pure-menu">
                  <ul className="pure-menu-list">
                    <li className="pure-menu-item">
                      <a href="#" className="pure-menu-link">
                        Real Numbers
                      </a>
                    </li>
                    <li className="pure-menu-item">
                      <a href="#" className="pure-menu-link">
                        Polynomial
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="list" className="pure-u-1">
              <div className="email-item email-item-selected pure-g">
                <div className="pure-u-3-4">
                  <h4 className="email-subject">Hello from Toronto</h4>
                </div>
              </div>
            </div>

            <div id="main" className="pure-u-1">
              <div className="email-content">
                <div className="email-content-header pure-g">
                  <div className="pure-u-1-1">
                    <h1 className="email-content-title">Hello from Toronto</h1>
                  </div>
                </div>

                <div className="email-content-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    essecillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Aliquam ac feugiat dolor. Proin mattis massa sit amet enim
                    iaculis tincidunt. Mauris tempor mi vitae sem aliquet
                    pharetra. Fusce in dui purus, nec malesuada mauris.
                    Curabitur ornare arcu quis mi blandit laoreet. Vivamus
                    imperdiet fermentum mauris, ac posuere urna tempor at. Duis
                    pellentesque justo ac sapien aliquet egestas. Morbi enim mi,
                    porta eget ullamcorper at, pharetra id lorem.
                  </p>
                  <p>
                    Donec sagittis dolor ut quam pharetra pretium varius in
                    nibh. Suspendisse potenti. Donec imperdiet, velit vel
                    adipiscing bibendum, leo eros tristique augue, eu rutrum
                    lacus sapien vel quam. Nam orci arcu, luctus quis vestibulum
                    ut, ullamcorper ut enim. Morbi semper erat quis orci aliquet
                    condimentum. Nam interdum mauris sed massa dignissim
                    rhoncus.
                  </p>
                  <p>
                    Regards,
                    <br />
                    Tilo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TopicPage;
