// Quiz front page
const intro = document.querySelector(".intro");

// Button to start quiz
const findOutButton = document.querySelector("#find-out");

//Selects entire quiz div
const quiz = document.querySelector(".quiz");

// Input classes
const ruthie = document.querySelectorAll(".ruthie");
const evie = document.querySelector(".evie");
const sophie = document.querySelector(".sophie");

// Reload the quiz when "Take the quiz again!" is clicked
const ruthieReturn = document.querySelector("#ruthie-return");
ruthieReturn.addEventListener("click", function() {
  location.reload();
  });

  const evieReturn = document.querySelector("#evie-return");
evieReturn.addEventListener("click", function() {
  location.reload();
  });

  const sophieReturn = document.querySelector("#sophie-return");
sophieReturn.addEventListener("click", function() {
  location.reload();
  });

  const otherReturn = document.querySelector("#other-return");
otherReturn.addEventListener("click", function() {
  location.reload();
  });





// If the "find out" button is clicked, the quiz is started
findOutButton.addEventListener("click", function() {
  intro.classList.add("hide");
  quiz.classList.remove("hide");
});

// Result pages
const ruthieResult = document.querySelector(".ruthie-result");
const evieResult = document.querySelector(".evie-result");
const sophieResult = document.querySelector(".sophie-result");
const otherResult = document.querySelector(".other-result");

// Selects submit button
const submitButton = document.querySelector("#submit");

// Event listener when button is clicked to find out which friend you are
submitButton.addEventListener("click", function () {
  //Other result
  otherResult.classList.remove("hide");
  quiz.classList.add("hide");

  // Fruit option
  const ruthieFruit = document.querySelector("#ruthie-fruit");
  const evieFruit = document.querySelector("#evie-fruit");
  const sophieFruit = document.querySelector("#sophie-fruit");

  // Aesthetic option
  const ruthieAesthetic = document.querySelector("#ruthie-aesthetic");
  const evieAesthetic = document.querySelector("#evie-aesthetic");
  const sophieAesthetic = document.querySelector("#sophie-aesthetic");

  // Song option
  const ruthieSong = document.querySelector("#ruthie-song");
  const evieSong = document.querySelector("#evie-song");
  const sophieSong = document.querySelector("#sophie-song");

  // American Girl Doll option
  const ruthieDoll = document.querySelector("#ruthie-doll");
  const evieDoll = document.querySelector("#evie-doll");
  const sophieDoll = document.querySelector("#sophie-doll");

  //You are a Ruthie
  if (
    ruthieFruit.checked === true &&
    ruthieAesthetic.checked === true &&
    ruthieSong.checked === true &&
    ruthieDoll.checked === true
  ) {
    console.log("You are a Ruthie!");
    ruthieResult.classList.remove("hide");
    quiz.classList.add("hide");
    otherResult.classList.add("hide");
  }

  //You are an Evie
  if (
    evieFruit.checked === true &&
    evieAesthetic.checked === true &&
    evieSong.checked === true &&
    evieDoll.checked === true
  ) {
    console.log("You are an Evie!");
    evieResult.classList.remove("hide");
    quiz.classList.add("hide");
    otherResult.classList.add("hide");
  }

  //You are a Sophie
  if (
    sophieFruit.checked === true &&
    sophieAesthetic.checked === true &&
    sophieSong.checked === true &&
    sophieDoll.checked === true
  ) {
    console.log("You are a Sophie!");
    sophieResult.classList.remove("hide");
    quiz.classList.add("hide");
    otherResult.classList.add("hide");
  }
});
