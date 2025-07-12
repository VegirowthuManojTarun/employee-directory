// This class controls everything related to the UI (modals, rendering employee cards, animations)
export default class UIController {
  constructor(dataManager) {
    this.dataManager = dataManager;

    // Get all the important DOM elements
    this.grid = document.getElementById("employeeGrid");
    this.modal = document.getElementById("employeeModal");
    this.modalForm = document.getElementById("employeeForm");
    this.saveButton = document.getElementById("saveEmployee");
    this.addBtn = document.getElementById("addEmployeeBtn");

    this.editingEmployeeId = null; // Tracks if we're editing (vs. adding) an employee

    // Setup all event listeners and modal behavior
    this.initializeEventListeners();
    this.initModal();
  }

  // Set up all the buttons and click handlers
  initializeEventListeners() {
    // Clicking on a card toggles flip animation
    this.grid.addEventListener("click", (e) => {
      const card = e.target.closest(".employee-card");
      if (card && !e.target.dataset.action) {
        card.classList.toggle("is-flipped");
      }
    });

    // Check if clicked on an action button (edit/delete)
    this.grid.addEventListener("click", (e) => {
      const action = e.target.dataset.action;
      const card = e.target.closest(".employee-card");
      if (action && card) {
        const employeeId = card.dataset.id;
        if (action === "edit") this.showEditModal(employeeId);
        if (action === "delete") this.deleteEmployee(employeeId);
      }
    });

    // Clicking "Add Employee" opens the modal with a blank form
    this.addBtn.addEventListener("click", () => {
      this.editingEmployeeId = null;
      this.modalForm.reset();
      this.modal.style.display = "block";
    });

    // Submit the form (for both Add and Edit)
    this.modalForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Built-in browser validation
      if (!this.modalForm.checkValidity()) {
        this.modalForm.reportValidity();
        return;
      }

      // Extract data from form
      const formData = new FormData(this.modalForm);
      const employee = Object.fromEntries(formData.entries());

      // Update or add employee based on mode
      if (this.editingEmployeeId) {
        await this.dataManager.updateEmployee(this.editingEmployeeId, employee);
      } else {
        await this.dataManager.addEmployee(employee);
      }

      // Close modal and refresh the employee list
      this.modal.style.display = "none";
      await this.renderEmployees();
    });
  }

  // Render the list of employees on the page
  async renderEmployees(employees = null) {
    // If no list is passed, fetch all employees
    if (!employees) {
      employees = await this.dataManager.fetchEmployees();
    }

    const template = document.getElementById("employeeCardTemplate");
    this.grid.innerHTML = ""; // Clear current UI

    // Loop over each employee and render their card
    employees.forEach((employee) => {
      const clone = template.content.cloneNode(true); // Clone the HTML <template>
      const card = clone.querySelector(".employee-card");

      // Fill in employee data
      card.dataset.id = employee.id;
      card.querySelector(
        ".employee-name"
      ).textContent = `${employee.firstName} ${employee.lastName}`;
      card.querySelector(".employee-role").textContent = employee.role;
      card.querySelector(".employee-email").textContent = employee.email;
      card.querySelector(".department-badge").textContent = employee.department;

      this.grid.appendChild(clone); // Add to DOM
    });

    // Add fade-in animations when scrolling
    this.initializeAnimations();
  }

  // Show the modal pre-filled with data for editing
  async showEditModal(id) {
    const employees = await this.dataManager.fetchEmployees();
    const emp = employees.find((e) => e.id == id);
    if (emp) {
      this.editingEmployeeId = id;
      this.modalForm.firstName.value = emp.firstName;
      this.modalForm.lastName.value = emp.lastName;
      this.modalForm.email.value = emp.email;
      this.modalForm.department.value = emp.department;
      this.modalForm.role.value = emp.role;
      this.modal.style.display = "block";
    }
  }

  // Delete an employee and refresh the list
  async deleteEmployee(id) {
    if (confirm("Are you sure you want to delete this employee?")) {
      await this.dataManager.deleteEmployee(id);
      await this.renderEmployees();
    }
  }

  // Setup modal close buttons and background click-to-close
  initModal() {
    const closeBtn = this.modal.querySelector(".modal-close");
    const cancelBtn = document.getElementById("cancelModalBtn");

    if (cancelBtn) {
      cancelBtn.addEventListener("click", () => {
        this.modalForm.reset();
        this.modal.style.display = "none";
      });
    }

    closeBtn.addEventListener("click", () => {
      this.modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target == this.modal) {
        this.modal.style.display = "none";
      }
    });
  }

  // Optional: Fetch template by ID (if dynamically needed)
  async fetchTemplate(name) {
    const el = document.querySelector(`#employeeCardTemplate`);
    return el ? el.innerHTML : "<div>Template not found</div>";
  }

  // Replace placeholders in template with real employee data (not used here directly)
  interpolateTemplate(template, data) {
    return template.replace(/\${(\w+)}/g, (match, key) => data[key] || "");
  }

  // Animates cards when they appear into view
  initializeAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    });

    // Watch each card as it appears
    document.querySelectorAll(".employee-card").forEach((card) => {
      observer.observe(card);
    });
  }
}
