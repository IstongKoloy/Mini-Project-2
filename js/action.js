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
    const email_regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const tempParams = {
      to_email: to_name,
      from_name: "GSix PMS"
    };

    // console.log(tempParams)
    if(!to_name){
      // swal("Oh No!", "You forgot to enter your email!", "error");
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You forgot to enter your email!'
      })
      return false;
    }else if(!email_regEx.test(to_name)){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have entered an incorrect email address format!'
      })
      return false;
    }else{
      emailjs.send(SERVICE_ID, TEMPLATE_ID, tempParams)
      .then(function(response) {
        // swal("Good job!", "Thank you for subscribing to PMS!", "success");
          document.getElementById('sub-email').value = "";
          Swal.fire({
            icon: 'success',
            title: 'Thank you for subscribing to PMS!',
            showConfirmButton: false,
            timer: 1500
          })
          
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        // swal("Oh No!", "Problem occured, Please try again!", "error");
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Please try again!</a>'
        })
        // alert('Please try again!')
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

// login events

const loginBtn = document.querySelector('#login');

loginBtn.addEventListener(
  "click", () => {
    Swal.fire({
      title: 'Login Form',
      html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
      <input type="password" id="password" class="swal2-input" placeholder="Password">`,
      confirmButtonText: 'Sign in',
      footer: "<p>Not yet registered? <a id='registerBtn'>Sign Up</a></p>",
      focusConfirm: false,
      allowOutsideClick: false,
      preConfirm: () => {
        const login = Swal.getPopup().querySelector('#login').value
        const password = Swal.getPopup().querySelector('#password').value

        const userValue = "admin";
        const userPass = "admin";

        if (!login || !password) {
          Swal.showValidationMessage(`Please enter login and password`)
        }else if(login != userValue || password != userPass){
          Swal.showValidationMessage(`User account not found!`)
        }
        return { login: login, password: password }
      }
    }).then((result) => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
    })    
  }
)
/*
const signUpBtn = document.querySelector('#registerBtn');
signUpBtn.addEventListener(
  "click", () => {
    Swal.fire({
      title: 'Registration Form',
      html: 
          `<input type="text" id="reg-fName" class="swal2-input" placeholder="First Name">
          <input type="text" id="reg-lName" class="swal2-input" placeholder="Last Name">
          <input type="text" id="reg-email" class="swal2-input" placeholder="Email">
          <input type="password" id="reg-password" class="swal2-input" placeholder="Password">
          <input type="password" id="reg-confirmPassword" class="swal2-input" placeholder="Confirm password">
          `
    }).then((result) => {
      Swal.fire({
        
      })
    }) 
  }
*/