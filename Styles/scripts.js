window.onload = function() {
  alert('JavaScript is working');
// Toggle sidebar
document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('active');
  });
  
  // Search bar interaction
  document.querySelector('.search-button').addEventListener('click', () => {
    const searchQuery = document.querySelector('.search-bar').value;
    alert(`You searched for: ${searchQuery}`);
  });
  
  // Voice search (simulated action)
  document.querySelector('.voice-search-button').addEventListener('click', () => {
    alert('Voice search is not supported yet!');
  });
  
  // Notification count interaction
  document.querySelector('.notifications-icon-container').addEventListener('click', () => {
    const notificationsCountElement = document.querySelector('.notifications-count');
    notificationsCountElement.style.display = 'none';
  });
  
  // Video click simulation (logging video title)
  document.querySelectorAll('.video-preview').forEach((video) => {
    video.addEventListener('click', () => {
      const videoTitle = video.querySelector('.video-title').innerText;
      alert(`Playing video: ${videoTitle}`);
    });
  });
};

  
  