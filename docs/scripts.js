<script>
document.addEventListener("DOMContentLoaded", function () {
  console.log("scripts.js loaded");

  let langEn = document.getElementById("lang-en");
  let langZh = document.getElementById("lang-zh");

  if (!langEn || !langZh) {
    console.error("Language toggle buttons not found.");
    return;
  }

  function toggleLanguage(targetLang) {
    let currentPath = window.location.pathname;

    // Handle root URL case
    if (currentPath === '/' || currentPath === '/index.html' || currentPath === '/index_en.html') {
      if (targetLang === 'zh') {
        window.location.href = '/index_zh.html';
      } else {
        window.location.href = '/index_en.html';
      }
      return; // Exit function to prevent further execution
    }

    // Handle switching between _en and _zh
    if (targetLang === 'zh' && currentPath.includes('_en')) {
      currentPath = currentPath.replace('_en', '_zh');
    } else if (targetLang === 'en' && currentPath.includes('_zh')) {
      currentPath = currentPath.replace('_zh', '_en');
    }

    const newUrl = window.location.origin + currentPath;
    console.log("New URL: ", newUrl);
    window.location.href = newUrl;
  }

  langEn.addEventListener("click", function() { toggleLanguage('en'); });
  langZh.addEventListener("click", function() { toggleLanguage('zh'); });
});

$(document).ready(function() {
  // Fade in body on page load
  $('body').addClass('loaded');

  // Fade out body and navigate when clicking a link
  $('a').click(function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    
    // Add fading class to initiate fade-out effect
    $('body').addClass('fading');
    
    // Navigate to new page after fade-out animation
    setTimeout(function() {
      window.location.href = href;
    }, 1000); // Adjust timing to match your animation duration
  });
});

</script>
