// Import the required modules for managing data, UI, filters, and search
import DataManager from "./modules/DataManager.js";
import UIController from "./modules/UIController.js";
import FilterManager from "./modules/FilterManager.js";
import SearchManager from "./modules/SearchManager.js";

// Main App class that brings everything together
class App {
  constructor() {
    // Initialize all the components and pass dependencies
    this.dataManager = new DataManager(); // Handles employee data (add, update, delete, store)
    this.uiController = new UIController(this.dataManager); // Handles UI rendering and interactions
    this.filterManager = new FilterManager(this.dataManager, this.uiController); // Controls filtering logic
    this.searchManager = new SearchManager(this.dataManager, this.uiController); // Handles live search input

    // Run initial setup
    this.initialize();
  }

  // Main initialization method
  async initialize() {
    await this.dataManager.fetchEmployees(); // Load data (from localStorage)
    await this.uiController.renderEmployees(); // Display all employee cards on the page
    this.filterManager.applyControls(); // Apply sorting and limit on initial load
    this.setupFilterToggle(); // Setup sidebar toggle functionality
  }

  // Handles the filter sidebar toggle behavior
  setupFilterToggle() {
    const filterToggleBtn = document.getElementById("filterToggle");
    const filterSidebar = document.getElementById("filterSidebar");
    const closeFilterBtn = document.getElementById("closeFilter");

    // When the toggle button is clicked, show/hide the sidebar
    if (filterToggleBtn && filterSidebar) {
      filterToggleBtn.addEventListener("click", () => {
        filterSidebar.classList.toggle("open");
      });
    }

    // Close button hides the sidebar
    if (closeFilterBtn) {
      closeFilterBtn.addEventListener("click", () => {
        filterSidebar.classList.remove("open");
      });
    }
  }
}

// Wait for the entire HTML to load, then run the app
document.addEventListener("DOMContentLoaded", () => {
  new App();
});
