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

  // Select all <ul> elements inside .package-item
document.querySelectorAll('.package-item ul').forEach(ul => {
  // Loop through each <li> element
  ul.querySelectorAll('li').forEach(li => {
      // Create the icon element
      let icon = document.createElement('i');
      icon.className = 'bx bx-arrow-from-left';
      
      // Prepend the icon to the <li> element
      li.insertBefore(icon, li.firstChild);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const checkbox = document.getElementById('flexSwitchCheckDefault');
  const packages = document.querySelectorAll('.package-item');

  // Update prices based on checkbox state
  function updatePrices(annual) {
    packages.forEach(packageItem => {
      const monthlyPrice = parseFloat(packageItem.getAttribute('data-monthly-price'));
      const annualPrice = parseFloat(packageItem.getAttribute('data-annual-price'));

      const priceElement = packageItem.querySelector('.price');
      if (annual) {
        priceElement.textContent = annualPrice;
        addAnnualChargeText(packageItem);
      } else {
        priceElement.textContent = monthlyPrice;
        removeAnnualChargeText(packageItem);
      }
    });
  }

  // Add annual charge text
  function addAnnualChargeText(packageItem) {
    const annualChargeText = "You will be charged ZMW600 once a year, starting today";
    const paragraph = document.createElement('p');
    paragraph.textContent = annualChargeText;
    packageItem.querySelector('h4').insertAdjacentElement('afterend', paragraph);
  }

  // Remove annual charge text
  function removeAnnualChargeText(packageItem) {
    const paragraph = packageItem.querySelector('h4 + p');
    if (paragraph) {
      paragraph.remove();
    }
  }

  // Initial update based on checkbox state
  updatePrices(checkbox.checked);

  // Listen for checkbox change
  checkbox.addEventListener('change', function() {
    updatePrices(this.checked);
  });
});
