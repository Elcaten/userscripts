// ==UserScript==
// @name         Invidious Chapters
// @namespace    https://github.com/Elcaten/userscripts
// @version      0.1.0
// @description  Adds a Chapters button to Invidious videos.
// @author       Elcaten
// @match        *://*/watch*
// @downloadURL  https://raw.githubusercontent.com/Elcaten/userscripts/refs/heads/main/invidious-chapters.user.js
// @updateURL    https://raw.githubusercontent.com/Elcaten/userscripts/refs/heads/main/invidious-chapters.user.js
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const video = document.querySelector("video");
  if (!video) return;

  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "Chapters";
  button.addEventListener("click", () => alert("hello"));

  video.insertAdjacentElement("afterend", button);
})();
