function moveDodgerLeft() {
    let dodger = document.getElementById("dodger");

    let leftNumber = parseInt(dodger.style.left.replace("px",""));
    dodger.style.left = `${leftNumber-10}px`;
}

function moveDodgerRight() {
    let dodger = document.getElementById("dodger");

    let leftNumber = parseInt(dodger.style.left.replace("px",""));
    dodger.style.left = `${leftNumber+10}px`;
}