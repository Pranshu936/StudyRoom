// Menu

const dropdownButton = document.querySelector('.dropdown-button');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});

// Close the dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!dropdownMenu.contains(e.target) && !dropdownButton.contains(e.target)) {
    dropdownMenu.classList.remove('show');
  }
});


// Upload Image
const photoInput = document.querySelector("#avatar");
const photoPreview = document.querySelector("#preview-avatar");
if (photoInput)
  photoInput.onchange = () => {
    const [file] = photoInput.files;
    if (file) {
      photoPreview.src = URL.createObjectURL(file);
    }
  };

// Scroll to Bottom
const conversationThread = document.querySelector(".room__box");
if (conversationThread) conversationThread.scrollTop = conversationThread.scrollHeight;



// Search
document.addEventListener('DOMContentLoaded', () => {
  const searchContainer = document.querySelector('.search-container');
  const searchInput = document.querySelector('.search-input');
  const searchIcon = document.querySelector('.search-icon');
  const searchForm = document.querySelector('.animated-search');

  if (searchIcon && searchContainer) {
      // Toggle search
      searchIcon.addEventListener('click', (e) => {
          e.preventDefault();
          searchContainer.classList.toggle('active');
          if (searchContainer.classList.contains('active')) {
              searchInput.focus();
          }
      });

      // Submit on Enter
      searchInput.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
              searchForm.submit();
          }
      });

      // Close on click outside
      document.addEventListener('click', (e) => {
          if (!searchContainer.contains(e.target)) {
              searchContainer.classList.remove('active');
          }
      });

      // Auto-close after search
      searchForm.addEventListener('submit', () => {
          setTimeout(() => {
              searchContainer.classList.remove('active');
          }, 1000);
      });
  }
});
