// Simple form submission handler
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("touristForm");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Thank you for submitting your feedback!");
            form.reset();
        });
    }
});