import anime from "./anime-master/lib/anime.es.js";

const insta = document.getElementById("instagram");
const email = document.getElementById("at");
const x = document.getElementById("twitter");

insta.addEventListener("mouseenter", () => {
  anime({
    targets: "#insta",
    width: "130px",
    padding: "10px",
    color: "black",

    duration: 1000,
  });
});

insta.addEventListener("mouseleave", () => {
  anime({
    targets: "#insta",
    width: "0",
    padding: "0",

    color: "none",
    duration: 300,
    easing: "easeInOutExpo",
  });
});

email.addEventListener("mouseenter", () => {
  anime({
    targets: "#email",
    width: "130px",
    padding: "10px",
    color: "black",

    duration: 1000,
  });
});

email.addEventListener("mouseleave", () => {
  anime({
    targets: "#email",
    width: "0",
    padding: "0",

    color: "none",
    duration: 300,
    easing: "easeInOutExpo",
  });
});

x.addEventListener("mouseenter", () => {
  anime({
    targets: "#x",
    width: "130px",
    padding: "10px",
    color: "black",

    duration: 1000,
  });
});

x.addEventListener("mouseleave", () => {
  anime({
    targets: "#x",
    width: "0",
    padding: "0",

    color: "none",
    duration: 300,
    easing: "easeInOutExpo",
  });
});
