export default class FilterManager {
  constructor(dataManager, uiController) {
    this.dataManager = dataManager;
    this.uiController = uiController;
    this.searchInput = document.getElementById("searchInput");
    this.applyBtn = document.getElementById("applyFilters");
    this.resetBtn = document.getElementById("resetFilters");
    this.sortSelect = document.getElementById("sortSelect");
    this.showSelect = document.getElementById("showSelect");

    this.sortSelect.addEventListener("change", () => this.applyControls());
    this.showSelect.addEventListener("change", () => this.applyControls());

    this.applyBtn.addEventListener("click", () => this.applyFilters());
    this.resetBtn.addEventListener("click", () => this.resetFilters());

    this.initializeAutocomplete();
    this.applyControls();
  }

  applyControls() {
    const sortBy = this.sortSelect.value;
    const showLimit = parseInt(this.showSelect.value);

    let employees = [...this.dataManager.employees]; // clone original list

    // Apply sorting (if any)
    if (sortBy) {
      employees.sort((a, b) =>
        a[sortBy].toLowerCase().localeCompare(b[sortBy].toLowerCase())
      );
    }

    // ✅ Apply limit
    const limitedEmployees = employees.slice(0, showLimit);

    // Render only the limited list
    this.uiController.renderEmployees(limitedEmployees);
  }

  initializeAutocomplete() {
    const searchWrapper = document.createElement("div");
    searchWrapper.className = "search-wrapper";
    this.searchInput.parentNode.insertBefore(searchWrapper, this.searchInput);
    searchWrapper.appendChild(this.searchInput);
  }

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
      return matchesFirstName && matchesDepartment && matchesRole;
    });

    this.uiController.renderEmployees(filtered);
  }
  resetFilters() {
    document.getElementById("filterFirstName").value = "";
    document.getElementById("filterDepartment").value = "";
    document.getElementById("filterRole").value = "";
    this.uiController.renderEmployees(); // render all
  }

  updateSuggestions() {
    const value = this.searchInput.value.toLowerCase();
    if (!value) {
      document.querySelector(".suggestions-list").innerHTML = "";
      return;
    }

    const suggestions = this.dataManager.employees
      .filter(
        (emp) =>
          emp.firstName.toLowerCase().includes(value) ||
          emp.lastName.toLowerCase().includes(value) ||
          emp.email.toLowerCase().includes(value)
      )
      .slice(0, 5);

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
