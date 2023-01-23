// Bootstrap tooltip activation
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Animate on scroll activation
AOS.init();

// When the user scrolls the page, execute myFunction
window.onscroll = function(){
    myFunction()
};
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Email Sending by Glenn Andaleon
const btnSubs = document.querySelector('#btn-sub');
// Email JS keys

btnSubs.addEventListener(
  'click',
  () => {
    const SERVICE_ID = 'service_nrijoer';
    const TEMPLATE_ID = 'template_ganvqlr';

    const to_name = document.getElementById('sub-email').value;

    const tempParams = {
      to_email: to_name,
      from_name: "GSix PMS"
    };

    // console.log(tempParams)
    if(!to_name){
      swal("Oh No!", "You forgot to enter your email!", "error");
      return false;
    }else{
      emailjs.send(SERVICE_ID, TEMPLATE_ID, tempParams)
      .then(function(response) {
        to_name.value = "";
        swal("Good job!", "Thank you for subscribing to PMS!", "success");
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        alert('Please try again!')
        console.log('FAILED...', error);
      });
    }
  }
)

// goTo Contact Page
const goToContactPage = document.querySelector('#btnContact');
goToContactPage.addEventListener(
  "click",
  () => {
    location.href="../pages/contact.html"
  }
)