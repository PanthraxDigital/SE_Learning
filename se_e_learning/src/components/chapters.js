import React from "react";
import axios from "axios";

class Chapters extends React.Component {
  constructor(props) {
    super(props);
    this.url = "http://www.khanacademy.org/api/v1/topic/in-in-grade-10-ncert"; // api/subcategory/course
    this.state = {
      chapterList: []
    };
    this.getTopicByChapter = this.getTopicByChapter.bind(this);
    this.topicUrl = React.createRef();
  }

  getTopicByChapter(e) {
    //alert(e.target.getAttribute("data"));
    alert(e.target.getAttribute("data"));
  }

  componentDidMount() {
    axios
      .get(this.url)
      .then(response => {
        console.log("response " + response.data.children);
        this.setState({
          chapterList: response.data.children
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    console.log(this.state.chapterList);

    if (this.state.chapterList != []) {
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
                        data={data.url}
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
