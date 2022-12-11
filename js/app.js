const toogle_btn = document.querySelector(".toogle_btn");
let icon = document.querySelector(".fa-bars");
let prev = document.querySelector(".fa-angle-up");
const navbar = document.querySelector(".navbar");
const sidebar = document.querySelector(".sidebar");
const accordion = document.querySelector(".accor_btn");
const accordion2 = document.querySelector(".accor_btn2");
const accordion3 = document.querySelector(".accor_btn3");
const accordion4 = document.querySelector(".accor_btn4");
const accordion5 = document.querySelector(".accor_btn5");
const accordion6 = document.querySelector(".accor_btn6");
const accor_text = document.querySelector(".accor_text");
const accor_text2 = document.querySelector(".accor_text2");
const accor_text3 = document.querySelector(".accor_text3");
const accor_text4 = document.querySelector(".accor_text4");
const accor_text5 = document.querySelector(".accor_text5");
const accor_text6 = document.querySelector(".accor_text6");

toogle_btn.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-hidden");
  if (icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-times");
  } else {
    icon.classList.replace("fa-times", "fa-bars");
  }
});

accordion.addEventListener("click", () => {
  accor_text.classList.toggle("accor1");
  if (prev.classList.contains("fa-angle-up")) {
    prev.classList.replace("fa-angle-up", "fa-angle-down");
  } else {
    prev.classList.replace("fa-angle-down", "fa-angle-up");
  }
});
accordion2.addEventListener("click", () => {
  accor_text2.classList.toggle("accor2");
});
accordion3.addEventListener("click", () => {
  accor_text3.classList.toggle("accor3");
});
accordion4.addEventListener("click", () => {
  accor_text4.classList.toggle("accor4");
});
accordion5.addEventListener("click", () => {
  accor_text5.classList.toggle("accor5");
});
accordion6.addEventListener("click", () => {
  accor_text6.classList.toggle("accor6");
});
