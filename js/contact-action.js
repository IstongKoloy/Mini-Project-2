const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



function sendMail() {
   var params = {
     name: document.getElementById("name").value,
     email: document.getElementById("email").value,
     message: document.getElementById("message").value,
   };
 
   const serviceID = "service_hpk14cj";
   const templateID = "template_n92yw9k";
 
     emailjs.send(serviceID, templateID, params)
     .then(res=>{
         document.getElementById("name").value = "";
         document.getElementById("email").value = "";
         document.getElementById("contact").value = "";
         document.getElementById("message").value = "";
         console.log(res);
         alert("Your message sent successfully!!")
 
     })
     .catch(err=>console.log(err));
 
 }
 
