var boxOne = document.getElementById("one");
var boxTwo = document.getElementById("two");
var boxThree = document.getElementById("three");
var boxFour = document.getElementById("four");
var currentBox;

var el_up = document.getElementById("GFG_UP");
        var el_down = document.getElementById("GFG_DOWN");
        var str = 'No key pressed';
  
        function gfg_Run() {
            el_down.innerHTML = str;
        }
        document.body.addEventListener('keydown', function(event)
                                       {
            const key = event.key;
            switch (key) {
                case "ArrowLeft":
                    str = 'Left';
                    break;
                case "ArrowRight":
                    str = 'Right';
                    break;
                case "ArrowUp":
                    str = 'Up';
                    break;
                case "ArrowDown":
                    str = 'Down';
                    break;
            }
        });