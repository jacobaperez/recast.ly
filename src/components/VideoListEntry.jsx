class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
    // this.title = props.title;
    // this.thumbnail = props.thumbnail;
    // this.description = props.desc;
    this.video = props.video;
    this.clickFunc = props.clickFunc;
  }

  render() {
    return (
      <div className="video-list-entry media">
        <div className="media-left media-middle">
          <img className="media-object" src={this.props.thumbnail} alt="" />
        </div>
        <div className="media-body">
          <div onClick = { (video) => this.clickFunc(this.video)} 
            className="video-list-entry-title">{this.props.title}</div>
          <div className="video-list-entry-detail">{this.props.description}</div>
        </div>
      </div>   
    );
  }
}

