// JavaScript for Form

//Waiting for submit button on form to be pressed
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("subscribe-form");
    const container = document.getElementById("form-container");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); //Keep from refreshing the page

        // Fade out form
        form.classList.add("fade-out");

        // After fade-out, replace content
        setTimeout(() => { container.innerHTML = `<h3 class="fade-in">Thank you for subscribing!</h3>`; }, 500);
    });
});