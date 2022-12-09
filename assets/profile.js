let userArray = JSON.parse(localStorage.getItem("userarray"));
let current_username = localStorage.getItem("loginname");
let current_userpassward = localStorage.getItem("loginpassward");
let currentUserObject = userArray.find(
  (user) =>
    user.name === current_username && user.passward === current_userpassward
);
console.log(currentUserObject);
let profilesection = document.querySelector(".user-profile-info-section");

let profile = `<div class="user">
          <img src=${currentUserObject.avatar} alt="" />
          <h3>${currentUserObject.name}</h3>
          <p>${currentUserObject.job}</p>
          <a href="update.html" class="inline-btn">update profile</a>
        </div>`;
profilesection.insertAdjacentHTML("afterbegin", profile);
