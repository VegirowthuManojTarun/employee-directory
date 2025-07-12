// This class handles filtering, sorting, limiting, and autocomplete features for the employee list
export default class FilterManager {
  constructor(dataManager, uiController) {
    this.dataManager = dataManager; // To access employee data
    this.uiController = uiController; // To update UI

    // Get references to filter and control elements from the DOM
    this.searchInput = document.getElementById("searchInput");
    this.applyBtn = document.getElementById("applyFilters");
    this.resetBtn = document.getElementById("resetFilters");
    this.sortSelect = document.getElementById("sortSelect");
    this.showSelect = document.getElementById("showSelect");

    // When sort or show options are changed, apply those changes
    this.sortSelect.addEventListener("change", () => this.applyControls());
    this.showSelect.addEventListener("change", () => this.applyControls());

    // When Apply or Reset buttons are clicked, apply or clear filters
    this.applyBtn.addEventListener("click", () => this.applyFilters());
    this.resetBtn.addEventListener("click", () => this.resetFilters());

    // Set up the search box UI
    this.initializeAutocomplete();

    // Apply the default sort and limit settings initially
    this.applyControls();
  }

  // Sort and limit the number of employees shown
  applyControls() {
    const sortBy = this.sortSelect.value; // e.g., firstName or department
    const showLimit = parseInt(this.showSelect.value); // e.g., 5 or 10

    let employees = [...this.dataManager.employees]; // clone list to avoid mutation

    // If sorting is selected, sort alphabetically
    if (sortBy) {
      employees.sort((a, b) =>
        a[sortBy].toLowerCase().localeCompare(b[sortBy].toLowerCase())
      );
    }

    // Slice the list to only show the limited number of employees
    const limitedEmployees = employees.slice(0, showLimit);

    // Render them on screen
    this.uiController.renderEmployees(limitedEmployees);
  }

  // Create a wrapper div for styling autocomplete (if needed)
  initializeAutocomplete() {
    const searchWrapper = document.createElement("div");
    searchWrapper.className = "search-wrapper";
    this.searchInput.parentNode.insertBefore(searchWrapper, this.searchInput);
    searchWrapper.appendChild(this.searchInput);
  }

  // Apply filters based on first name, last name, department, and role
  applyFilters() {
    const firstNameVal = document
      .getElementById("filterFirstName")
      .value.toLowerCase();
    const lastNameVal = document
      .getElementById("filterLastName")
      .value.toLowerCase();
    const departmentVal = document.getElementById("filterDepartment").value;
    const roleVal = document.getElementById("filterRole").value;

    const knownDepartments = ["HR", "IT", "Finance"];
    const knownRoles = ["Manager", "Developer", "Analyst"];

    const filtered = this.dataManager.employees.filter((emp) => {
      const matchesFirstName =
        firstNameVal === "" ||
        emp.firstName.toLowerCase().includes(firstNameVal);

      const matchesLastName =
        lastNameVal === "" || emp.lastName.toLowerCase().includes(lastNameVal);

      const matchesDepartment =
        departmentVal === "" ||
        (departmentVal === "other"
          ? !knownDepartments.includes(emp.department)
          : emp.department === departmentVal);

      const matchesRole =
        roleVal === "" ||
        (roleVal === "other"
          ? !knownRoles.includes(emp.role)
          : emp.role === roleVal);

      // Return only those employees that match all selected criteria
      return (
        matchesFirstName && matchesLastName && matchesDepartment && matchesRole
      );
    });

    // Show the filtered list in the UI
    this.uiController.renderEmployees(filtered);
  }

  // Reset all filters to default (blank)
  resetFilters() {
    document.getElementById("filterFirstName").value = "";
    document.getElementById("filterLastName").value = "";
    document.getElementById("filterDepartment").value = "";
    document.getElementById("filterRole").value = "";

    // Show all employees again
    this.uiController.renderEmployees();
  }

  // Update autocomplete suggestions as the user types
  updateSuggestions() {
    const value = this.searchInput.value.toLowerCase();

    // Clear suggestions if input is empty
    if (!value) {
      document.querySelector(".suggestions-list").innerHTML = "";
      return;
    }

    // Find matching employees (first name, last name, or email)
    const suggestions = this.dataManager.employees
      .filter(
        (emp) =>
          emp.firstName.toLowerCase().includes(value) ||
          emp.lastName.toLowerCase().includes(value) ||
          emp.email.toLowerCase().includes(value)
      )
      .slice(0, 5); // Limit to top 5 matches

    // Create HTML list items for the suggestions
    const suggestionsList = document.querySelector(".suggestions-list");
    suggestionsList.innerHTML = suggestions
      .map(
        (emp) => `
            <li class="suggestion-item" data-id="${emp.id}">
                <strong>${emp.firstName} ${emp.lastName}</strong>
                <span>${emp.department}</span>
            </li>
        `
      )
      .join("");
  }
}

// A helper function to delay execution (used for debouncing user input)
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
