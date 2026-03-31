// ===================== siteplan.js =====================

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Get form element
    const form = document.querySelector("form");

    // Listen for form submission
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission

        // Collect selected product
        const product = document.querySelector("#product").value;

        // Collect selected activity (radio)
        const activity = document.querySelector('input[name="activity"]:checked');

        // Collect checked services (checkboxes)
        const services = [];
        document.querySelectorAll('input[name="services"]:checked').forEach(function (checkbox) {
            services.push(checkbox.value);
        });

        // Get planned visit date
        const visitDate = document.querySelector("#visit-date").value;

        // Get comments
        const comments = document.querySelector("#comments").value;

        // Build a summary message
        let summary = "🌿 Thank you for your submission! 🌿\n\n";
        summary += `Product Interested: ${product || "None"}\n`;
        summary += `Activity Selected: ${activity ? activity.value : "None"}\n`;
        summary += `Services Chosen: ${services.length > 0 ? services.join(", ") : "None"}\n`;
        summary += `Planned Visit Date: ${visitDate || "Not specified"}\n`;
        summary += `Comments: ${comments || "No comments"}\n`;

        // Show summary in an alert (could replace with a modal later)
        alert(summary);

        // Optional: Reset the form after submission
        form.reset();
    });

});