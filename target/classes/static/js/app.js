import DataManager from "./modules/DataManager.js";
import UIController from "./modules/UIController.js";
import FilterManager from "./modules/FilterManager.js";
import SearchManager from "./modules/SearchManager.js";

class App {
  constructor() {
    this.dataManager = new DataManager();
    this.uiController = new UIController(this.dataManager);
    this.filterManager = new FilterManager(this.dataManager, this.uiController);
    this.searchManager = new SearchManager(this.dataManager, this.uiController);

    this.initialize();
  }

  async initialize() {
    await this.dataManager.fetchEmployees();
    await this.uiController.renderEmployees();
    this.filterManager.applyControls();
    this.setupFilterToggle(); // ✅ Call it here
  }

  setupFilterToggle() {
    const filterToggleBtn = document.getElementById("filterToggle");
    const filterSidebar = document.getElementById("filterSidebar");
    const closeFilterBtn = document.getElementById("closeFilter");

    if (filterToggleBtn && filterSidebar) {
      filterToggleBtn.addEventListener("click", () => {
        filterSidebar.classList.toggle("open");
      });
    }

    if (closeFilterBtn) {
      closeFilterBtn.addEventListener("click", () => {
        filterSidebar.classList.remove("open");
      });
    }
  }
}

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  new App();
});
