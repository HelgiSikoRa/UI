var str =
  "Назва Львів дана місту на честь князя Лева Даниловича, сина засновника Львова Данила Галицького.";
var target = "а";

var pos = 0;
var qty = 0;

function findQtyChar(str, target) {
  while (true) {
    var foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;
    qty++;
    pos = foundPos + 1;
  }
  return qty;
}
console.log(findQtyChar(str, target));
