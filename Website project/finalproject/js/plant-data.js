/**
 * Plant Data Module
 * Manages plant information and related utilities
 * Exports: getPlants(), getPlantById()
 */


const plants = [
  // Plant data - using local JSON since we can't do CORS in this example
            {
                id: 1,
                name: "Tomato",
                scientific: "Solanum lycopersicum",
                type: "Vegetable",
                season: "Summer",
                sun: "Full Sun",
                water: "Regular",
                icon: "🍅"
            },
            {
                id: 2,
                name: "Basil",
                scientific: "Ocimum basilicum",
                type: "Herb",
                season: "Summer",
                sun: "Full Sun",
                water: "Regular",
                icon: "🌿"
            },
            {
                id: 3,
                name: "Zucchini",
                scientific: "Cucurbita pepo",
                type: "Vegetable",
                season: "Summer",
                sun: "Full Sun",
                water: "Regular",
                icon: "🥒"
            },
            {
                id: 4,
                name: "Strawberry",
                scientific: "Fragaria × ananassa",
                type: "Fruit",
                season: "Spring",
                sun: "Full Sun",
                water: "Regular",
                icon: "🍓"
            },
            {
                id: 5,
                name: "Lettuce",
                scientific: "Lactuca sativa",
                type: "Vegetable",
                season: "Spring/Fall",
                sun: "Partial Shade",
                water: "Regular",
                icon: "🥬"
            },
            {
                id: 6,
                name: "Carrot",
                scientific: "Daucus carota",
                type: "Vegetable",
                season: "Cool Season",
                sun: "Full Sun",
                water: "Regular",
                icon: "🥕"
            },
            {
                id: 7,
                name: "Pepper",
                scientific: "Capsicum annuum",
                type: "Vegetable",
                season: "Summer",
                sun: "Full Sun",
                water: "Regular",
                icon: "🫑"
            },
            {
                id: 8,
                name: "Cucumber",
                scientific: "Cucumis sativus",
                type: "Vegetable",
                season: "Summer",
                sun: "Full Sun",
                water: "Regular",
                icon: "🥒"
            },
            {
                id: 9,
                name: "Radish",
                scientific: "Raphanus sativus",
                type: "Vegetable",
                season: "Spring/Fall",
                sun: "Full Sun",
                water: "Regular",
                icon: "🌶"
            },
            {
                id: 10,
                name: "Spinach",
                scientific: "Spinacia oleracea",
                type: "Vegetable",
                season: "Cool Season",
                sun: "Partial Shade",
                water: "Regular",
                icon: "🥬"
            },
            {
                id: 11,
                name: "Green Beans",
                scientific: "Phaseolus vulgaris",
                type: "Vegetable",
                season: "Summer",
                sun: "Full Sun",
                water: "Regular",
                icon: "🫛"
            },
            {
                id: 12,
                name: "Mint",
                scientific: "Mentha",
                type: "Herb",
                season: "Perennial",
                sun: "Partial Shade",
                water: "Regular",
                icon: "🌿"
            },
            {
                id: 13,
                name: "Sunflower",
                scientific: "Helianthus annuus",
                type: "Flower",
                season: "Summer",
                sun: "Full Sun",
                water: "Moderate",
                icon: "🌻"
            },
            {
                id: 14,
                name: "Kale",
                scientific: "Brassica oleracea",
                type: "Vegetable",
                season: "Cool Season",
                sun: "Full Sun",
                water: "Regular",
                icon: "🥬"
            },
            {
                id: 15,
                name: "Rosemary",
                scientific: "Salvia rosmarinus",
                type: "Herb",
                season: "Perennial",
                sun: "Full Sun",
                water: "Low",
                icon: "🌿"
            }
        ];

/**
 * Fetches all plants (simulates API call)
 * @return {Promise<Array>} Array of plant objects
 */
export async function getPlants() {
  try {
    // Simulate network delay
    return new Promise(resolve => {
      setTimeout(() => resolve([...plants]), 300);
    });
  } catch (error) {
    console.error('Failed to load plants:', error);
    return [];
  }
}

/**
 * Finds a specific plant by ID
 * @param {number} id - Plant ID to find
 * @return {Object|null} Plant object or null if not found
 */
export function getPlantById(id) {
  return plants.find(plant => plant.id === id) || null;
}

// Optional: Add more utility functions as needed