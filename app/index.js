import 'whatwg-fetch';
import data from './user-info';

const name = document.querySelector('.user-name');
name.innerText = data.results[0].name.title + ' ' + data.results[0].name.first + ' ' + data.results[0].name.last;

const email = document.querySelector('.user-email');
email.innerText = data.results[0].email;

const number = document.querySelector('.user-number');
number.innerText = data.results[0].cell;

const location = document.querySelector('.user-location');
location.innerText = data.results[0].location.city + ', ' + data.results[0].location.state;

const pic = document.querySelector('.card__pic img');
pic.src = data.results[0].picture.large;
