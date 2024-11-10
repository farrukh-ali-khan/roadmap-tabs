// Function to open a specific tab and display its content
function openTab(evt, tabName) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((content) => {
    content.style.display = "none";
  });

  // Remove 'active' class from all tab buttons
  const tabLinks = document.querySelectorAll(".tab-link");
  tabLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Show the clicked tab content
  document.getElementById(tabName).style.display = "block";

  // Add 'active' class to the clicked tab button
  evt.currentTarget.classList.add("active");
}

// Initialize the first tab as active when the page loads
document.addEventListener("DOMContentLoaded", function () {
  // Trigger click on the first tab to set it active and show the content
  document.querySelector(".tab-link").click();
});
