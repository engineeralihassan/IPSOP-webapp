import { courses1 } from "./data.js";
let numberId = localStorage.getItem("finalId");
let videoI = localStorage.getItem("posterId");
console.log(videoI);

let videoContainer = document.querySelector(".course-video-container");
let newObj = courses1[numberId];
console.log(newObj);

let displayVideo = () => {
  let video = ` <div class="video">
          <video
            src=${newObj.playlist_video}
            controls
            poster='${
              videoI < 6
                ? `assets/images/post-1-${videoI}.png`
                : "assets/images/post-1-6.png"
            }'
            id="video"
          ></video>
        </div>
         <h3 class="title">${newObj.title} (part ${videoI} )</h3>
        <div class="info">
          <p class="date">
            <i class="fas fa-calendar"></i><span>update:${newObj.update}</span>
          </p>
          <p class="date"><i class="fas fa-heart"></i><span>44 likes</span></p>
        </div>
        <div class="tutor">
          <img src=${newObj.tutorPic} alt="" />
          <div>
            <h3>${newObj.author}</h3>
            <span>${newObj.job}</span>
          </div>
        </div>
        <form action="" method="post" class="flex">
          <a href="teachers.html" class="inline-btn">view profile</a>
          <button><i class="far fa-heart"></i><span>like</span></button>
        </form>
        <p class="description">
          ${newObj.description}
        </p>
        
        
        `;
  videoContainer.insertAdjacentHTML("afterbegin", video);
};
displayVideo();

let comentsContainer = document.querySelector(".user-comments-container");
let displayComments = () => {
  newObj.comments.forEach((coment, ind) => {
    let cus_comment = ` <div class="box">
          <div class="user">
            <img src=${coment.avatar} alt=${coment.name} />
            <div>
              <h3>${coment.name}</h3>
              <span>${coment.dat}</span>
            </div>
          </div>
          <div class="comment-box">${coment.msg}</div>
         
        </div>`;
    comentsContainer.insertAdjacentHTML("afterbegin", cus_comment);
  });
};
displayComments();
