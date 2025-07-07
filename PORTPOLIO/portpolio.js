document.addEventListener("DOMContentLoaded", function () {

  
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const emptyField = document.querySelector("input:invalid, textarea:invalid");

        if (emptyField) {
            alert("Please fill out the form!");
        } else {
            alert("Message sent successfully!");    
            form.reset(); 
        }
    });

});
