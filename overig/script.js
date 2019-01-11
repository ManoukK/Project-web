/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


console.log('hoi');

//var button = document.querySelector('button');

//button.addEventListener('click', function() {
//  document.body.classList.toggle('laad');
//});



var section = document.querySelector('#choose-device');
var button = document.querySelector('#choose-device button:first-of-type');


button.addEventListener ('click', function() {
    section.classList.toggle('laad');
});
