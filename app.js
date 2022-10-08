const formInput = document.getElementById("comment");
const submitBtn = document.getElementById("submitBtn");
const commentInput = document.getElementById("comment");
const charCounter = document.getElementById("charCounter");
const userFirstName = document.getElementById("firstName");
const userLastName = document.getElementById("lastName");
const userEmail = document.getElementById("email");

const parentRepliesDiv = document.querySelector("#comment-chain");

commentInput.addEventListener("keydown", keydowntest);

function keydowntest() {
  charCounter.innerHTML = `${commentInput.value.length} / 140`;
  if (commentInput.value.length === 140) charCounter.style.color = "red";
}

submitBtn.addEventListener("click", appendReplies);

function appendReplies() {
  function userComment() {
    const commentContainer = document
      .createElement("div")
      .classList.add("comment-userName");
    commentContainer.classList.add("comment-container");

    const displayFullName = document.createElement("span");
    displayFullName.innerText = formatDisplayName(
      userFirstName.value,
      userLastName.value
    );

    function formatDisplayName(firstName, lastName) {
      const displayFirstName = tidyName(firstName);
      const displaySecondName = tidyName(lastName);

      function tidyName(name) {
        const lowerCaseName = name.trim().toLowerCase().substring(0).slice(1);
        const upperCaseFirstLetter = name[0].toUpperCase();
        const tidiedName = upperCaseFirstLetter.concat(lowerCaseName);
        return tidiedName;
      }

      return `${displayFirstName} ${displaySecondName}`;
    }

    const commentText = document
      .createElement("p")
      .classList.add("comment-text");
    commentText.innerHTML = commentInput.value;

    // check Comment Box criteria - need to use string methods, array and array methods - use on name and date, prevent default
    // create template in css with class names
    commentContainer.appendChild(displayFullName);

    commentContainer.appendChild(commentText);

    return commentContainer;
  }

  parentRepliesDiv.appendChild(userComment());
}
