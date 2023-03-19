
// Creates dropdown menu for sols
function createNumberSelect() {
    var select = document.getElementById("numberSelect");
    for (var i = 1; i <= 5111; i++) {
      var option = document.createElement("option");
      option.value = i;
      option.text = i;
      select.appendChild(option);
    }
  }

  // Calls API when submit button is clicked
  function callAPI() {
    // Get the selected sol value
    var sol = document.getElementById("numberSelect").value;

    // Constructs/opens/sends HTTPRequest
    var req = new XMLHttpRequest();
    var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=";
    var api_key = "wUszqoBuS0tL0NYr3I1Dm2ZwlLnv0Oi7IA2duqba";
    var pag = "&page=1&per_page=1";
  
    req.open("GET", url + sol + "&api_key=" + api_key + pag);
    req.send();
  
    req.addEventListener("load", function(){
      if(req.status == 200 && req.readyState == 4){
        var response = JSON.parse(req.responseText);
        document.getElementById("pic").src = response.photos[0].img_src;
      }
    });
  
    document.getElementById("tester").textContent = sol;
  }
  