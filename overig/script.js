/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


console.log('hoi');

//var button = document.querySelector('button');

//button.addEventListener('click', function() {
//  document.body.classList.toggle('laad');
//});



var sectionz = document.querySelector('#choose-device');
var buttonz = document.querySelector('#choose-device button:first-of-type');


buttonz.addEventListener ('click', function() {
    sectionz.classList.toggle('laad');
});



var sectionx = document.querySelector('.popup-none');
var buttonx = document.querySelector('.popup-none button:first-of-type');


buttonx.addEventListener('click', function() {
    sectionx.classList.toggle('popup');
});


