import { users } from "./data.js";

let userFinalarray = localStorage.getItem("userarray");
let finalUsers = JSON.parse(userFinalarray);

localStorage.setItem("usersdata", JSON.stringify(finalUsers));

let login_Now_Form_Btn = document.querySelector(".login-form-submit-btn");
let loginForm_name = document.querySelector("#login-email");
let loginForm_passward = document.querySelector("#login-passward");
login_Now_Form_Btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (loginForm_name.value !== "" && loginForm_passward.value !== "") {
    localStorage.setItem("loginname", loginForm_name.value);
    localStorage.setItem("loginpassward", loginForm_passward.value);
    let currentLoginUser = finalUsers.find(
      (user) =>
        user.name === loginForm_name.value &&
        user.passward === loginForm_passward.value
    );
    console.log(currentLoginUser);
    if (currentLoginUser) {
      setTimeout(() => {
        window.location.assign("index.html");
      }, 1000);
    }
    if (!currentLoginUser) {
      setTimeout(() => {
        let askregister = confirm(
          "you are  not registered !please registered youreself "
        );
        if (askregister) {
          window.location.assign("register.html");
        } else {
          window.location.assign("login.html");
        }
      }, 1000);
    }
  }
});
// let allusers = [...users, newuser];
// localStorage.setItem("userarray", JSON.stringify(allusers));
// let allarr = localStorage.getItem("userarray");
// var movies2 = JSON.parse(allarr);

// console.log(movies2);
