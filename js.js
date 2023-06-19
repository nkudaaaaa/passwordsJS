"use strict"

window.onload = password(15)

const rangeInput = document.querySelector('#points');
const outputElement = document.querySelector('output[for="points"]');

rangeInput.addEventListener('input', function(event) {
    outputElement.value = event.target.value;
});

const text = document.getElementById("password-field");

  text.addEventListener("click", function() {
    const range = document.createRange();
    range.selectNode(text);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Текст скопирован в буфер обмена!");
  });


function password(symbols) {
    let password
    let myarray=[]
        
        for(let i=0; i<symbols ;i++){
            let rndObject = Math.floor(Math.random()*3);

            if (rndObject===1){
                myarray[i] = String.fromCharCode(Math.floor(Math.random()*26)+65);
            }
            else if (rndObject===0){    
                myarray[i] = String.fromCharCode(Math.floor(Math.random()*26)+97);
            }
            else {
                myarray[i] = String.fromCharCode(Math.floor(Math.random()*10)+48);
            }
        }
        password = myarray.join("");
        document.getElementById('password-field').innerHTML = password.toString();
}
