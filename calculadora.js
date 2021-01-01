let screen = document.querySelector('#result');

function getData(x){
   value =x.value;
    screen.value += value;
}

function borrar(){
    screen.value ="";
}

function calcular(){
    screen.value = eval(screen.value); 
}