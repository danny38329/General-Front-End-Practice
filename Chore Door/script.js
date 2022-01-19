let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');

let openDoor1;
let openDoor2;
let openDoor3;

let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath ='https://content.codecademy.com/projects/chore-door/images/space.svg';
let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';

let numClosedDoors = 3;

const isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }

}

const playDoor = () => {
  numClosedDoors--;
  
};

if (numClosedDoors === 0) {
  gameOver('win');
};



randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor3 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }
}


doorImage1.onclick = () => {
  if (!isClicked(doorImage1)) {
  doorImage1.src = openDoor1;
  playDoor();
}}

doorImage2.onclick = () => {
  if (!isClicked(doorImage2)) { 
    doorImage2.src = openDoor2;
  playDoor();
}}

doorImage3.onclick = () => {
  if (!isClicked(doorImage3)) {
  doorImage3.src = openDoor3;
  playDoor();
}}

const gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = "You win! Play again?"
  }
}

randomChoreDoorGenerator();
