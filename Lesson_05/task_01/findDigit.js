var str = "іва 24 уц ац34434ауку";

function findDigit(str) {
  var subStr = str.replace(/\D+/gi, "");
  return subStr;
}
console.log(findDigit(str));
