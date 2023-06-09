// Get the language switch links
const languageLinks = document.querySelectorAll('.language-link');

// Function to handle language switching
function switchLanguage(event) {
  event.preventDefault();

  // Get the target language from the data attribute
  const targetLanguage = event.target.dataset.language;

  // Hide all language-specific content
  const languageElements = document.querySelectorAll('[id$="-en"], [id$="-pt"]');
  languageElements.forEach(element => {
    element.style.display = 'none';
  });

  // Show the selected language-specific content
  const selectedElements = document.querySelectorAll(`[id$="${targetLanguage}"]`);
  selectedElements.forEach(element => {
    element.style.display = 'inline';
  });
}

// Attach click event listeners to the language switch links
languageLinks.forEach(link => {
  link.addEventListener('click', switchLanguage);
});
