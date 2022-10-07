const formInput = document.getElementById("comment");
const submitBtn = document.getElementById("submitBtn");
const commentInput = document.getElementById("comment");
const charCounter = document.getElementById("charCounter");
const userName = document.getElementById("fullName");
const userEmail = document.getElementById("email");

const parentRepliesDiv = document.querySelector("#comment-chain");

console.log(typeof parentRepliesDiv);

commentInput.addEventListener("keydown", keydowntest);

function keydowntest() {
  charCounter.innerHTML = `${commentInput.value.length} / 140`;
  if (commentInput.value.length === 140) charCounter.style.color = "red";
}

submitBtn.addEventListener("click", appendReplies);

function appendReplies() {
  function createUserResponse() {
    const displayUserName = document.createElement("h3");
    displayUserName.innerText = userName.value;
    return displayUserName;
  }
  // create h2 for name
  // creae box comment
  // append to replies container

  parentRepliesDiv.appendChild(createUserResponse());

  console.log("Working");
}
