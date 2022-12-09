import { courses1 } from "./data.js";
let number = localStorage.getItem("finalId");
let newcourse = courses1.find((item, ind) => item.id === +number);
let singleContainer = document.getElementById("single-course");
let singleCourseIcons = document.getElementById("singlecourse-playlist-icons");

let displayCourse = function () {
  singleContainer.innerHTML = "";

  let course = `   <div class="column">
          <form action="" method="post" class="save-playlist">
            <button type="submit">
              <i class="far fa-bookmark"></i> <span>save playlist</span>
            </button>
          </form>

          <div class="thumb">
            <img src=${newcourse.poster} alt=${newcourse.author} />
            <span>${newcourse.videos} videos</span>
          </div>
        </div>
        <div class="column">
          <div class="tutor">
            <img src=${newcourse.tutorPic} alt="" />
            <div>
              <h3>${newcourse.author}</h3>
              <span>update:${newcourse.update}</span>
            </div>
          </div>

          <div class="details">
            <h3>${newcourse.title}</h3>
            <p>
             ${newcourse.description}
            </p>
            <a href="teacher-profile.html" class="inline-btn teacher-profile-single" id='${newcourse.author}'>view profile</a>
          </div>
        </div>`;

  singleContainer.insertAdjacentHTML("beforeend", course);

  singleCourseIcons.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    let icon = `<a id="${
      i + 1
    }" class="box playlist-video-watch-link"  href="watch-video.html">
          <i class="fas fa-play"></i>
          <img src=${newcourse.poster} alt="" />
          <h3>${newcourse.title} (part ${i < 9 ? `0${i + 1}` : `${i + 1}`})</h3>
        </a>`;

    singleCourseIcons.insertAdjacentHTML("beforeend", icon);
  }
};
displayCourse();

let singleTeacher = document.querySelector(".teacher-profile-single");
console.log(singleTeacher.id);

singleTeacher.addEventListener("click", (e) => {
  e.preventDefault();

  localStorage.setItem("finalTeacher", e.target.id);
  setTimeout(() => {
    window.location.assign("teacher-profile.html");
  }, 1000);

  console.log(e.target.id);
});

let playlistVideoWatchLink = document.querySelectorAll(
  ".playlist-video-watch-link"
);
console.log(playlistVideoWatchLink);

for (let i = 0; i < playlistVideoWatchLink.length - 1; i++) {
  playlistVideoWatchLink[i].addEventListener("click", (e) => {
    e.preventDefault();

    localStorage.setItem("posterId", e.target.id);
    setTimeout(() => {
      window.location.assign("watch-video.html");
    }, 1000);
  });
}
