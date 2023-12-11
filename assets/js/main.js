const spinner = document.getElementById('preloader');
const body = document.getElementById('main_body');

document.addEventListener('DOMContentLoaded', () => {
  spinner.style.display = "none";
  body.style.display = "block";
});

document.getElementById('wrapper_country').onclick = function () {

  var className = ' ' + wrapper_country.className + ' ';

  this.className = ~className.indexOf(' active ') ?
    className.replace(' active ', ' ') :
    this.className + ' active';
};

document.getElementById('wrapper_currency').onclick = function () {

  var className = ' ' + wrapper_currency.className + ' ';

  this.className = ~className.indexOf(' active ') ?
    className.replace(' active ', ' ') :
    this.className + ' active';
};

const filter_dropdowns = document.querySelectorAll('.filter_dropdown');

filter_dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector('.filter_select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const selected = dropdown.querySelector('.selected');

  selected.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
  });

  document.addEventListener('click', (e) => {
    if (e.target != selected && menu.classList.contains('menu-open')) {
      menu.classList.remove('menu-open');
      caret.classList.toggle('caret-rotate');
    }
  })

  options.forEach(option => {
    option.addEventListener('click', () => {
      selected.innerText = option.innerText;
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');

      options.forEach(option => {
        option.classList.remove('active_filter');
      });
      option.classList.add('active_filter');
    });
  });
});

const currency_drop = document.getElementById('wrapper_currency');
const currency_current = document.getElementById('currency_curent');
const coutry_drop = document.getElementById('wrapper_country');

document.addEventListener('click', (e) => {

  if (e.target != currency_current && currency_drop.classList.contains('active')) {
    currency_drop.classList.remove('active');
  }
  if (e.target != coutry_drop && coutry_drop.classList.contains('active')) {
    coutry_drop.classList.remove('active');
  }
});