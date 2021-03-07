const login = document.querySelector("a.login"); // <== points to the link.login class
const transition = document.querySelector(
  ".transition"); // <== points to the transition class
const index = document.querySelector("main"); // <== points to main.css
const rocket = document.getElementsByClassName(".rocket");

login.addEventListener('click', () => {
  index.classList.toggle('logged-in');
  new Promise(resolve => setTimeout(resolve, 1500)).then(() => {
    window.location.href = "./logged_in.html";
  });
});
transition.addEventListener('click', () => {
  index.classList.toggle('logged-in');
});

