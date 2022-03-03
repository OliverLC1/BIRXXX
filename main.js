var backdrop = document.querySelector(".backdrop");
var modalBtn = document.querySelector(".modalbtn");
var modal = document.querySelector(".modal");
var modalAction =document.querySelector(".modal__action");
var modalActionNegative = document.querySelector(".modal__action--negative");
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');


toggleButton.addEventListener('click', function() {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';

});
backdrop.addEventListener("click", function() {
    mobileNav.style.display = 'none';
    backdrop.style.display = 'none';

});
modalBtn.addEventListener("click", function() {
    modal.style.display = "block";
    backdrop.style.display = "block";


});
modalActionNegative.addEventListener("click", closeModal);

modalAction.addEventListener("click", closeModal);

function closeModal() {
    modal.style.display = "none";
    backdrop.style.display = "none";
}