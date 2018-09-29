import React from "react";
import axios from "axios";
import PlayContent from "./playContent";

class Contents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentList: [],
      showPopup: false,
      playContentUrl: ""
    };
    this.contentUrlRef = React.createRef();
    this.playContent = this.playContent.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.navigateBack = this.navigateBack.bind(this);
    let path = this.props.location.pathname;
    this.pathValue = path.substr(path.lastIndexOf("/"), path.length);
  }

  playContent(e) {
    // open the dialog component
    this.setState({
      showPopup: true,
      playContentUrl: e.currentTarget.getAttribute("node_slug")
    });
  }

  closePopup() {
    this.setState({
      showPopup: false
    });
  }
  navigateBack(e) {
    this.props.history.goBack();
  }

  componentDidMount() {
    axios
      .get(`http://www.khanacademy.org/api/v1/topic${this.pathValue}`)
      .then(response => {
        console.log("content response " + JSON.stringify(response.data));
        this.setState({
          contentList: response.data.children
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let showContentInPopup;
    if (this.state.showPopup) {
      showContentInPopup = (
        <PlayContent
          closePopupCallback={this.closePopup}
          playContentUrl={this.state.playContentUrl}
        />
      );
    } else {
      showContentInPopup = "";
    }

    if (this.state.contentList.length > 0) {
      return (
        <React.Fragment>
          <div id="main">
            <ul className="topicContent">
              {this.state.contentList.map((data, index) => {
                console.log("value " + data.node_slug.indexOf("v/"));
                if (data.node_slug.indexOf("v/") != -1) {
                  return (
                    <li
                      node_slug={data.node_slug.substr(
                        2,
                        data.node_slug.length
                      )}
                      key={index}
                      onClick={this.playContent}
                      ref={this.contentUrlRef}
                    >
                      <div className="email-content">
                        <div className="email-content-body">
                          <h4 style={{float:"left"}}>{data.title}</h4>
                          <img src={require("../img/play_2.png")} style={{marginTop:"-10px"}}/>
                          <p>{data.description}</p>
                        </div>
                      </div>
                    </li>
                  );
                } else {
                  return null;
                }
              })}
              {showContentInPopup}
            </ul>
            <div style={{ background: "red" }}>
              <button
                className="pure-button"
                style={{ float: "left", margin: "10px" }}
                onClick={this.navigateBack}
              >
                Back
              </button>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return null;
    }
  }
}
export default Contents;
