

const changeColor = () => {
    let randomColor;
    let randNum = Math.floor(Math.random() * 3);
    if (randNum === 0) {
        randomColor = "red";
    } else if (randNum === 1) {
        randomColor = "blue";
    } else {
        randomColor = "yellow";
    };
    document.getElementById("complete").style.backgroundColor = randomColor;
}