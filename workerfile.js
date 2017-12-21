onmessage = function(e) {
  if(e.data[0]==1)
  {
  	data1();
  }

  if(e.data[0]==2)
  {
    data2();
  }
}
function data1()
{
  var http = new XMLHttpRequest();
  var url = "phpfile.php";
  var params = "lorem=ipsum&name=binny";
  http.open("POST", url, true);

  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
    postMessage(http.responseText);
      }
  }
  http.send(params);
}

function data2(){

}