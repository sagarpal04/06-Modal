'use strict';
const button = document.querySelectorAll('.show-modal');
const toggleEvent = function () {
  document.querySelector('.modal').classList.toggle('hidden');
  document.querySelector('.overlay').classList.toggle('hidden');
};
const clickEvent = function () {
  toggleEvent();
};
for (let i = 0; i < button.length; i += 1) {
  button[i].addEventListener('click', clickEvent);
}
document.querySelector('.close-modal').addEventListener('click', function () {
  toggleEvent();
});
document.querySelector('.overlay').addEventListener('click', toggleEvent);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    toggleEvent();
  }
});
