import React from "react";
import axios from "axios";

class Topics extends React.Component {
  render() {
    return (
      <div id="list" className="pure-u-1">
        <div className="email-item email-item-selected pure-g">
          <div className="pure-u-3-4">
            <h5 className="email-subject">Hello from Toronto</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Topics;
