// 🗂 Chamber of Commerce Member Directory Script
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

    // 🚀 Load members from embedded data
    loadMembers();
});

// 🗂 Embedded member data to avoid CORS issues
function loadMembers() {
    const members = [
        {
            "name": "Coventry Tech Solutions",
            "address": "123 Innovation Park, Coventry, UK",
            "phone": "+44 24 7654 3210",
            "website": "https://coventrytech.co.uk",
            "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            "membershipLevel": "gold"
        },
        {
            "name": "City Cafe & Bakery",
            "address": "45 High Street, Coventry, UK",
            "phone": "+44 24 7656 7890",
            "website": "https://citycafe.co.uk",
            "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            "membershipLevel": "silver"
        },
        {
            "name": "West Midlands Auto Repairs",
            "address": "78 Warwick Road, Coventry, UK",
            "phone": "+44 24 7665 4321",
            "website": "https://westmidautocoventry.com",
            "image": "https://images.unsplash.com/photo-1603575448878-868a20723f5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            "membershipLevel": "bronze"
        },
        {
            "name": "GreenLeaf Florist",
            "address": "15 Broadgate, Coventry, UK",
            "phone": "+44 24 7643 9876",
            "website": "https://greenleafflorist.co.uk",
            "image": "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            "membershipLevel": "silver"
        },
        {
            "name": "Coventry Fitness Hub",
            "address": "21 Sky Blue Way, Coventry, UK",
            "phone": "+44 24 7659 8765",
            "website": "https://coventryfitnesshub.com",
            "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            "membershipLevel": "gold"
        },
        {
            "name": "Empire Bookstore",
            "address": "5 Smithford Way, Coventry, UK",
            "phone": "+44 24 7632 6543",
            "website": "https://empirebooks.co.uk",
            "image": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            "membershipLevel": "bronze"
        },
        {
            "name": "Midlands IT Services",
            "address": "88 London Road, Coventry, UK",
            "phone": "+44 24 7654 1111",
            "website": "https://midlandsit.co.uk",
            "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            "membershipLevel": "gold"
        }
    ];

    // Display members
    displayMembers(members);
}

// 🏆 Display Members in Grid/List Format
function displayMembers(members) {
    const container = document.getElementById('member-container');
    if (!container) return;

    container.innerHTML = ''; // Clear previous content

    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';

        // Create image element
        const img = document.createElement('img');
        img.src = member.image;
        img.alt = member.name;
        img.loading = "lazy";
        img.className = "member-img";
        card.appendChild(img);

        // Create content container
        const content = document.createElement('div');
        content.className = 'member-content';
        
        // Add member information
        content.appendChild(createElement('h3', member.name));
        content.appendChild(createElement('p', `📍 ${member.address}`, 'address'));
        content.appendChild(createElement('p', `📞 ${member.phone}`, 'phone'));
        
        // Create website link
        const link = document.createElement('a');
        link.href = member.website;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.className = "website-link";
        link.textContent = "Visit Website";
        content.appendChild(link);
        
    // Add membership badge
        const badge = document.createElement('span');
        badge.className = `membership-badge ${member.membershipLevel.toLowerCase()}`;
        badge.textContent = getMembershipLevel(member.membershipLevel);
        content.appendChild(badge);

        
        card.appendChild(content);
        container.appendChild(card);
    });
}

// 🛠 Helper Function: Create an HTML element with text content
function createElement(tag, text, className = '') {
    const element = document.createElement(tag);
    element.textContent = text;
    if (className) element.className = className;
    return element;
}

