/**
 * Theme Management Module
 * Handles dark/light mode toggling and persistence
 * Exports: initTheme(), toggleTheme()
 */

// DOM class names for theme control
const THEME_CLASS = 'dark-mode';
const STORAGE_KEY = 'theme';

/**
 * Initializes theme from localStorage or system preference
 * @return {void}
 */
export function initTheme() {
  // 1. Check for saved preference
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  
  // 2. Check system preference (if no saved preference)
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const shouldUseDark = savedTheme ? savedTheme === 'dark' : systemPrefersDark;
  
  // 3. Apply theme
  document.body.classList.toggle(THEME_CLASS, shouldUseDark);
  
  // 4. Update toggle button state
  updateThemeToggle(shouldUseDark);
  
  console.log(`Theme initialized: ${shouldUseDark ? 'dark' : 'light'} mode`);
}

/**
 * Toggles between dark/light themes
 * @return {void}
 */
export function toggleTheme() {
  // 1. Determine new state
  const isDark = !document.body.classList.contains(THEME_CLASS);
  
  // 2. Apply change
  document.body.classList.toggle(THEME_CLASS, isDark);
  
  // 3. Save preference
  localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
  
  // 4. Update UI
  updateThemeToggle(isDark);
  
  console.log(`Theme toggled to: ${isDark ? 'dark' : 'light'} mode`);
}

/**
 * Updates the theme toggle button UI
 * @param {boolean} isDark - Current theme state
 * @return {void}
 */
function updateThemeToggle(isDark) {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;
  
  toggleBtn.textContent = isDark ? '☀' : '🌙';
  toggleBtn.setAttribute('aria-label', 
    isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

// Optional: Auto-initialize when imported
initTheme();