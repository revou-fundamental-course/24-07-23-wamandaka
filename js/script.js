// VALIDATION
const name = document.forms["formContact"]["name"];
const email = document.forms["formContact"]["email"];
const validateForm = () => {
  if (name.value == "") {
    alert("Name is required");
    document.forms["formContact"]["name"].focus();
    return false;
  }
  if (email.value == "") {
    alert("email is required");
    document.forms["formContact"]["email"].focus();
    return false;
  }
};

// SLIDER
let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
