const updateTime = () => {

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();

document.getElementById("time").innerHTML = time;
}

setInterval("updateTime", 1000);