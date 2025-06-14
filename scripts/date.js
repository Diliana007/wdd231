// Date functionality
document.addEventListener('DOMContentLoaded', function() {
    // Set copyright year
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
    
    // Set last modified date
    document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;
});