document.addEventListener('DOMContentLoaded', function(){


document.querySelector('#btn').addEventListener('click',function(){

	Let text = document.querySelector('#texto').value;

document.querySelector("#result").innerHTML = upper(text);

	})


function upper (text){

    return text.toUpperCase();

}
