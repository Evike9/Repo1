// declare Elements

const button = document.getElementById("button1"); //getting the elements
const input = document.getElementById("input");
const paragraph = document.getElementById("paragraph");
const paragraph2 = document.getElementById("paragraph2");
const number = document.getElementById("number");

// console.log(button, input, paragraph); // test the result of elements - log is optional

// declare business logic

function action() {
  // console.log(input.value); //testing the log of the input to check the value
  paragraph.textContent += " " + input.value; //
  // input.value = "";
  input.focus();
}

function action2(evt) {
    // console.log(evt.target.value === number.value);
    paragraph2.textContent += " " + number.value;
}

// kicstart the app with event listneners + event handlers

button.onclick = action; // => is the shortcut to add an addEventListener w call-back on the function
//(the function returns undefined as there is no return w this function
//button.addEventListener("click", action)

// number.onchange = action2;
number.addEventListener("change", action2);


