function fetchRandomDogImage(){
  // var xhrRequest = new XMLHttpRequest();
  // xhrRequest.onload = function() {
  //   console.log(xhrRequest.response);
  //   var responseJSON = JSON.parse(xhrRequest.response);
  //   var imgurl = responseJSON.message;
  //   $('#dog-img').attr('src', imgurl);
  // };
  // xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true);
  // xhrRequest.send();


  // METHOD2
  // $.ajax({
  //   url: 'https://dog.ceo/api/breeds/image/random',
  //   method: 'GET',
  //   success: function(data) {
  //     console.log(data);
  //       var imgurl = data.message;
  //       $('#dog-img').attr('src', imgurl);
  //   }
  // });

  // METHOD3
  // $.get(url, function)
  $.get('https://dog.ceo/api/breeds/image/random', function(data) {
        console.log(data);
          var imgurl = data.message;
          $('#dog-img').attr('src', imgurl);
  });
}


$('#fetch-dog-image-button').click(fetchRandomDogImage);
// var btn = document.getElementById('fetch-dog-image-button');
// btn.addEventListener('click', function () {
//   alert("button clicked");
// })