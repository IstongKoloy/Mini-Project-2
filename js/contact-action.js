const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// JavaScript validation function
function validateForm() {
  // Get form input values
  const name = document.getElementById("fName").value;
  const email = document.getElementById("emailId").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  let isValid = true;

  // Check if name is empty
  if (name === "") {
    Swal.fire({
      title: 'Name field is required.',
      icon: 'error'
    });
    isValid = false;
  }

  // Check if email is empty or not in correct format
  if (email === "" || !email.includes("@") || !email.endsWith(".com")) {
    Swal.fire({
      title: 'Please enter a valid email address.',
      icon: 'error'
    });
    isValid = false;
  }

  // Check if phone number is empty or not in correct format
  if (phone === "" || phone.length < 10 || phone.length > 12) {
    Swal.fire({
      title: 'Please enter a valid phone number (10-12 digits).',
      icon: 'error'
    });
    isValid = false;
  }

  // Check if message is empty
  if (message === "") {
    Swal.fire({
      title: 'Message field is required.',
      icon: 'error'
    });
    isValid = false;
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
  })
  .then(function(response) {
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
      timer: 3000,
    });
  });
}