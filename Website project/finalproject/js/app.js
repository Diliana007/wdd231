/**
 * Main Application Module
 * Coordinates between other modules
 */

import { initTheme, toggleTheme } from './theme-toggle.js';
import { getPlants, getPlantById } from './plant-data.js';

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // 1. Set up theme
  initTheme();
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
  
  // 2. Load plant data (for discovery page)
  if (document.getElementById('plant-grid')) {
    loadPlants();
  }
  
  // 3. Set up modal (for discovery page)
  setupModal();
});

/**
 * Loads and displays plants
 */
async function loadPlants() {
  const plants = await getPlants();
  const grid = document.getElementById('plant-grid');
  
  grid.innerHTML = plants.map(plant => `
    <div class="plant-card" data-id="${plant.id}">
      <div class="plant-image">${plant.icon}</div>
      <h3>${plant.name}</h3>
    </div>
  `).join('');
}

/**
 * Sets up plant detail modal
 */
function setupModal() {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal">
      <button class="modal-close">&times;</button>
      <div class="modal-content"></div>
    </div>
  `;
  document.body.appendChild(modal);

  // Event delegation for plant cards
  document.addEventListener('click', (e) => {
    if (e.target.closest('.plant-card')) {
      const plantId = parseInt(e.target.closest('.plant-card').dataset.id);
      showPlantDetails(plantId);
    }
    
    if (e.target.closest('.modal-close')) {
      modal.style.display = 'none';
    }
  });
}

/**
 * Shows plant details in modal
 * @param {number} plantId 
 */
async function showPlantDetails(plantId) {
  const plant = getPlantById(plantId);
  const modalContent = document.querySelector('.modal-content');
  
  modalContent.innerHTML = `
    <h2>${plant.name}</h2>
    <p><em>${plant.scientific}</em></p>
    <p>${plant.description}</p>
  `;
  
  document.querySelector('.modal-overlay').style.display = 'flex';
}