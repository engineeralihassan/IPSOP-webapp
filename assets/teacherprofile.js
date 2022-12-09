import { teachers, courses1 } from "./data.js";
let num = localStorage.getItem("finalTeacher");

let newTeacher;
if (num.length === 1) {
  newTeacher = teachers.find((item, ind) => item.id === +num);
} else {
  newTeacher = teachers.find((item, ind) => item.name === num);
}

let singleTeacherContainer = document.querySelector(
  ".single-teacher-container"
);

let displaySingleTeacher = function () {
  let teacher = `     <div class="details">
        <div class="tutor">
          <img src=${newTeacher.picture} alt="" />
          <h3>${newTeacher.name}</h3>
          <span>developer</span>
        </div>
        <div class="flex">
          <p>total playlists : <span>${newTeacher.playList}</span></p>
          <p>total videos : <span>${newTeacher.videos}</span></p>
          <p>total likes : <span>${newTeacher.likes}</span></p>
          <p>total comments : <span>${newTeacher.comments}</span></p>
        </div>
      </div>`;
  singleTeacherContainer.insertAdjacentHTML("beforeend", teacher);
};
displaySingleTeacher();
let singleTeacherCourses = document.querySelector(".single-teacher-courses");

let displaySingleTeacherPlaylists = () => {
  for (let i = 0; i < newTeacher.playList; i++) {
    let randNum = Math.trunc(Math.random() * 13) + 1;

    let playlist = ` <div class="box">
          <div class="thumb">
            <img src=${courses1[randNum].poster} alt=${courses1[randNum].name} />
            <span>${courses1[randNum].videos} videos</span>
          </div>
          <h3 class="title">${courses1[randNum].title}</h3>
          <a href="courses.html" class="inline-btn">view playlist</a>
        </div>`;
    singleTeacherCourses.insertAdjacentHTML("beforeend", playlist);
  }
};
displaySingleTeacherPlaylists();
