const input = document.getElementById('input')

function addCharacter(character){
    input.value += character
}
 function removeCharacter() {
    input.value = input.value.slice(0, -1); // Uklanjamo posljednji karakter
}


function reset(){
    input.value = ''
}

function calculate(){
    try{
        input.value = eval(input.value);
    }
    catch{
        input.value = 'Error'
    }
    
}
