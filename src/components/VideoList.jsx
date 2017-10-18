class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.videos = props.videos;
    // console.log(this.videos, props.videos);
  }

  render() {
    return (
      <div className='video-list'>
        {/*for each video map a videolist entry*/}
        { this.videos.map(video => {
           console.log(video);
           return <VideoListEntry title={video.snippet.title} desc={video.snippet.description} thumbnail={video.snippet.thumbnails.default.url} />
          })
        }
      </div>
    );
  }

}
