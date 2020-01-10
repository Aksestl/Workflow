const calendarDayDown = document.querySelector('.calendar__day-dropdown');
const timeDrop = document.querySelector('.calendar__time');

const requestButton = document.querySelector('.request__button');
const cards = document.querySelector('.cards');


function timeDownHandler(){
  timeDrop.classList.toggle('calendar__time_open');
};

calendarDayDown.addEventListener('click', timeDownHandler);

requestButton.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo(0,document.body.scrollHeight);
});