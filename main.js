// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const likeButtons = document.querySelectorAll(".like-glyph");

for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener("click", activateLikes, false);
}

function activateLikes(event) {

  mimicServerCall()
    .then(() => {
      if (event.target.innerText == FULL_HEART) {
        event.target.innerText = EMPTY_HEART;
        event.target.classList.remove("activated-heart");
      } else {
        event.target.innerText = FULL_HEART;
        event.target.classList.add("activated-heart");
      }
    })
    .catch((error) => {
      document.querySelector("#modal").classList.remove("hidden");
      document.querySelector("#modal-message").textContent = error.message;
      setTimeout(addHidden(), 3000);
    });

  function addHidden() {
    const errorMessage = document.querySelector("#modal");
    errorMessage.classList.add("hidden");
  }
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
