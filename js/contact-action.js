const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



function sendMail() {
   var params = {
    fName: document.getElementById("fName").value,
    email_Id: document.getElementById("email_Id").value,
    contact_Id: document.getElementById("contact_Id").value,
    message: document.getElementById("message").value,
  };
 
   const serviceID = "service_hpk14cj";
   const templateID = "template_n92yw9k";
 
     emailjs.send(serviceID, templateID, params)
     .then(res=>{
         document.getElementById("fName").value = "";
         document.getElementById("email_Id").value = "";
         document.getElementById("contact_Id").value = "";
         document.getElementById("message").value = "";
         console.log(res);
         alert("Your message sent successfully!!")
 
     })
     .catch(err=>console.log(err));
 
 }
 
