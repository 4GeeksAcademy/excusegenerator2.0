/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });

  let generateExcuse = () => {
    let intro = [
      "Sorry I cant come",
      "Please forgive my absence",
      "This is going to sound crazy but",
      "I cant go because",
      "Get this:",
      "This is going to sound like an excuse but"
    ];
    let scapegoat = [
      "the Pope",
      "my ex",
      "Kanye West",
      "my Tinder date",
      "my fish",
      "the neighbors",
      "a sexy plomber",
      "my nextflix account"
    ];
    let delay = [
      "just shit the bed",
      "wont stop telling me knock knock jokes",
      "is having a nervous breakdown",
      "poured lemonade in my gas tank",
      "is screaming my name",
      "stole my will to live"
    ];

    let introIndex = Math.floor(Math.random() * intro.length);
    let scapegoatIndex = Math.floor(Math.random() * scapegoat.length);
    let delayIndex = Math.floor(Math.random() * delay.length);

    return (
      intro[introIndex] +
      " " +
      scapegoat[scapegoatIndex] +
      " " +
      delay[delayIndex]
    );
  };
};
