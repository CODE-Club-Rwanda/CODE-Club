  const form = document.getElementById('contact-form');
  const statusMessage = document.getElementById('status-message');

  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        statusMessage.textContent = "Thank you! Your message has been sent.";
        form.reset(); // Clear the form fields
      } else {
        statusMessage.textContent = "Oops! There was a problem submitting your form.";
      }
    } catch (error) {
      statusMessage.textContent = "Oops! There was a problem submitting your form.";
    }
  });
  function markHeaderLinkAsClicked(linkElement) {
    // Remove 'clicked' class from all header links
    const headerLinks = document.querySelectorAll("header nav a");
    headerLinks.forEach(link => link.classList.remove("clicked"));
    
    // Add 'clicked' class to the clicked link
    linkElement.classList.add("clicked");
}

