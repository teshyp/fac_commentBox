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
  console.log("appendReplies function working");

  // 1. Create responseDiv
  // 2. create h2 for name - append to responseDiv
  //3. create p for response change - append to responseDiv
  // 3.1 change innertext of h2 to fullName
  // 3.2 change innertext of p to response
  //4. Create span for date/time
  //5. add option to delete
  //4. append responseDiv to parent Node

  parentRepliesDiv.appendChild();
}
