var searchYouTube = (options, callback) => 
  
  function handleSearchButton() {
    $('.btn hidden-sm-down').attr('disabled', false);
  

  function search() {
    var q = $('.form-control').val();
    var request = gapi.client.youtube.search.list({
      key: window.YOUTUBE_API_KEY,
      maxResults: 5,
      type: 'video',
      videoEmbeddable: 'true',
      q: q,
      part: 'snippet',
    });
  }

  request.execute(function(reponse) {
    var str = JSON.stringify(response.result);
    console.log(str);
  });
};

window.searchYouTube = searchYouTube;

// callbak -> invoked with videos array that is returned from hitting 'endpoint'????

// option -> object -> props (query:string to search for, max: max number of vids, key:api key,)
