const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



function SendMail(){
   var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      contact: document.getElementById("contact").value,
      message: document.getElementById("message").value,
   }
   emailjs.sned("service_hpk14cj","template_n92yw9k",params).then(function(res){
      alert("Success!" +res.status);
   })
}
