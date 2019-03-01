window.addEventListener('keydown', function (e) {
  // querySelector returns the first element that matches
  // a specified css selector
  /*attribute selector: selects elements with a specific attribute.
    example: a[target]
    can also select element with specific attribute and value:
    a[target="_blank"]
    works in both CSS and JS. */
    /* ES6 template strings/string literals
      Always enclosed `in backticks`
      Written as: ${expression}*/
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // stop the function from running all together
  if(!audio) return;
  /* If you call play on an audio element that is already playing, it won't
    play it again, so if you repeatedly hit a key it would only play the
    audio one every few times. If you want it to play every time you hit
    the key, you need to reset audio.currentTime.*/
  audio.currentTime = 0; // rewinds sound to the start
  audio.play();
  /* adds the class playing to the key */
  key.classList.add('playing');
});

function removeTransition(e) {
  // if it's not a transform, skip it
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

/* Select all keys on the page and store them in keys */
const keys = document.querySelectorAll('.key');

/* You can't add an eventListener to an array: you have to listen to each
  element individually. */
/*
  Iterate through keys using forEach; forEach element, add an eventListener
  to listen for the end of a transition; when that transitionEnd is heard,
  remove the transition via the removeTransition function.
*/
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
