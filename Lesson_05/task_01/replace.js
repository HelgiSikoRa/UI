var str = "f xxxx sds ddd polityka sdvd politykavv xxxx3";
var replaceSrt = " ";

function replaceMatchStr(str, replaceSrt) {
    var subStr = str
    .replace(/ xxxx /gi, replaceSrt)
    .replace(/ polityka /gi, replaceSrt);
  return subStr;
}
console.log(replaceMatchStr(str, replaceSrt));
