// Set footer information
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = document.getElementById('current-year');
    const lastModified = document.getElementById('last-modified');
    
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
    
    if (lastModified) {
        lastModified.textContent = document.lastModified;
    }

    // Mobile menu toggle
    const menuButton = document.getElementById('menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', function() {
            const nav = document.querySelector('.navigation');
            if (nav) nav.classList.toggle('show');
        });
    }
});

// 🏠 Highlight Active Page
const currentPage = new URL(window.location).pathname.split('/').pop();
document.querySelectorAll('.navigation a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// 📡 Fetch & Display Member Data
async function getMembers() {
    try {
        console.log("Attempting to fetch members..."); // Debug log
        const response = await fetch('data/members.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const text = await response.text();
        console.log("Raw response:", text); // Debug log
        
        const members = JSON.parse(text);
        console.log("Parsed members:", members); // Debug log
        
        displayMembers(members);
    } 
    
    catch (error) {
        console.error('"❌" Error loading members:', error);
        document.getElementById('member-container').innerHTML = 
        '<p class="error">Error loading member data. Please try again later.</p>';
    }
}

// 🏆 Display Members in Grid/List Format
function displayMembers(members) {
    const container = document.getElementById('member-container');
    container.innerHTML = ''; // Clear previous content

    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';

        card.appendChild(createElement('h3', member.name));
        card.appendChild(createElement('p', member.address));
        card.appendChild(createElement('p', member.phone));

        const link = createElement('a', 'Visit Website');
        link.href = member.website;
        link.target = "_blank";
        card.appendChild(link);

        card.appendChild(createElement('p', `Membership Level: ${getMembershipLevel(member.membershipLevel)}`));

        container.appendChild(card);
    });
}

// 🛠️ Helper Function: Create an HTML element with text content
function createElement(tag, text) {
    const element = document.createElement(tag);
    element.textContent = text;
    return element;
}

// 🎖️ Membership Level Mapping
function getMembershipLevel(level) {
    const levels = {
        gold: "Gold Member 🏆",
        silver: "Silver Member 🥈",
        bronze: "Bronze Member 🥉"
    };
    return levels[level] || "Standard Member";
}

// 🔄 View Toggle (Grid / List)
document.getElementById('grid-view').addEventListener('click' () => {
    document.getElementById('member-container').className = 'grid-view';
});

document.getElementById('list-view').addEventListener('click', () => {
    document.getElementById('member-container').className = 'list-view';
});

// 🚀 Initialize Fetching Members
getMembers();

