class App extends React.Component {
  constructor(props){
    super(props);
    this.videos = props.videos;
    
    this.state = {
      videolist: this.videos,
      video: this.videos[0]
    }

    this.onVideoClick = this.onVideoClick.bind(this);
    this.onSearchQuery = this.onSearchQuery.bind(this);
    this.changeVideo = this.changeVideo.bind(this);
  }

  //invoked after component is mounted, setting state in this method will trigger re-rendering
  componentDidMount(){
     var option = {
      q: 'hack reactor',
      part: 'snippet',
      max: 5,
      key: window.YOUTUBE_API_KEY
    }
    searchYouTube(option,this.changeVideo)
  }
  
  changeVideo (data){
      console.log('callback function')
      this.setState({
        video: data.items[0],
        videolist: data.items
      })
      console.log('state changed', this.state.videolist)
    }

  onVideoClick(video) {
    console.log('This was clicked', event.target, 'this ->', video);
    this.setState({
      video: video
    });
  }

  //Controller? to handle user input in search class component
    //calls searchYouTube
  onSearchQuery(query) {
    //var q = $('.form-control').val();
    console.log('this is query',query)
    var options = {
      q: query,
      part: 'snippet',
      max: 5,
      key: window.YOUTUBE_API_KEY
    }
    searchYouTube(options, this.changeVideo)
      //callback function will set the current video state to what was searched
    
  }

  render() {
    return (
      //on click that sets state
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search search={this.onSearchQuery}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.video} /></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.videolist} clickFunction={this.onVideoClick}/></div>
          </div>
        </div>
      </div>
    )
  }
 
}

