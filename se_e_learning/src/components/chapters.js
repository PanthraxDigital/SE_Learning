import React from "react";
import axios from "axios";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";

class Chapters extends React.Component {
  constructor(props) {
    super(props);
    this.url = props.chaptersUrl;
    this.state = {
      chapterList: [],
      topicList: []
    };
    this.topicVal = [];
    this.topicUrl = "";
    this.getTopicByChapter = this.getTopicByChapter.bind(this);
    this.topicUrl = React.createRef();
  }

  componentDidMount() {
    this.fetchData(this.url, 1, 0);
  }

  getTopicByChapter(index) {
    console.log(this.topicVal[index].innerRef);
    this.topicUrl = `http://www.khanacademy.org/api/v1/topic/${
      this.state.chapterList[index].node_slug
    }`;
    this.fetchData(this.topicUrl, 2, index);
  }

  fetchData(dataURL, callPriority, index) {
    axios
      .get(dataURL)
      .then(response => {
        switch (callPriority) {
          case 1:
            this.setState({
              chapterList: response.data.children
            });
            break;
          case 2:
            this.topicVal[index].innerRef.innerHTML = "";
            response.data.children.map((data3, ctr) => {
              // this.topicVal[index].innerRef.innerHTML += `<div class=topicInfo>
              // <a href="/topic/${data3.node_slug}"</a> ${ctr + 1}) ${
              //   data3.title
              // } </div>`;

              let innerContent = `<a href="/topic/${data3.node_slug}">${
                data3.title
              }</a>`;

              this.topicVal[index].innerRef.innerHTML += `<div class=topicInfo>
              ${innerContent}
              </div>`;
            });

            break;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    if (this.state.chapterList !== []) {
      return (
        <ul style={{ marginTop: "100px" }}>
          {this.state.chapterList.map((data, _index) => {
            return (
              <li key={data.key}>
                <Collapsible
                  data={data.node_slug}
                  onOpening={this.getTopicByChapter.bind(this, _index)}
                  trigger={data.title}
                  tabIndex={_index}
                  ref={ref => (this.topicVal[_index] = ref)}
                />
              </li>
            );
          })}
        </ul>
      );
    }
  }
}

export default Chapters;
