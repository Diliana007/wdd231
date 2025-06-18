// Member data (simulating what would be in members.json)
const members = [
    {
        "name": "Coventry Tech Solutions",
        "address": "123 Innovation Park, Coventry, UK",
        "phone": "+44 24 7654 3210",
        "website": "https://coventrytech.co.uk",
        "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "membershipLevel": "gold"
    },
    {
        "name": "City Cafe & Bakery",
        "address": "45 High Street, Coventry, UK",
        "phone": "+44 24 7656 7890",
        "website": "https://citycafe.co.uk",
        "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1178&q=80",
        "membershipLevel": "silver"
    },
    {
        "name": "Coventry Fitness Hub",
        "address": "21 Sky Blue Way, Coventry, UK",
        "phone": "+44 24 7659 8765",
        "website": "https://coventryfitnesshub.com",
        "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "membershipLevel": "gold"
    },
    {
        "name": "GreenLeaf Florist",
        "address": "15 Broadgate, Coventry, UK",
        "phone": "+44 24 7643 9876",
        "website": "https://greenleafflorist.co.uk",
        "image": "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=726&q=80",
        "membershipLevel": "silver"
    },
    {
        "name": "Midlands IT Services",
        "address": "88 London Road, Coventry, UK",
        "phone": "+44 24 7654 1111",
        "website": "https://midlandsit.co.uk",
        "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "membershipLevel": "gold"
    }
];

/**
 * Displays featured member spotlights
 * - Filters for Gold/Silver members
 * - Randomly selects 2 members
 * - Creates spotlight cards
 */
function displaySpotlights() {
    try {
        // Filter Gold/Silver members (case-insensitive)
        const eligible = members.filter(m => 
            ['gold', 'silver'].includes(m.membershipLevel.toLowerCase())
        );
        
        if (eligible.length === 0) {
            throw new Error('No Gold/Silver members found');
        }
        
        // Random selection (always show 2, or fewer if not available)
        const shuffled = [...eligible].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, Math.min(2, eligible.length));
        
        // Display
        const container = document.getElementById('spotlight-container');
        if (!container) return;
        
        container.innerHTML = selected.map(member => `
            <div class="spotlight-card">
                <img src="${member.image}" 
                    alt="${member.name}" 
                    loading="lazy"
                    class="spotlight-img">
                <div class="spotlight-content">
                    <h3>${member.name}</h3>
                    <p class="address">📍 ${member.address}</p>
                    <p class="phone">📞 ${member.phone}</p>
                    <a href="${member.website}" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="website-link">
                        Visit Website
                    </a>
                    <span class="membership-badge ${member.membershipLevel.toLowerCase()}">
                        ${member.membershipLevel} Member
                    </span>
                </div>
            </div>
        `).join('');
        
    } catch (error) {
        console.error('Error loading spotlights:', error);
        const container = document.getElementById('spotlight-container');
        if (container) {
            container.innerHTML = `
                <div class="error-message">
                    <p>⚠ Featured members not available</p>
                    <button onclick="displaySpotlights()">Try Again</button>
                </div>
            `;
        }
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', displaySpotlights);

// Make function available for retry button
window.displaySpotlights = displaySpotlights;