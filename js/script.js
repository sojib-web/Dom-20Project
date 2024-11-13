// @ts-nocheck
const bodyEl = document.getElementById("body");
const liButton = document.querySelectorAll("li");

console.log(liButton);

// const redColor = document.querySelector(".red");
// redColor.addEventListener("click", () => {
//   bodyEl.style.backgroundColor = "red";
// });

// const greenColor = document.querySelector(".green");
// greenColor.addEventListener("click", () => {
//   bodyEl.style.backgroundColor = "green";
// });

// const blueColor = document.querySelector(".blue");
// blueColor.addEventListener("click", () => {
//   bodyEl.style.backgroundColor = "blue";
// });

// const pinkColor = document.querySelector(".pink");
// pinkColor.addEventListener("click", () => {
//   bodyEl.style.backgroundColor = "pink";
// });

// const orangeColor = document.querySelector(".orange");
// orangeColor.addEventListener("click", () => {
//   bodyEl.style.backgroundColor = "orange";
// });

// liButton.forEach(function (value) {
//   value.addEventListener("click", () => {
//     const clssName = value.classList.value;
//     console.log(clssName);
//     bodyEl.style.backgroundColor = clssName;
//   });
// });

liButton.forEach(function (value) {
  value.addEventListener("click", () => {
    const clssName = value.classList.value;
    //   console.log(clssName);
    let colors = "";
    if (clssName === "red") {
      colors = "#ff7675";
    }

    if (clssName === "green") {
      colors = "#55efc4";
    }

    if (clssName === "blue") {
      colors = "#74b9ff";
    }

    if (clssName === "pink") {
      colors = "#fd79a8";
    }

    if (clssName === "orange") {
      colors = "#a29bfe";
    }
    bodyEl.style.backgroundColor = colors;
    // console.log(colors);
  });
});
