var counterClick = 0;

function addClick() {
    updateDisplay(++counterClick);
}

function rrr() {
    updateDisplay(--counterClick);
}

function updateDisplay(val) {
    if
    document.getElementById("counter-label").innerHTML = val;
}


