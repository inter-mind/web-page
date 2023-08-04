import anime from "./anime-master/lib/anime.es.js";
let y = 0;
const insta = document.getElementById("instagram-link");
const email = document.getElementById("email-link");
const x = document.getElementById("twitter-link");

insta.addEventListener("mouseenter", () => {
  anime({
    targets: "#insta",
    width: "130px",
    padding: "5px",
    color: "#000000",

    duration: 1000,
  });
});

insta.addEventListener("mouseleave", () => {
  anime({
    targets: "#insta",
    width: "0",
    padding: "0",

    color: "rgba(255, 255, 255, 0)  ",
    easing: "easeInOutExpo",
  });
});

email.addEventListener("mouseenter", () => {
  anime({
    targets: "#email",
    width: "180px",
    padding: "5px",
    color: "#000000",

    duration: 1000,
  });
});

email.addEventListener("mouseleave", () => {
  anime({
    targets: "#email",
    width: "0",
    padding: "0",

    color: "rgba(255, 255, 255, 0)  ",
    easing: "easeInOutExpo",
  });
});

x.addEventListener("mouseover", () => {
  anime({
    targets: "#x",
    width: "130px",
    padding: "5px",
    color: "#000000",

    duration: 1000,
  });
});

x.addEventListener("mouseout", () => {
  anime({
    targets: "#x",
    width: "0px",
    padding: "0px",
    color: "rgba(255, 255, 255, 0)  ",

    easing: "easeInOutExpo",
  });
});

const obt = document.querySelector("#obt");
const dlj = document.querySelector("#dlj");

obt.addEventListener("mouseenter", (e) => {
  anime({
    targets: e.target,
    scale: 1.2,
  });
});

obt.addEventListener("mouseleave", (e) => {
  anime({
    targets: e.target,
    scale: 1,
  });
});

dlj.addEventListener("mouseenter", (e) => {
  anime({
    targets: e.target,
    scale: 1.2,
  });
});

dlj.addEventListener("mouseleave", (e) => {
  anime({
    targets: e.target,
    scale: 1,
  });
});
