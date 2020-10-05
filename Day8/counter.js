let count = 0;
countOnScreen = document.getElementById('number');

function plus(){
    count++;
    countOnScreen.innerHTML = count;
}

function minus() {
    count--;
    countOnScreen.innerHTML = count;
}