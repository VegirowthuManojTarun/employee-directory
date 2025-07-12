// This class handles the live search functionality for employees
export default class SearchManager {
  constructor(dataManager, uiController) {
    this.dataManager = dataManager; // Access employee data
    this.uiController = uiController; // Update the UI
    this.searchInput = document.getElementById("searchInput"); // The search bar input element

    // Set up listener for user typing
    this.initializeSearchListener();
  }

  // Listen for typing in the search bar with a debounce delay
  initializeSearchListener() {
    this.searchInput.addEventListener(
      "input",
      this.debounce(() => this.handleSearch(), 300) // Delay of 300ms between inputs
    );
  }

  // Handle what happens when user types in the search bar
  handleSearch() {
    const query = this.searchInput.value.trim().toLowerCase(); // Get lowercase search input

    // If nothing is typed, show all employees
    if (!query) {
      this.uiController.renderEmployees();
      return;
    }

    // Filter employees whose name or email includes the search query
    const filtered = this.dataManager.employees.filter((emp) =>
      `${emp.firstName} ${emp.lastName} ${emp.email}`
        .toLowerCase()
        .includes(query)
    );

    // Render only the filtered results
    this.uiController.renderEmployees(filtered);
  }

  // Debounce function to delay execution while typing
  debounce(fn, delay) {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId); // Clear previous timer
      timeoutId = setTimeout(() => fn.apply(this, args), delay); // Call function after delay
    };
  }
}
