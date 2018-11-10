var ordered = new Array();
var count = 0;

function whenClick() {
  alert("Hello!");
}

function writeFlav() {
  var e = document.getElementById("flavor");
  var x = e.options[e.selectedIndex].value;
  var f = document.getElementById("color");
  var y = f.options[f.selectedIndex].value;
  alert(x + "     " + y);
}

function writeArray() {
  ordered.push(new Object());
  var e = document.getElementById("flavor");
  var x = e.options[e.selectedIndex].value;
  var f = document.getElementById("color");
  var y = f.options[f.selectedIndex].value;
  var z = document.getElementById("name").value;
  var w =  document.getElementById("addr").value;
  var v = document.getElementById("numb").value;
  ordered[count].flav = x;
  ordered[count].color = y;
  ordered[count].name = z;
  ordered[count].addr = w;
  ordered[count].numb = v;
  count++;
}
function checklogin() {
  alert(sjcl.encrypt("hello","Hello"));
}
function decript() {
  alert(sjcl.decrypt("hello", ))
}
function displayArray() {
  for (var i = 0; i < ordered.length; i++) {
    alert(ordered[i].flav + "   " + ordered[i].color);
  }
}
