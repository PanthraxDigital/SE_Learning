import React from "react";
import axios from "axios";
import Header from "./header";
import ReactDOM from 'react-dom';

class PlayContent extends React.Component {
  constructor(props) {
    super(props);
    this.playContentUrl = this.props.playContentUrl;
    this.closePopup = this.closePopup.bind(this);
    this.state = {
      videoContentUrl: ""
    };
   
  }

  closePopup(e) {
    this.props.closePopupCallback();
  }
  componentDidMount() {
   
    let url = `http://www.khanacademy.org/api/v1/videos/${this.playContentUrl}`;
    axios
      .get(url)
      .then(response => {
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
              <iframe
                width="100%"
                height="100%"
                src={this.state.videoContentUrl}
              />
              <button
                onClick={this.closePopup}
               style={{background:'white'}}
              >
                Close
              </button>
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
