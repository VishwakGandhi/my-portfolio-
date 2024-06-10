// script.js

// Get the header element
const header = document.getElementById('header');

// Function to toggle header visibility
function toggleHeaderVisibility() {
  // Always show the header
  header.classList.remove('hidden');
  clearTimeout(window.hideHeaderTimeout); // Clear any existing timeout

  // Set a timeout to hide the header after 2 seconds of inactivity
  window.hideHeaderTimeout = setTimeout(function() {
    header.classList.add('hidden'); // Hide the header after timeout
  }, 2000); // Adjust timeout duration as needed
}

// Track user activity to toggle header visibility
document.addEventListener('mousemove', toggleHeaderVisibility);
document.addEventListener('keydown', toggleHeaderVisibility);
document.addEventListener('wheel', toggleHeaderVisibility);

// Function to check if the current section is the home section
function isHomeSection() {
  // Check if the current URL ends with '#home'
  return window.location.hash === '#home';
}

// Check header visibility when the window is scrolled
window.addEventListener('scroll', function() {
  // Check if the current section is not the home section
  if (!isHomeSection()) {
    toggleHeaderVisibility();
  }
});

// Check header visibility when the window is resized
window.addEventListener('resize', function() {
  // Check if the current section is not the home section
  if (!isHomeSection()) {
    toggleHeaderVisibility();
  }
});

// Check header visibility when the hash (URL fragment) changes
window.addEventListener('hashchange', function() {
  // Check if the current section is the home section
  if (isHomeSection()) {
    // Reset header visibility
    toggleHeaderVisibility();
  } else {
    // Always show the header for non-home sections
    header.classList.remove('hidden');
  }
});

// Initialize the header visibility
toggleHeaderVisibility();







