function colorchanger(){
    let selector = document.querySelector("#canvas");
    var makeColorCode = '0123456789ABCDEF';
    var code = '#';
    for (var  i= 0; i< 6; i++) {
       code =code+ makeColorCode[Math.floor(Math.random() * 16)];
    }
    selector.style.backgroundColor = code;
}



