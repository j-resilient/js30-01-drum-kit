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
  console.log(audio);
});
// left off at 7:17
