// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeHeartCollection = document.getElementsByClassName('like-glyph');
const modalElement = document.getElementById('modal');

function init() {
  for (eachHeart of likeHeartCollection) {
    addClickInteraction(eachHeart);
  }
}
init();

function addClickInteraction(htmlElement) {
  htmlElement.addEventListener('click', e => {
    mimicServerCall()
      .then((res) => {
        changeHeart(e.target);
      })
      .catch((error) => {
        console.log(error);
        showErrorMessage(error);
      })

  })
}

function changeHeart(heart) {
  if (heart.textContent === EMPTY_HEART) {
    heart.textContent = FULL_HEART
    heart.classList.add('activated-heart')
  }
  else if (heart.textContent === FULL_HEART) {
    heart.textContent = EMPTY_HEART;
    heart.classList.remove('activated-heart');
  }
}

function showErrorMessage(error) {
  modalElement.classList.remove('hidden')
  document.getElementById('modal-message').innerText = error;
  setTimeout(() => modalElement.classList.add('hidden'), 3000);
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
