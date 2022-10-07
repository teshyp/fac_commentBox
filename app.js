const formInput = document.getElementById("comment");

const submitBtn = document.getElementById("submitBtn");

const commentInput = document.getElementById("comment");

const charCounter = document.getElementById("charCounter");

commentInput.addEventListener("keydown", keydowntest);

function keydowntest() {
  charCounter.innerHTML = `${commentInput.value.length} / 140`;
  if (commentInput.value.length === 140) charCounter.style.color = "red";
}

submitBtn.addEventListener("click", test);

function test() {
  console.log(commentInput.value.length);
  if (commentInput.value.length > 140) {
    console.log("Over");
  }
}
