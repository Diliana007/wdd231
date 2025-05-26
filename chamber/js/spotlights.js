async function displaySpotlights() {
    try {
        const response = await fetch('../data/members.json');
        const members = await response.json();
        
        // Filter Gold/Silver members
        const eligible = members.filter(m => 
            ['Gold', 'Silver'].includes(m.membershipLevel);
        
        // Random selection
        const shuffled = eligible.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 2); // Always show 2
        
        // Display
        const container = document.getElementById('spotlight-container');
        container.innerHTML = selected.map(member => `
            <div class="spotlight-card">
                <img src="${member.logo}" alt="${member.name} Logo">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>📞 ${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            </div>
        `).join('');
        
    } catch (error) {
        console.error('Error loading members:', error);
        container.innerHTML = <p>Featured members not available</p>;
    }
}

// Call when page loads
window.addEventListener('load', displaySpotlights);