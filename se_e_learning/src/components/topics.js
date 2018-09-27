import React from "react";
import axios from "axios";

// 2. Fetch Topic on basis of selected chapter
class Topics extends React.Component {
  constructor(props) {
    super(props);
    this.getTopicByUrl = props.topicsUrl;
    this.state = {
      topicList: []
    };
    this.getContentByTopic = this.getContentByTopic.bind(this);
    this.contentUrlRef = React.createRef();
  }

  getContentByTopic(e) {
    this.props.contentUrlCallback(e.target.getAttribute("data"));
  }

  componentWillReceiveProps(nextProps) {
    
    if (nextProps.topicsUrl !== this.props.topicsUrl) {
      axios
        .get(`http://www.khanacademy.org/api/v1/topic/${nextProps.topicsUrl}`)
        .then(response => {
          this.setState({
            topicList: response.data.children
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    if (this.state.topicList !== []) {
      return (
        <div id="list" className="pure-u-1">
          <ul>
            {this.state.topicList.map((data, index) => {
              return (
                <div
                  className="email-item email-item-selected pure-g"
                  key={data.key}
                  onClick={this.getContentByTopic}
                >
                  <div className="pure-u-3-4">
                    <li>
                      <h5
                        className="email-subject"
                        data={data.node_slug}
                        key={data.key}
                        ref={this.contentUrlRef}
                      >
                        {data.title}
                      </h5>
                    </li>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      );
    }
  }
}

export default Topics;
