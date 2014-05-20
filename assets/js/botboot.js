var a = Math.ceil(Math.random() * 10);
var b = Math.ceil(Math.random() * 10);       
var c = a + b;

function DrawBotBoot() {
    var div = document.getElementById('botboot');
    var input = document.createElement('input');
    input.name = 'botboot';
    input.id = 'BotBootInput';
    input.type = 'number';
    input.setAttribute('class','input_field');
    input.setAttribute('maxlength','2');
    input.setAttribute('size','2');
    input.setAttribute('required','required');
    input.addEventListener('keyup',ValidBotBoot,false);
    div.innerHTML += "<label for='botboot' class='contact_label'>What is "+ a + " + " + b +"?</label><br>";
    div.appendChild(input);
}    
function ValidBotBoot(e) {
    var submit = document.getElementById('form_submit');
    var d = e.target.value;
    if (d == c) {
        submit.removeAttribute('disabled');
        return true;   
    }else{
        submit.setAttribute('disabled','disabled');
    }
    return false;  
}

window.onload = function(){
	DrawBotBoot();
};