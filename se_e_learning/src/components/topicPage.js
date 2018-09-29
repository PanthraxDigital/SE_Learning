import React from "react";
import "../styles/topicPage.css";
import Chapters from "./chapters";
import Topics from "./topics";
import Contents from "./contents";
// 3. Fetch video list on basis of selected Topic
// 4. Excercise on basis of topic

class TopicPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chaptersUrl: `http://www.khanacademy.org/api/v1/topic${
        this.props.location.pathname
      }`,
      topicsUrl: "",
      contentUrl: ""
    };

    this.getTopicUrlFromChapter = this.getTopicUrlFromChapter.bind(this);
    this.getContentUrlFromTopic = this.getContentUrlFromTopic.bind(this);
  }

  getTopicUrlFromChapter(_topicUrl) {
    this.setState({
      topicsUrl: _topicUrl
    });
  }

  getContentUrlFromTopic(_contentUrl) {
    this.setState({
      contentUrl: _contentUrl
    });
  }

  render() {
    return (
      <Chapters 
        chaptersUrl={this.state.chaptersUrl}
        topicUrlCallback={this.getTopicUrlFromChapter}
      />
    );
  }
}

export default TopicPage;

{
  /* <React.Fragment>
<div id="layout" className="content pure-g">
  <Chapters
    chaptersUrl={this.state.chaptersUrl}
    topicUrlCallback={this.getTopicUrlFromChapter}
  />
  <Topics
    topicsUrl={this.state.topicsUrl}
    contentUrlCallback={this.getContentUrlFromTopic}
  />
  <Contents contentUrl={this.state.contentUrl} />
</div>
</React.Fragment> */
}
