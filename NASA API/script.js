function displayImage(data){

  // $('<img>', {
  //   src: data.url,
  //   height: '100%',
  //   widht: '100%'
  // }).appendTo('#img-container');

  // Another faster way
  $(document.createElement('img')).attr('src', data.url).appendTo('#img-container');
}

$.ajax({
  // url: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
  // url: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-06-25',
  url: 'https://api.nasa.gov/planetary/apod',
  method: 'GET',
  success: displayImage,
  data : {
    api_key: 'DEMO_KEY',
    date: '2019-06-25'
  }
})