const formInput = document.getElementById("comment");
const submitBtn = document.getElementById("submitBtn");
const commentInput = document.getElementById("comment");
const charCounter = document.getElementById("charCounter");
const userFirstName = document.getElementById("firstName");
const userLastName = document.getElementById("lastName");
const userEmail = document.getElementById("email");
const commentChain = document.querySelector("#comment-chain");
const allComments = document.getElementsByClassName("comment-container");

commentInput.addEventListener("keydown", commentCharCounter);

// Character counter and styling
function commentCharCounter() {
  charCounter.innerHTML = `${commentInput.value.length} / 140 - Character limit`;
  commentInput.value.length === 140
    ? (charCounter.style.color = "red")
    : (charCounter.style.color = "white");
}

submitBtn.addEventListener("click", appendReplies);

function appendReplies() {
  function userComment() {
    // Create user comment components and update content
    const commentContainer = document.createElement("div");
    commentContainer.classList.add("comment-container");
    // commentContainer.dataset.commentPosition = `${allComments.length}`;
    console.log(allComments);

    const displayFullName = document.createElement("span");
    displayFullName.innerText = formatDisplayName(
      userFirstName.value,
      userLastName.value
    );
    displayFullName.classList.add("comment-userName");

    // Tidy entered user name
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

    // Create Display Name component and update with tidied name
    const commentText = document.createElement("p");
    commentText.innerHTML = commentInput.value;
    commentText.classList.add("comment-text");

    // Update UI with name and text
    commentContainer.appendChild(displayFullName);
    commentContainer.appendChild(commentText);

    return commentContainer;
  }

  // Append new comment to most recent comment
  commentChain.appendChild(userComment());

  console.log(allComments.length);
  return allComments.length;
}

// Reorganise comments by most recent

function orderCommentsByDate(comments) {
  // get number of comments
  // sort data-attributes
}
