const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const nameError = document.querySelector(".name-error-message");
const emailError = document.querySelector(".email-error-message");
const phoneError = document.querySelector(".phone-error-message");

const produsInput = document.querySelector("#sedinta-produs");
const portretInput = document.querySelector("#sedinta-portret");
const animaleInput = document.querySelector("#sedinta-animale");

var textareaInput = document.getElementsByTagName("textarea")[0];

let contactForm = document.getElementById("contactForm");

nameInput.addEventListener("change", function (event) {
  const value = event.target.value;
  if (value.length > 5) {
    nameError.innerHTML = "";
  } else {
    nameError.innerHTML = "Numele trebuie să conțină cel puțin 5 caractere.";
  }
});

emailInput.addEventListener("change", function (event) {
  const value = event.target.value;
  if (
    value.includes("@yahoo.com") ||
    value.includes("@gmail.com") ||
    value.includes("@outlook.com")
  ) {
    emailError.innerHTML = "";
  } else {
    emailError.innerHTML = "Te rog să introduci o adresă validă.";
  }
});

phoneInput.addEventListener("input", function (event) {
  const value = event.target.value;
  if (isNaN(value)) {
    phoneError.innerHTML = "Te rog să introduci doar caractere numerice.";
  } else {
    phoneError.innerHTML = "";
  }
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(nameInput.value);
  console.log(phoneInput.value);
  console.log(emailInput.value);
  console.log(textareaInput.value);

  if (produsInput.checked == true) {
    console.log(produsInput.value);
  } else if (portretInput.checked == true) {
    console.log(portretInput.value);
  } else if (animaleInput.checked == true) {
    console.log(animaleInput.value);
  }

  document.getElementById("hiddenMessage").style.display = "block";
  document.getElementById("contactForm").style.display = "none";
});

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
