const txt = document.getElementById("text");
const btn = document.getElementById("btn");
const input = document.getElementById("input");

let captcha = "";

const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const combined = numbers.concat(upperCaseLetters, lowerCaseLetters);

function random() {
  return combined[Math.floor(Math.random() * combined.length)];
}

function forCaptcha() {
  for (let i = 0; i < 6; i++) {
    captcha += random();
  }

  txt.innerText = captcha;
}

forCaptcha();

input.addEventListener("input", function () {
  if (input.value == captcha) {
    input.style.outlineColor = "green";
  } else {
    input.style.outlineColor = "red";
  }
});
