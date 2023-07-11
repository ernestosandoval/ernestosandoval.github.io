document.addEventListener('DOMContentLoaded', function() {
  const avatarContainer = document.getElementById('avatar-container');
  const previewContainer = document.getElementById('preview-container');

  avatarContainer.addEventListener('click', () => {
    previewContainer.style.display = 'flex';
  });

  previewContainer.addEventListener('click', () => {
    previewContainer.style.display = 'none';
  });
});
