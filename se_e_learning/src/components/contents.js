import React from "react";
import axios from "axios";

class Contents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentList: []
    };
    this.playContentUrlRef = React.createRef();
    this.contentUrlRef = React.createRef();
    this.playContent = this.playContent.bind(this);
  }

  playContent(e) {}

  componentWillReceiveProps(nextProps) {
    if (nextProps.contentUrl !== this.props.contentUrl) {
      axios
        .get(`http://www.khanacademy.org/api/v1/topic/${nextProps.contentUrl}`)
        .then(response => {
          console.log("response " + JSON.stringify(response.data.children));
          this.setState({
            contentList: response.data.children
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    if (this.state.contentList.length > 0) {
      return (
        <div id="main" className="pure-u-1">
          {this.state.contentList.map(data => {
            return (
              <div
                className="email-content"
                key={data.key}
                onClick={this.playContent}
                ref={this.playContentUrlRef}
              >
                <div className="email-content-body">
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                </div>
                <iframe
                  width="420"
                  height="345"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                />
              </div>
            );
          })}
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Contents;
