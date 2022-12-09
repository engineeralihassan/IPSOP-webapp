import { courses1 } from "./data.js";
const head12 = document.querySelector("#corses");
let moreBtn = document.querySelector("#morecourses-btn");
let displayAll = (e) => {
  head12.innerHTML = "";

  courses1.forEach((item, ind, arr) => {
    let course = `  <div class="box" >
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
    head12.insertAdjacentHTML("beforeend", course);
  });

  moreBtn.textContent = "Show less ";
};

let displayMovements = function () {
  head12.innerHTML = "";

  courses1.forEach((item, ind, arr) => {
    if (ind < 6) {
      let course = `  <div class="box" >
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
      head12.insertAdjacentHTML("beforeend", course);
    }
  });
};
moreBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (moreBtn.textContent === "view all courses") {
    displayAll();
  } else {
    displayMovements();
    moreBtn.textContent = "view all courses";
  }
});
displayMovements();
// updat the id

let linkSelecter = document.querySelectorAll(".playList-btn");

for (let i = 0; i < linkSelecter.length - 1; i++) {
  linkSelecter[i].addEventListener("click", (e) => {
    e.preventDefault();

    localStorage.setItem("finalId", e.target.id);
    setTimeout(() => {
      window.location.assign("playlist.html");
    }, 1000);
  });
}
