const inputEl = document.querySelector("#inputEl");
const buttonEl = document.querySelector("#buttonEl");
const outputEl = document.querySelector("#outputEl");

// someone clicks the button
buttonEl.onclick = function () {
  const inputText = inputEl.value;
  console.log("user typed: ", inputText);

  // make HTTP request
  fetch(
    "https://api.mymemory.translated.net/get?q=" + inputText + "&langpair=en|de"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.responseData.translatedText);
      outputEl.value = data.responseData.translatedText;
    });
};