// 🎖 Membership Level Mapping
function getMembershipLevel(level) {
    const levels = {
        gold: "Gold Member",
        silver: "Silver Member",
        bronze: "Bronze Member"
    };
    return levels[level] || "Standard Member";
}
// Embedded member data to avoid CORS issues
const members = [
    {
        "name": "Coventry Tech Solutions",
        "address": "123 Innovation Park, Coventry, UK",
        "phone": "+44 24 7654 3210",
        "website": "https://coventrytech.co.uk",
        "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "membershipLevel": "gold"
    },
    {
        "name": "City Cafe & Bakery",
        "address": "45 High Street, Coventry, UK",
        "phone": "+44 24 7656 7890",
        "website": "https://citycafe.co.uk",
        "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "membershipLevel": "silver"
    },
    {
        "name": "West Midlands Auto Repairs",
        "address": "78 Warwick Road, Coventry, UK",
        "phone": "+44 24 7665 4321",
        "website": "https://westmidautocoventry.com",
        "image": "https://images.unsplash.com/photo-1603575448878-868a20723f5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "membershipLevel": "bronze"
    },
    {
        "name": "GreenLeaf Florist",
        "address": "15 Broadgate, Coventry, UK",
        "phone": "+44 24 7643 9876",
        "website": "https://greenleafflorist.co.uk",
        "image": "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "membershipLevel": "silver"
    },
    {
        "name": "Coventry Fitness Hub",
        "address": "21 Sky Blue Way, Coventry, UK",
        "phone": "+44 24 7659 8765",
        "website": "https://coventryfitnesshub.com",
        "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "membershipLevel": "gold"
    },
    {
        "name": "Empire Bookstore",
        "address": "5 Smithford Way, Coventry, UK",
        "phone": "+44 24 7632 6543",
        "website": "https://empirebooks.co.uk",
        "image": "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "membershipLevel": "bronze"
    },
    {
        "name": "Midlands IT Services",
        "address": "88 London Road, Coventry, UK",
        "phone": "+44 24 7654 1111",
        "website": "https://midlandsit.co.uk",
        "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        "membershipLevel": "gold"
    }
];

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

    // 🔄 View toggle (Grid/List)
    const gridView = document.getElementById('grid-view');
    const listView = document.getElementById('list-view');
    const memberContainer = document.getElementById('member-container');

    if (gridView && memberContainer) {
        gridView.addEventListener('click', () => {
            gridView.classList.add('active');
            listView.classList.remove('active');
            memberContainer.className = 'grid-view';
        });
    }

    if (listView && memberContainer) {
        listView.addEventListener('click', () => {
            listView.classList.add('active');
            gridView.classList.remove('active');
            memberContainer.className = 'list-view';
        });
    }

    // 🚀 Display members using embedded data
    displayMembers(members);
});

// 🏆 Display Members in Grid/List Format
function displayMembers(members) {
    const container = document.getElementById('member-container');
    if (!container) return;

    container.innerHTML = ''; // Clear previous content

    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';

        // Create image element
        const img = document.createElement('img');
        img.src = member.image;
        img.alt = member.name;
        img.loading = "lazy";
        img.className = "member-img";
        card.appendChild(img);

        // Create content container
        const content = document.createElement('div');
        content.className = 'member-content';
        
        // Add member information
        content.appendChild(createElement('h3', member.name));
        content.appendChild(createElement('p', `📍 ${member.address}`, 'address'));
        content.appendChild(createElement('p', `📞 ${member.phone}`, 'phone'));
        
        // Create website link
        const link = document.createElement('a');
        link.href = member.website;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.className = "website-link";
        link.textContent = "Visit Website";
        content.appendChild(link);
        
        // Add membership badge
        const badge = document.createElement('span');
        badge.className = `membership-badge ${member.membershipLevel}`;
        badge.textContent = getMembershipLevel(member.membershipLevel);
        content.appendChild(badge);

        card.appendChild(content);
        container.appendChild(card);
    });
}

// 🛠 Helper Function: Create an HTML element with text content
function createElement(tag, text, className = '') {
    const element = document.createElement(tag);
    element.textContent = text;
    if (className) element.className = className;
    return element;
}

// 🎖 Membership Level Mapping
function getMembershipLevel(level) {
    const levels = {
        gold: "Gold Member",
        silver: "Silver Member",
        bronze: "Bronze Member"
    };
    return levels[level] || "Standard Member";
}