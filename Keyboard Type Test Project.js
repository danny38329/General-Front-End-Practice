/*The following example demonstrates how to get the 
location-specific or layout-specific string associated 
with the key labeled W on an English QWERTY keyboard.*/
if (navigator.keyboard) {
    var keyboard = navigator.keyboard;
    keyboard.getLayoutMap()
    .then(keyboardLayoutMap => {
      var upKey = keyboardLayoutMap.get('KeyW');
      window.alert('Press ' + upKey + ' to move up.');
    });
  } else {
    // Do something else.
  }