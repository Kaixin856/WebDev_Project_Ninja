document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    // Clear existing error messages
    document.querySelectorAll(".error").forEach(err => err.textContent = "");

    // Validate first name
    const firstName = document.getElementById("firstName");
    if (!firstName.value.match(/^[A-Za-z]+$/)) {
        isValid = false;
        document.getElementById("firstNameError").textContent = "Please enter a valid first name.";
    }

    // Validate last name
    const lastName = document.getElementById("lastName");
    if (!lastName.value.match(/^[A-Za-z]+$/)) {
        isValid = false;
        document.getElementById("lastNameError").textContent = "Please enter a valid last name.";
    }

    // Validate email
    const email = document.getElementById("email");
    if (!email.value.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
        isValid = false;
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
    }

    // Validate reason
    const reason = document.getElementById("reason");
    if (!reason.value) {
        isValid = false;
        document.getElementById("reasonError").textContent = "Please select a reason for inquiry.";
    }

    // Validate message
    const message = document.getElementById("message");
    if (!message.value.trim()) {
        isValid = false;
        document.getElementById("messageError").textContent = "Please enter a message.";
    }

    if (isValid) {
        alert("Form submitted successfully!");
        // Here you could send the form data to the server
    }
});
