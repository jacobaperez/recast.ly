

class App extends React.Component {
  constructor(props){
    super(props);
    this.videos = props.videos;
    this.state = {
      video: this.videos[0]
    }

    this.onVideoClick = this.onVideoClick.bind(this);

  }

  onVideoClick(video) {
    console.log('This was clicked', event.target, 'this ->', video);
    this.setState({
      video: video
    });
  }

  render(){
    return (
      //on click that sets state
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.video} /></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.videos} clickFunction={this.onVideoClick}/></div>
          </div>
        </div>
      </div>
    )
  }
 
}
















/*var App = () => (


  //on click that sets state
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em> view goes here</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        {console.log('loading video player', window.exampleVideoData[0])}
        <div><VideoPlayer video={null} default={window.exampleVideoData[0]}/></div>
      </div>
      <div className="col-md-5">
        <div><VideoList videos={window.exampleVideoData} /></div>
      </div>
    </div>
  </div>
);*/

// // In the ES6 spec, files are "modules" and do not share a top-level scope
// // `var` declarations will only exist globally where explicitly defined
// window.App = App;
