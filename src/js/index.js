/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";
import { COPYFILE_FICLONE_FORCE } from "constants";

function getRandom(aLength) {
  return Math.floor(Math.random() * (aLength - 0));
}

window.onload = function() {
  //exuses
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  //excused end

  let element = document.querySelector("#excuse");
  element.innerHTML =
    who[getRandom(who.length)] +
    " " +
    what[getRandom(what.length)] +
    " " +
    when[getRandom(when.length)];
};
