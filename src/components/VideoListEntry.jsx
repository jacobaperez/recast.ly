class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.thumbnail = props.thumbnail;
    this.description = props.desc;

    this.state = {
      done:false
    }
  }

  onVideoClick(event) {
    this.setState({
      done: !this.state.done
    });
    console.log('I got clicked', event);
  }

  render() {
    return (
      <div className="video-list-entry media">
        <div className="media-left media-middle">
          <img onClick={this.onVideoClick.bind(this)} className="media-object" src={this.thumbnail} alt="" />
        </div>
        <div className="media-body">
          <div onClick={this.onVideoClick.bind(this)} className="video-list-entry-title">{this.title}</div>
          <div className="video-list-entry-detail">{this.description}</div>
        </div>
      </div>   
    );
  }
}




/*var VideoListEntry = (props) => (
  
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={props.thumbnail} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">{props.title}</div>
      <div className="video-list-entry-detail">{props.desc}</div>
    </div>
  </div>
);*/

// // PropTypes tell other developers what `props` a component expects
// // Warnings will be shown in the console when the defined rules are violated
// VideoListEntry.propTypes = {
//   video: React.PropTypes.object.isRequired
// };

// // In the ES6 spec, files are "modules" and do not share a top-level scope
// // `var` declarations will only exist globally where explicitly defined
// window.VideoListEntry = VideoListEntry;
