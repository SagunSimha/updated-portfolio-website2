// For navigation, I'll be using JS to change pages.
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.add('hidden');
  });

  // Show the selected page
  document.getElementById(pageId).classList.remove('hidden');
}

// For Form submition
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission

  let firstName = document.getElementById('fname').value;
  let lastName = document.getElementById('lname').value;
  let email = document.getElementById('email').value;
  let subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;

  if (validateForm(firstName, lastName, email, subject, message)) {
    let mailtoLink = `mailto:sagunsimha18@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("First Name: " + firstName + "\nLast Name: " + lastName + "\nEmail: " + email + "\n\nMessage: " + message)}`;
    window.location.href = mailtoLink; // Redirect to mailto with formatted data
  } else {
    alert('Please fill out all fields correctly.');
  }
});

function validateForm(firstName, lastName, email, subject, message) {
  if (!firstName || !lastName || !email || !subject || !message) {
    return false;
  }
  return true;
}

// DROPDOWN ICON
// Toggle between hiding and showing the dropdown content when the user clicks on the button
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
