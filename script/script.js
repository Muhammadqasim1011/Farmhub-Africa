document.addEventListener("DOMContentLoaded", function () {
    const featureLinks = document.querySelectorAll('.feature-link');
    const featureImage = document.getElementById('feature-image');

    featureLinks.forEach(function(featureLink) {
      featureLink.addEventListener('click', function () {
        const imageSrc = featureLink.getAttribute('data-image');
        featureImage.src = imageSrc;

        // Remove bg-lg class from all feature links
        featureLinks.forEach(function(link) {
          link.classList.remove('bg-lg');
        });
        // Add bg-lg class to the clicked feature link
        featureLink.classList.add('bg-lg');
      });
    });
  });