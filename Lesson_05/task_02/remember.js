function remember(string) {
  dublicate = [];
  while (string.length > 0) {
    var char = string.charAt(0);
    var re = new RegExp(char, "g");
    if (string.match(re).length > 1) dublicate.push(char);
    string = string.replace(re, "");
  }
  return dublicate;
}
console.log(remember("apple"));
console.log(remember("apPle"));
console.log(remember("pippi"));
console.log(remember("Pippi"));
