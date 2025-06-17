// Navigation toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const navigation = document.querySelector('.navigation');
    
    menuButton.addEventListener('click', function() {
        navigation.classList.toggle('show');
    });
    
    // Update current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Update last modified date
    document.getElementById('lastModified').textContent = document.lastModified;
});