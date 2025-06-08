/**
 * Displays featured member spotlights
 * - Fetches member data from JSON
 * - Filters for Gold/Silver members
 * - Randomly selects 2 members
 * - Creates spotlight cards
 */

async function displaySpotlights() {
    try {
        const response = await fetch('./data/members.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const members = await response.json();
        
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
                <img src="${member.image || member.logo || './images/member-placeholder.webp'}" 
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