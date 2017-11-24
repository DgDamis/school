document.getElementById('submit').addEventListener('click', function () {
    console.log('Formulář odeslán.');
    var string = document.getElementById('editor').value;
    console.log('Zaznamenaný řetězec: ',string,'');
    document.getElementById('info').innerHTML='<p>Délka textu: ' + string.length + ' znaků';
    document.getElementById('upperCase').innerHTML = string.toLocaleUpperCase();
    document.getElementById("lowerCase").innerHTML = string.toLocaleLowerCase();
    console.log('Počet mezer: ',countOfSpaces(string),'');
    document.getElementById("info").innerHTML += "<p>Počet mezer: " + countOfSpaces(string);
    console.log("Zašifrovaný text: ", crypt(string, 5), "");
    document.getElementById("crypted").innerHTML = crypt(string, 5);
    var find = document.getElementById('oldString').value;
    find = new RegExp(find,'g');
    var replace = document.getElementById('newString').value;
    document.getElementById('replaced').innerHTML = string.replace(find, replace);
})

function countOfSpaces(string) {
    var count = 0;
    for(i = 0;i < string.length;i++) {
        if (string.substr(i, 1) === " ") {
            count++;
        }
    }
    return count;
}

function crypt(string, delta) {
    var cryptedString = "";
    for (index = (string.length-1); index != 0; index--) {
      cryptedString += (string.charCodeAt(index)+delta);
    }
    return cryptedString;
}

function crypt2(string, delta) {
  var cryptStr = "";
  for (i = 0; i < string.length; i++) {
    cryptStr += Strine.fromCharCode(txt.charCodeAt(i) + delta);
  } 
  return cryptString;
}