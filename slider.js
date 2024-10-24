document.addEventListener('DOMContentLoaded', function() {
    const options = document.querySelectorAll('.options li');
    const heading = document.getElementById('dynamic-heading');
    const container = document.querySelector('.slider-container');
  
    // Function to handle hover behavior
    function handleHover(option) {
      const newHeading = option.getAttribute('data-heading');
      const newImage = option.getAttribute('data-image');
  
      // Update the heading and background image
      heading.textContent = newHeading;
      container.style.backgroundImage = `url('${newImage}')`;
  
      // Remove the active class from all options
      options.forEach(opt => opt.classList.remove('active'));
  
      // Add the active class to the hovered option
      option.classList.add('active');
    }
  
    // Apply hover behavior to all options
    options.forEach(option => {
      option.addEventListener('mouseenter', function() {
        handleHover(option);
      });
    });
  
    // Set initial state to "Cash Flow"
    handleHover(document.querySelector('.options li.active'));
  });