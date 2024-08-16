var form = document.querySelector(".hero form"); // document here is referring to the DOM (Document Object Model), .hero is the class name of the form, and form is the tag name of the form.  This tell JS to go find a form element that inside an element with the class name .hero
var input = document.querySelector("#dog-name"); // #dog-name is referring to the ID of the input field.
var headerText = document.querySelector(".hero h1 strong"); // .hero is the class name of the h1 tag, and strong is the tag name of the strong tag. So here we are referring to the strong tag inside the h1 tag which is inside the hero section.

form.addEventListener("submit", displayDogName);

function displayDogName(event) {
  event.preventDefault(); // Prevents the default behavior of the form which is refresh the page on form submission.
  var dogName = input.value;
  headerText.innerText = dogName;
}