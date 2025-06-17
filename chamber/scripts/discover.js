// This will run after the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Create a fallback data structure
    const attractionsData = {
        attractions: [
            {
                name: "Coventry Cathedral",
                address: "Priory St, Coventry CV1 5FB",
                description: "The stunning ruins of the old cathedral stand beside the modern new cathedral, a symbol of reconciliation after WWII destruction.",
                image: "cathedral.webp"
            },
            {
                name: "Coventry Transport Museum",
                address: "Millennium Place, Hales St, Coventry CV1 1JD",
                description: "Home to the world's largest collection of British road transport, including many vehicles made in Coventry.",
                image: "transport-museum.webp"
            },
            {
                name: "St. Mary's Guildhall",
                address: "Bayley Ln, Coventry CV1 5RN",
                description: "One of Britain's finest medieval buildings with over 650 years of history, including being a prison for Mary Queen of Scots.",
                image: "guildhall.webp"
            },
            {
                name: "War Memorial Park",
                address: "Kenilworth Rd, Coventry CV3 6PT",
                description: "Beautiful 48.5 hectare park featuring memorials, gardens, sports facilities, and hosts major events throughout the year.",
                image: "memorial-park.webp"
            },
            {
                name: "Herbert Art Gallery & Museum",
                address: "Jordan Well, Coventry CV1 5QP",
                description: "Excellent museum showcasing Coventry's history, art, and culture with interactive exhibits for all ages.",
                image: "herbert-museum.webp"
            },
            {
                name: "Coombe Abbey Park",
                address: "Brinklow Rd, Coventry CV3 2AB",
                description: "500 acres of beautiful historic parkland with lakes, woodland walks, and a medieval abbey, perfect for nature lovers.",
                image: "coombe-abbey.webp"
            },
            {
                name: "Belgrade Theatre",
                address: "Belgrade Square, Corporation St, Coventry CV1 1GS",
                description: "Britain's first civic theatre, named in recognition of a gift of timber from Belgrade, offering top-quality productions.",
                image: "belgrade-theatre.webp"
            },
            {
                name: "FarGo Village",
                address: "Far Gosford St, Coventry CV1 5ED",
                description: "Creative quarter with independent shops, street food, arts spaces, and regular markets in a revitalized industrial area.",
                image: "fargo-village.webp"
            }
        ]
    };

    // Always display the attractions using our fallback data
    const attractionsGrid = document.getElementById('attractionsGrid');
    attractionsGrid.innerHTML = ''; // Clear existing content
    
    attractionsData.attractions.forEach((attraction, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <h2>${attraction.name}</h2>
            <figure>
                <img src="./images/${attraction.image}" alt="${attraction.name}" loading="lazy">
            </figure>
            <div class="card-content">
                <address>${attraction.address}</address>
                <p>${attraction.description}</p>
                <button>Learn More</button>
            </div>
        `;
        
        attractionsGrid.appendChild(card);
    });
});