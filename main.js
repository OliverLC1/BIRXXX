let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let modalAction =document.querySelector(".modal__action");
let modalBtn = document.querySelector(".modalbtn");
let modalActionNegative = document.querySelector(".modal__action--negative");
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');


toggleButton.addEventListener('click', function() {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
    toggleButton.style.display = 'none';

});
backdrop.addEventListener("click", function() {
    mobileNav.style.display = 'none';
    backdrop.style.display = 'none';
    toggleButton.style.display = 'block';
   

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