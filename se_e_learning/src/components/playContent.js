import React from "react";
import axios from "axios";

class PlayContent extends React.Component {
  constructor(props) {
    super(props);
    this.playContentUrl = this.props.playContentUrl;
    this.closePopup = this.closePopup.bind(this);
    this.state = {
      videoContentUrl: ""
    };
    console.log("play content url " + this.playContentUrl);
  }

  closePopup(e) {
    this.props.closePopupCallback();
  }
  componentDidMount() {
    let url = `http://www.khanacademy.org/api/v1/videos/${this.playContentUrl}`;
    axios
      .get(url)
      .then(response => {
        //console.log("response " + JSON.stringify(response.data));
        this.setState({
          videoContentUrl: `https://www.youtube.com/embed/${
            response.data.youtube_id
          }`
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (this.state.videoContentUrl != null) {
      return (
        <div>
          <div className="popup">
            <div className="popup_inner">
              <h1>{this.props.text}</h1>
              <strong onClick={this.closePopup}>X</strong>
              <iframe
                width="100%"
                height="100%"
                src={this.state.videoContentUrl}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default PlayContent;
