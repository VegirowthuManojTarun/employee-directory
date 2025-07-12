export default class SearchManager {
  constructor(dataManager, uiController) {
    this.dataManager = dataManager;
    this.uiController = uiController;
    this.searchInput = document.getElementById("searchInput");

    this.initializeSearchListener();
  }

  initializeSearchListener() {
    this.searchInput.addEventListener(
      "input",
      this.debounce(() => this.handleSearch(), 300)
    );
  }

  handleSearch() {
    const query = this.searchInput.value.trim().toLowerCase();

    if (!query) {
      this.uiController.renderEmployees(); // Show all if query is empty
      return;
    }

    const filtered = this.dataManager.employees.filter((emp) =>
      `${emp.firstName} ${emp.lastName} ${emp.email}`
        .toLowerCase()
        .includes(query)
    );

    this.uiController.renderEmployees(filtered);
  }

  // Reusable debounce function
  debounce(fn, delay) {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
  }
}
