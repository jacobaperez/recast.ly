var searchYouTube = (options, callback) => {

//var q = $('.form-control').val();
  // var q = options.query;
  // var maxResults = options.max;
  // var key = options.key;

  function handleSearchButton() {
    $('.btn hidden-sm-down').attr('disabled', false);
  }

  //
   $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      timeout: 5000,
      data: options,
      contentType: 'application/json',
      success: function(data){
        //pass in data into callback
        console.log('Got youtube results successfully, data is ', data);
        console.log('Got youtube results successfully, first result is ', data.items[0]);
        callback(data);
        //get element by id
      },
      error: function(data) {
        console.log('what is my key', options );
      },
    });
};

window.searchYouTube = searchYouTube;

// callbak -> invoked with videos array that is returned from hitting 'endpoint'????

// option -> object -> props (query:string to search for, max: max number of vids, key:api key,)
