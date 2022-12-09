import { teachers } from "./data.js";

const teacherscontainer = document.querySelector(".teacherscontainer");

let displayTeachers = function () {
  teachers.forEach((item, ind, arr) => {
    let course = `     <div class="box">
          <div class="tutor">
            <img src=${item.picture} alt=${item.name} />
            <div>
              <h3>${item.name}</h3>
              <span>${item.job}</span>
            </div>
          </div>
          <p>total playlists : <span>${item.playList}</span></p>
          <p>total videos : <span>${item.videos}</span></p>
          <p>total likes : <span>${item.likes}</span></p>
          <a href="teacher-profile.html" class="inline-btn teacherProfile-btn" id='${item.id}'>view profile</a>
        </div>`;
    teacherscontainer.insertAdjacentHTML("beforeend", course);
  });
};
displayTeachers();

let teacherProfileBtn = document.querySelectorAll(".teacherProfile-btn");
for (let i = 0; i < teacherProfileBtn.length; i++) {
  teacherProfileBtn[i].addEventListener("click", (e) => {
    e.preventDefault();

    localStorage.setItem("finalTeacher", e.target.id);

    setTimeout(() => {
      window.location.assign("teacher-profile.html");
    }, 1000);
  });
}
