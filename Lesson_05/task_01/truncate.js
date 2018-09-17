var str = "Sample String";
var maxlength = 3;

function truncate(str, maxlength) {
  var subString = str.substring(0, maxlength) + "...";
  return subString;
}
//Checking result
console.log(truncate(str, maxlength));
