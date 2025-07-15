// Modal logic for Quote Modal
function closeModal() {
  document.getElementById('quoteModalBackdrop').style.display = 'none';
}
function openModal() {
  document.getElementById('quoteModalBackdrop').style.display = 'flex';
}
// Show modal on page load
window.addEventListener('DOMContentLoaded', function() {
  document.getElementById('quoteModalBackdrop').style.display = 'flex';
});

// Modal logic for Call Me Modal
function openCallMeModal() {
  document.getElementById('callMeModalBackdrop').style.display = 'flex';
}
function closeCallMeModal() {
  document.getElementById('callMeModalBackdrop').style.display = 'none';
}

// Website Build Modal logic
function openWebsiteBuildModal() {
  document.getElementById('websiteBuildModalBackdrop').style.display = 'flex';
}
function closeWebsiteBuildModal() {
  document.getElementById('websiteBuildModalBackdrop').style.display = 'none';
}
// Add click event to Website Build card
window.addEventListener('DOMContentLoaded', function() {
  var websiteBuildCard = document.getElementById('website-build-card');
  if (websiteBuildCard) {
    websiteBuildCard.style.cursor = 'pointer';
    websiteBuildCard.addEventListener('click', openWebsiteBuildModal);
  }
});

// Social Media Management Modal logic
function openSocialMediaModal() {
  document.getElementById('socialMediaModalBackdrop').style.display = 'flex';
}
function closeSocialMediaModal() {
  document.getElementById('socialMediaModalBackdrop').style.display = 'none';
}
window.addEventListener('DOMContentLoaded', function() {
  // Website Build card logic
  var websiteBuildCard = document.getElementById('website-build-card');
  if (websiteBuildCard) {
    websiteBuildCard.style.cursor = 'pointer';
    websiteBuildCard.addEventListener('click', openWebsiteBuildModal);
  }
  // Social Media Management card logic
  var portfolioCards = document.querySelectorAll('.portfolio-card');
  portfolioCards.forEach(function(card) {
    var title = card.querySelector('.portfolio-card-title');
    if (title && title.textContent.trim() === 'Social Media Management') {
      card.style.cursor = 'pointer';
      card.addEventListener('click', openSocialMediaModal);
    }
  });
  // Logo Design card logic
  var logoDesignCard = document.getElementById('logo-design-card');
  if (logoDesignCard) {
    logoDesignCard.style.cursor = 'pointer';
    logoDesignCard.addEventListener('click', openLogoDesignModal);
  }
});

// Logo Design Modal logic
function openLogoDesignModal() {
  document.getElementById('logoDesignModalBackdrop').style.display = 'flex';
}
function closeLogoDesignModal() {
  document.getElementById('logoDesignModalBackdrop').style.display = 'none';
}

// Brand Kit Modal logic
function openBrandKitModal() {
  document.getElementById('brandKitModalBackdrop').style.display = 'flex';
}
function closeBrandKitModal() {
  document.getElementById('brandKitModalBackdrop').style.display = 'none';
}
window.addEventListener('DOMContentLoaded', function() {
  // Website Build card logic
  var websiteBuildCard = document.getElementById('website-build-card');
  if (websiteBuildCard) {
    websiteBuildCard.style.cursor = 'pointer';
    websiteBuildCard.addEventListener('click', openWebsiteBuildModal);
  }
  // Social Media Management card logic
  var portfolioCards = document.querySelectorAll('.portfolio-card');
  portfolioCards.forEach(function(card) {
    var title = card.querySelector('.portfolio-card-title');
    if (title && title.textContent.trim() === 'Social Media Management') {
      card.style.cursor = 'pointer';
      card.addEventListener('click', openSocialMediaModal);
    }
  });
  // Logo Design card logic
  var logoDesignCard = document.getElementById('logo-design-card');
  if (logoDesignCard) {
    logoDesignCard.style.cursor = 'pointer';
    logoDesignCard.addEventListener('click', openLogoDesignModal);
  }
  // Brand Kit link logic
  var brandKitLink = document.getElementById('brand-kit-link');
  if (brandKitLink) {
    brandKitLink.style.cursor = 'pointer';
    brandKitLink.addEventListener('click', function(e) {
      e.preventDefault();
      openBrandKitModal();
    });
  }
}); 