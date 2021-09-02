"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
var elem = document.querySelector('input[name="datepicker"]');
console.log(elem);
var datepicker = new Datepicker(elem, {
  nextArrow: '>',
  prevArrow: '<',
  buttonClass: 'btn primary'
});
//# sourceMappingURL=all.js.map
