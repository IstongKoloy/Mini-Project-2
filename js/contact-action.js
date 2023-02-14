const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// JavaScript validation function
function validateForm() {
  // Get form input values
  const name = document.getElementById("fName");
  const email = document.getElementById("emailId");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");

  let isValid = true;

  // Check if name is empty
  if (name.value === "") {
    name.style.borderColor = "red";
    isValid = false;
  } else {
    name.style.borderColor = "";
  }

  // Check if email is empty or not in correct format
  if (email.value === "" || !email.value.includes("@")) {
    email.style.borderColor = "red";
    isValid = false;
  } else {
    email.style.borderColor = "";
  }

  // Check if phone number is empty or not in correct format
  if (phone.value === "" || phone.value.length < 10 || phone.value.length > 12) {
    phone.style.borderColor = "red";
    isValid = false;
  } else {
    phone.style.borderColor = "";
  }

  // Check if message is empty
  if (message.value === "") {
    message.style.borderColor = "red";
    isValid = false;
  } else {
    message.style.borderColor = "";
  }

  if (isValid) {
    // If all validation checks pass, submit the form
    sendForm();
  }

  return isValid;
}

// Submit form function
function sendForm() {
  emailjs.send("service_hpk14cj", "template_n92yw9k", {
    "from_fName": document.getElementById('fName').value,
    "from_emailId": document.getElementById('emailId').value,
    "phone": document.getElementById('phone').value,
    "message": document.getElementById('message').value
  }).then(function(response) {
    // Show success alert
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your message has been sent. We will get back to you soon.',
      showConfirmButton: false,
      timer: 1500
    });
    document.getElementById("contact-form").reset();
  }, function(error) {
    // Show error toast
    Swal.fire({
      icon: 'error',
      title: 'Oops! Something went wrong. Please try again later.',
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });
  });
}
