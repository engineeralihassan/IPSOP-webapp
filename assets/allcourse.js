import { courses1, strikeRate } from "./data.js";

const myElement = document.querySelector(".allcourse");

let displayAllCourse = function () {
  myElement.innerHTML = "";
  courses1.forEach((item, ind, arr) => {
    let ht = `  <div class="box">
            <div class="tutor">
              <img src=${item.tutorPic} alt=${item.author} />
              <div class="info">
                <h3>${item.author}</h3>
                <span> update:${item.update}</span>
              </div>
            </div>
            <div class="thumb">
              <img src=${item.poster} alt="" />
              <span>${item.videos} videos</span>
            </div>
            <h3 class="title">${item.title}</h3>
            <a href="playlist.html" class="inline-btn playList-btn" id='${ind}'>view playlist</a>
          </div>`;
    myElement.insertAdjacentHTML("beforeend", ht);
  });
};
displayAllCourse();
// ALL BTN FUNCTIONALITY
let linkSelecter = document.querySelectorAll(".playList-btn");

for (let i = 0; i < linkSelecter.length; i++) {
  linkSelecter[i].addEventListener("click", (e) => {
    e.preventDefault();

    localStorage.setItem("finalId", e.target.id);
    setTimeout(() => {
      window.location.assign("playlist.html");
    }, 1000);
  });
}
