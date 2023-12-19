document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name.trim() === "" || email.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }
    console.log("Form submitted: Name - " + name + ", Email - " + email);
    alert("Thank you, " + name + "! We received your submission. We will contact you at " + email + ".");
});

document.addEventListener('DOMContentLoaded', function () {
    var mobileMenuButton = document.querySelector('.mobile-menu-button');
    var nav = document.querySelector('nav');

    mobileMenuButton.addEventListener('click', function () {
        if (nav.style.display === 'block' || nav.style.display === '') {
            nav.style.display = 'none';
            mobileMenuButton.classList.remove('active');
        } else {
            nav.style.display = 'block';
            mobileMenuButton.classList.add('active');
        }
    });
});
