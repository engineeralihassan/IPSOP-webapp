// All variables
import { users } from "./data.js";
let fullfinalUsers = JSON.parse(localStorage.getItem("userarray"));

let profile = document.querySelector(".profile");
let body = document.body;
let userbtn = document.querySelector("#user-btn");
let searchForm = document.querySelector(".search-form");
let searchbtn = document.querySelector("#search-btn");
let sidebar = document.querySelector(".side-bar");
let menubtn = document.querySelector("#menu-btn");
let closeBtn = document.querySelector("#close-btn");
let toggleBtn = document.querySelector("#toggle-btn");
let darkMode = localStorage.getItem("dark-mode");

userbtn.addEventListener("click", () => {
  profile.classList.toggle("active");
  searchForm.classList.remove("active");
});
window.onscroll = () => {
  profile.classList.remove("active");
};
searchbtn.addEventListener("click", () => {
  searchForm.classList.toggle("active");
  profile.classList.remove("active");
});
window.onscroll = () => {
  profile.classList.remove("active");
  searchForm.classList.remove("active");
};
menubtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  body.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  body.classList.remove("active");
});
window.onscroll = () => {
  if (window.innerWidth < 1200) {
    sidebar.classList.remove("active");
    body.classList.remove("active");
  }
};
let enableDarkMode = () => {
  toggleBtn.classList.replace("fa-sun", "fa-moon");
  body.classList.add("dark");
  localStorage.setItem("dark-mode", "enabled");
};
let disableDarkMode = () => {
  toggleBtn.classList.replace("fa-moon", "fa-sun");
  body.classList.remove("dark");
  localStorage.setItem("dark-mode", "disabled");
};
if (darkMode === "enabled") {
  enableDarkMode();
}
toggleBtn.onclick = (e) => {
  let darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
};
// Contact us whatsapp and location script
//WHATSAPP SCRIPT
(function () {
  var options = {
    whatsapp: "+923133324617",
    call_to_action: "tell us now what help you want",
    button_color: "#FF6550",
    position: "right",
    pre_filled_message:
      "Hello Welcome to Ip school of programing . let tell us your query through whatsapp our person contact you back as soon as possible ",
  };
  var proto = "https:",
    host = "getbutton.io",
    url = proto + "//static." + host;
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src = url + "/widget-send-button/js/init.js";
  s.onload = function () {
    WhWidgetSendButton.init(host, proto, options);
  };
  var x = document.getElementsByTagName("script")[0];
  x.parentNode.insertBefore(s, x);
})();
// LOCATION SCRIPT
(function () {
  var options = {
    googlemap: "https://goo.gl/maps/gTp3wqRcatKkiFq27", // Google Map url
    whatsapp: "+923133324617", // WhatsApp number
    call_to_action: "Contact us", // Call to action
    button_color: "#FF6550", // Color of button
    position: "right", // Position may be 'right' or 'left'
    order: "googlemap,whatsapp", // Order of buttons
    pre_filled_message:
      "Hello Welcome to IP-school of programing . Message us on whatsapp for all your queries . we reply you back as soon as possible and solve your query according to programing", // WhatsApp pre-filled message
  };
  var proto = "https:",
    host = "getbutton.io",
    url = proto + "//static." + host;
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src = url + "/widget-send-button/js/init.js";
  s.onload = function () {
    WhWidgetSendButton.init(host, proto, options);
  };
  var x = document.getElementsByTagName("script")[0];
  x.parentNode.insertBefore(s, x);
})();
// login user functonality

let current_username = localStorage.getItem("loginname");
let current_userpassward = localStorage.getItem("loginpassward");

let currentUserDetailsContainer = document.querySelectorAll(
  ".current-user-acount-details"
);
let currentUserObject = fullfinalUsers.find(
  (user) =>
    user.name === current_username && user.passward === current_userpassward
);

if (currentUserObject) {
  currentUserDetailsContainer.forEach((item, ind) => {
    let logindiv = `<img src=${currentUserObject.avatar} class="image" alt="" />
        <h3 class="name">${currentUserObject.name}</h3>
        <p class="role">${currentUserObject.job}</p>
        <a href="profile.html" class="btn">view profile</a>
  `;
    item.insertAdjacentHTML("afterbegin", logindiv);
  });
}
