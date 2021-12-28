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

  window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Should do nothing if the default action has been cancelled
    }
  
    var handled = false;
    if (event.key !== undefined) {
      // Handle the event with KeyboardEvent.key and set handled true.
    } else if (event.keyCode !== undefined) {
      // Handle the event with KeyboardEvent.keyCode and set handled true.
    }
  
    if (handled) {
      // Suppress "double action" if event handled
      event.preventDefault();
    }
  }, true);

  let passage1 = "teacher's professional duties may extend beyond formal teaching. Outside of the classroom teachers may accompany students on field trips, supervise study halls, help with the organization of school functions, and serve as supervisors for extracurricular activities. In some education systems, teachers may have responsibility for student discipline."

  