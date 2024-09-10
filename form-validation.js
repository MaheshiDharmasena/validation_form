// First Name Validation
function validateFirstName() {
    const firstName = document.getElementById('firstName').value;
    if (!firstName) {
        alert("Please provide your first name!");
    } else {
        alert("First name is valid!");
    }
}

// Last Name Validation
function validateLastName() {
    const lastName = document.getElementById('LastName').value;
    if (!lastName) {
        alert("Please provide your second name!");
    } else {
        alert("Second name is valid!");
    }
}

// Phone Number Validation
function validatePhoneNumber() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const phoneRegex = /^\d{10}$/;
    if (!phoneNumber.match(phoneRegex)) {
        alert("Please enter a valid 10-digit phone number.");
    } else {
        alert("Valid phone number!");
    }
}

// Email Validation
function validateEmail() {
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        alert("Not a valid email address.");
    } else {
        alert("Valid email address!");
    }
}

// Hometown Dropdown Validation
function getSelectedCountry() {
    const hometown = document.getElementById('hometown').value;
    if (hometown === "Not Selected") {
        alert("Please select a home town.");
    } else {
        alert(`You selected: ${hometown}`);
    }
}

// Full Form Validation before submission
function validateForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('LastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const hometown = document.getElementById('hometown').value;

    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstName) {
        alert("Please provide your first name!");
        return false;
    }
    if (!lastName) {
        alert("Please provide your second name!");
        return false;
    }
    if (!phoneNumber.match(phoneRegex)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }
    if (!email.match(emailRegex)) {
        alert("Not a valid email address.");
        return false;
    }
    if (hometown === "Not Selected") {
        alert("Please select a home town.");
        return false;
    }

    alert("Submitted!");
    return true;
}
