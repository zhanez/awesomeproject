$(document).ready(function () {
  // searchTerm = '&q=' + 'whatever they have as indexed field'
  // numRecordsToRetrieve = '&q=' + 'whatever they have as indexed field'
  // startYear +
  // endYear
  numRecordsToRetrieve = "";
  queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=TlkRAEKv7qh9Vsb2f32v1SbiAARSh6Ah&q=science"; // +
  //  searchTerm +
  //  numRecordsToRetrieve +
  //  startYear +
  //  endYear

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    var myResponse = response.response.docs;
    //   var nytResponse = response.data.image_original_url;
    console.log(myResponse);
    console.log(myResponse[0].abstract);
  });
});
