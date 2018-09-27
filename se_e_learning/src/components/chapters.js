import React from "react";
import axios from "axios";

// 0.The url will contain Subject & Class information on basis of which we can get the Chapters
// 1. Fetch Chapter on basis of Subject ( Sub category ) + Class Selected ( Maths in Hindi for 10 std)
class Chapters extends React.Component {
  constructor(props) {
    super(props);
    this.url = props.chaptersUrl; // api/subcategory/course
    this.state = {
      chapterList: []
    };
    this.getTopicByChapter = this.getTopicByChapter.bind(this);
    this.topicUrl = React.createRef();
  }

  getTopicByChapter(e) {
    this.props.topicUrlCallback(e.target.getAttribute("data"));
  }

  componentDidMount() {
    axios
      .get(this.url)
      .then(response => {
        this.setState({
          chapterList: response.data.children
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    if (this.state.chapterList !== []) {
      return (
        <div id="nav" className="pure-u">
          <a href="#" className="nav-menu-button">
            Menu
          </a>

          <div className="nav-inner">
            <div className="pure-menu">
              <ul className="pure-menu-list">
                {this.state.chapterList.map((data, index) => {
                  return (
                    <li className="pure-menu-item" key={data.key}>
                      <span
                        data={data.node_slug}
                        className="pure-menu-link"
                        ref={this.topicUrl}
                        onClick={this.getTopicByChapter}
                      >
                        {data.title}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Chapters;
