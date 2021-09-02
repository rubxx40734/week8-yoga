$(function() {
  console.log('Hello Bootstrap5');
});
const elem = document.querySelector('input[name="datepicker"]');
console.log(elem);
const datepicker = new Datepicker(elem, {
    nextArrow: '>',
    prevArrow: '<',
    buttonClass: 'btn primary',
});



