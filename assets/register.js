import { users } from "./data.js";

let previouseUsers = JSON.parse(localStorage.getItem("usersdata"));

let newregisteruserperson = document.querySelector(".person");
let newregisteruseremail = document.querySelector(".email");
let newregisteruserpassward = document.querySelector(".passward");
let newregisteruserjob = document.querySelector(".job");
let register_now_Btn = document.querySelector(".register-now-btn");
document.getElementById("img").onchange = function () {
  localStorage.setItem("selectedimg", this.value);
};

register_now_Btn.addEventListener("click", (e) => {
  e.preventDefault();
  let imgName = localStorage.getItem("selectedimg");
  let final = imgName.slice(12);

  if (
    newregisteruserperson.value !== "" &&
    newregisteruseremail.value !== "" &&
    newregisteruserpassward.value !== "" &&
    newregisteruserjob.value !== ""
  ) {
    let newuser = {
      id: Math.trunc(Math.random() * 12) + 1,
      name: newregisteruserperson.value,
      email: newregisteruseremail.value,
      job: newregisteruserjob.value,
      passward: newregisteruserpassward.value,
      avatar: `assets/images/${final}`,
      likes: 23,
    };

    let allusers = [...previouseUsers, newuser];
    localStorage.setItem("userarray", JSON.stringify(allusers));
    setTimeout(() => {
      window.location.assign("login.html");
    }, 1000);
  } else {
    alert("please fill inputs");
  }
});
