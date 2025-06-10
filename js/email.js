// Initialize EmailJS with your Public Key
(function() {
  emailjs.init("kBoaEvGCIeVQAbKBj"); // Replace with your EmailJS Public Key
})();

// Handle form submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const messageDisplay = document.getElementById("form-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_b4y8wfq", "template_y8ccjlr", form)
      .then(() => {
        messageDisplay.textContent = "Message sent! I'll get back to you soon. 🌟";
        messageDisplay.style.color = "#0ABAB5";
        form.reset();

        // Optional: fade message out after 5 seconds
        setTimeout(() => {
          messageDisplay.textContent = "";
        }, 5000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        messageDisplay.textContent = "Oops! Something went wrong. Please try again.";
        messageDisplay.style.color = "#d9534f"; // a soft red
      });
  });
});
