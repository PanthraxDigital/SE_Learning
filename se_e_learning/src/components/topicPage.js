import React from "react";
import "../styles/topicPage.css";
import axios from "axios";
import Chapters from "./chapters";
import Topics from "./topics";
import Content from "./contents";
// 0.The url will contain Subject & Class information on basis of which we can get the Chapters
// 1. Fetch Chapter on basis of Subject ( Sub category ) + Class Selected ( Maths in Hindi for 10 std)
// 2. Fetch Topic on basis of selected chapter
// 3. Fetch video list on basis of selected Topic
// 4. Excercise on basis of topic

class TopicPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      chapters: [],
      topics: [],
      content: []
    };
  }

  

  render() {
    return (
      <React.Fragment>
        <div id="layout" className="content pure-g">
          <Chapters />
          <Topics />
          <Content />
        </div>
      </React.Fragment>
    );
  }
}

export default TopicPage;
