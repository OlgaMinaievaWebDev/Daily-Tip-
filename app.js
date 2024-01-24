document.getElementById("fetch").addEventListener("click", getQuote);

function getQuote() {
  fetch("	https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("message").textContent = data.slip.advice;
    });
}
