document.addEventListener('DOMContentLoaded', () => {
    // 📅 Set footer information
    const currentYear = document.getElementById('current-year');
    const lastModified = document.getElementById('last-modified');

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    if (lastModified) {
        lastModified.textContent = document.lastModified;
    }

    // 📱 Mobile menu toggle
    const menuButton = document.getElementById('menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', () => {
            const nav = document.querySelector('.navigation');
            if (nav) nav.classList.toggle('show');
        });
    }

    // 🏠 Highlight active page
    const currentPage = new URL(window.location).pathname.split('/').pop();
    document.querySelectorAll('.navigation a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // 🔄 View toggle (Grid/List)
    const gridView = document.getElementById('grid-view');
    const listView = document.getElementById('list-view');
    const memberContainer = document.getElementById('member-container');

    if (gridView && memberContainer) {
        gridView.addEventListener('click', () => {
            memberContainer.className = 'grid-view';
        });
    }

    if (listView && memberContainer) {
        listView.addEventListener('click', () => {
            memberContainer.className = 'list-view';
        });
    }

    // 🚀 Fetch and display members
    getMembers();
});

// 📡 Fetch & Display Member Data
async function getMembers() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error("❌ Error loading members:", error);
        const container = document.getElementById('member-container');
        if (container) {
            container.innerHTML = '<p class="error">Error loading member data. Please try again later.</p>';
        }
    }
}

// 🏆 Display Members in Grid/List Format
function displayMembers(members) {
    const container = document.getElementById('member-container');
    if (!container) return;

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