let input = document.querySelector('.calculator-input');
let buttons = document.getElementsByTagName('button');

function addNumber(number){
   input.value += number
}

function deleteNumber(){
    let currentValue = input.value;
    if (currentValue.length > 0) {
        input.value = currentValue.slice(0, -1);
    }
}

function reset(){
    input.value = ''
}

function calculate(){
    try{
        let result = eval(input.value)
    input.value = result
    }catch{
        input.value = 'Error'
    }
    
}