export default class UIController {
  constructor(dataManager) {
    this.dataManager = dataManager;
    this.grid = document.getElementById("employeeGrid");
    this.modal = document.getElementById("employeeModal");
    this.modalForm = document.getElementById("employeeForm");
    this.saveButton = document.getElementById("saveEmployee");
    this.addBtn = document.getElementById("addEmployeeBtn");

    this.editingEmployeeId = null;

    this.initializeEventListeners();
    this.initModal();
  }

  initializeEventListeners() {
    // Card flip
    this.grid.addEventListener("click", (e) => {
      const card = e.target.closest(".employee-card");
      if (card && !e.target.dataset.action) {
        card.classList.toggle("is-flipped");
      }
    });

    // Action handlers
    this.grid.addEventListener("click", (e) => {
      const action = e.target.dataset.action;
      const card = e.target.closest(".employee-card");
      if (action && card) {
        const employeeId = card.dataset.id;
        if (action === "edit") this.showEditModal(employeeId);
        if (action === "delete") this.deleteEmployee(employeeId);
      }
    });

    // Add button opens modal
    this.addBtn.addEventListener("click", () => {
      this.editingEmployeeId = null;
      this.modalForm.reset();
      this.modal.style.display = "block";
    });

    // Save (Add or Edit)
    this.saveButton.addEventListener("click", async (e) => {
      e.preventDefault();
      const formData = new FormData(this.modalForm);
      const employee = Object.fromEntries(formData.entries());

      if (this.editingEmployeeId) {
        await this.dataManager.updateEmployee(this.editingEmployeeId, employee);
      } else {
        await this.dataManager.addEmployee(employee);
      }

      this.modal.style.display = "none";
      await this.renderEmployees();
    });
  }
  async renderEmployees(employees = null) {
    if (!employees) {
      employees = await this.dataManager.fetchEmployees();
    }
    const template = document.getElementById("employeeCardTemplate");
    this.grid.innerHTML = "";

    employees.forEach((employee) => {
      const clone = template.content.cloneNode(true);
      const card = clone.querySelector(".employee-card");

      card.dataset.id = employee.id;
      card.querySelector(
        ".employee-name"
      ).textContent = `${employee.firstName} ${employee.lastName}`;
      card.querySelector(".employee-role").textContent = employee.role;
      card.querySelector(".department-badge").textContent = employee.department;

      this.grid.appendChild(clone);
    });

    this.initializeAnimations();
  }

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

  async deleteEmployee(id) {
    if (confirm("Are you sure you want to delete this employee?")) {
      await this.dataManager.deleteEmployee(id);
      await this.renderEmployees();
    }
  }

  initModal() {
    const closeBtn = this.modal.querySelector(".modal-close");
    closeBtn.addEventListener("click", () => {
      this.modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target == this.modal) {
        this.modal.style.display = "none";
      }
    });
  }

  async fetchTemplate(name) {
    const el = document.querySelector(`#employeeCardTemplate`);
    return el ? el.innerHTML : "<div>Template not found</div>";
  }

  interpolateTemplate(template, data) {
    return template.replace(/\${(\w+)}/g, (match, key) => data[key] || "");
  }

  initializeAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    });

    document.querySelectorAll(".employee-card").forEach((card) => {
      observer.observe(card);
    });
  }
}
