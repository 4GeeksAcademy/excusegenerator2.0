/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });

  console.log("Excuses excuses and more excuses!");
};

let generateExcuse = () => {
  let who = ["A shark", "A thief", "My dog", "A cat", "A comedian", "A Karen"];
  let what = [
    " bit my ",
    " ate my ",
    " threw my ",
    " hit my ",
    " stole my ",
    " crashed my ",
    " broke my "
  ];
  let which = [
    "car ",
    "leg ",
    "homework ",
    "laptop ",
    "spirit ",
    "will to live "
  ];
  let when = [
    "last night.",
    "yesterday.",
    "last week.",
    "5 minutes ago.",
    "last Friday.",
    "just now."
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whichIndex = Math.floor(Math.random() * which.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    "" +
    what[whatIndex] +
    "" +
    which[whichIndex] +
    "" +
    when[whenIndex]
  );
};
