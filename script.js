document.addEventListener("DOMContentLoaded", function() {
    // Access the element
    var contentDiv = document.getElementById("contentDiv");

    // Add mouseover event listener
    contentDiv.addEventListener("mouseover", function() {
        this.style.color = "red"; // Change text color to red
        this.style.transition = "color 0.5s"; // Optional: Add transition for smooth color change
    });

    // Add mouseout event listener
    contentDiv.addEventListener("mouseout", function() {
        this.style.color = ""; // Revert to original text color
    });
});
