class VideoList extends React.Component {
  constructor(props) {
    super(props);
    //this.videos = props.videos;
    this.vidFunc = props.clickFunction;
    // console.log(this.videos, props.videos);
  }

  render() {
    return (
      <div className='video-list'>
        {/*for each video map a videolist entry*/}
        { this.props.videos.map(video => {
           return <VideoListEntry title={video.snippet.title} desc={video.snippet.description} clickFunc={this.vidFunc} thumbnail={video.snippet.thumbnails.default.url} video={video}/>
          })
        }
      </div>
    );
  }

}
