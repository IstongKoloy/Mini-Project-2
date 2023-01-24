const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// JavaScript validation function
function validateForm() {
  // Get form input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // Check if name is empty
  if (name === "") {
    alert("Name field is required.");
    return false;
  }

  // Check if email is empty or not in correct format
  if (email === "" || !email.includes("@")) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Check if phone number is empty or not in correct format
  if (phone === "" || phone.length < 10 || phone.length > 12) {
    alert("Please enter a valid phone number (10-12 digits).");
    return false;
  }

  // Check if message is empty
  if (message === "") {
    alert("Message field is required.");
    return false;
  }

  // If all validation checks pass, submit the form
  sendForm();
  return true;
}

// Submit form function
function sendForm() {
  emailjs.send("service_hpk14cj", "template_n92yw9k", 
    {name:name,email:email,phone:phone,message:message})
  .then(function(response) {
    alert("Thank you for your message! We'll get back to you soon.");
    document.getElementById("contact-form").reset();
  }, function(error) {
    alert("Oops! Something went wrong. Please try again later.");
  });
}

let submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  if (validateForm()) {
    sendForm();
  }
});
