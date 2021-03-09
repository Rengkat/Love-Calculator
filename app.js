"use strict";
const firstNameInput = document.querySelector("#firstName"),
  secondNameInput = document.querySelector("#secondName"),
  firstNameOutput = document.querySelector("#firstOutput"),
  secondNameOutput = document.querySelector("#secondOutput"),
  percentage = document.querySelector(".and"),
  conclusionQuotes = document.querySelector(".conclusion"),
  checkBtn = document.querySelector(".btn2");

//on clicking
checkBtn.addEventListener("click", () => {
  if (firstNameInput.value === "" || secondNameInput.value === "") {
    //error message
    err(firstNameInput, secondNameInput);
  } else {
    const cal = result(firstNameInput.value, secondNameInput.value);
    selection(cal);
    hidden();
  }
});
function result(firstName, secondName) {
  let firstNameArray = [...firstName.toLocaleLowerCase()];
  let secondNameArray = [...secondName.toLocaleLowerCase()];
  var final = firstNameArray.filter(function (item) {
    return !secondNameArray.includes(item.split(".")[0]);
  });

  return final.length;
}
function err(field, field2) {
  field.style.backgroundColor = "red";
  field.style.border = "1px solid white";
  field2.style.backgroundColor = "red";
  field2.style.border = "1px solid white";
  // setTimeout(() => {
  //   err.remove();
  // }, 2000);
}
function selection(value) {
  const F = [1, 7, 13, 19, 25],
    L = [2, 8, 14, 20, 26],
    A = [3, 9, 15, 21, 27],
    M = [4, 10, 16, 22, 28],
    E = [5, 11, 17, 23, 29],
    S = [6, 12, 18, 24, 30];
  if (F.includes(value)) {
    print();
    percentage.innerHTML = "80%<br>Friends";
    conclusionQuotes.textContent =
      '"You are and always have been worthy of love, care, trust and respect."';
  } else if (L.includes(value)) {
    percentage.innerHTML = "99%<br>Lovers";
    print();
    conclusionQuotes.textContent =
      "We're never so vulnerable than when we trust someone - but paradoxically, if we cannot trust, neither can we find love or joy.";
  } else if (A.includes(value)) {
    percentage.innerHTML = "75%<br>Admirers";
    conclusionQuotes.textContent =
      "“There ain’t no way you can hold onto something that wants to go, you understand? You can only love what you got while you got it.”";
    print();
  } else if (M.includes(value)) {
    percentage.innerHTML = "100%<br>Married";
    conclusionQuotes.textContent =
      "A happy marriage needs trust, commitment, honesty, perseverance, passion, and lots of hard work. Always keep love in your marriage... and hugs and kisses too!";
    print();
  } else if (E.includes(value)) {
    percentage.innerHTML = "60%<br>Mates";
    print();
    conclusionQuotes.textContent =
      "Never trust anyone completely but God. Love people, but put your full trust only in God";
  } else if (S.includes(value)) {
    percentage.innerHTML = "100%<br>Siblings";
    print();
    conclusionQuotes.textContent =
      "“The truth is, unless you let go, unless you forgive yourself, unless you forgive the situation, unless you realize that the situation is over, you cannot move forward.”";
  }
}

function hidden() {
  document.querySelector(".container h1").style.display = "none";
  document.querySelector(".input").style.display = "none";
  document.querySelector(".btn2").style.display = "none";
  document.querySelector(".btn").style.display = "none";
  document.querySelector(".output").style.display = "block";
  document.querySelector(".conclusion").style.display = "block";
}

function print() {
  firstNameOutput.textContent = firstNameInput.value.toUpperCase();
  secondNameOutput.textContent = secondNameInput.value.toUpperCase();
}
percentage.addEventListener("click", () => {
  window.location.reload();
  document.querySelector(".and").style.backgroundColor = "rgb(197, 54, 102)";
});
