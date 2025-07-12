export default class DataManager {
  constructor() {
    this.storageKey = "employees";
    this.employees = this.loadEmployees();
  }

  loadEmployees() {
    const stored = localStorage.getItem(this.storageKey);
    if (stored) {
      return JSON.parse(stored);
    } else {
      const initialData = [
        {
          id: Date.now(),
          firstName: "Alice",
          lastName: "Smith",
          email: "alice@example.com",
          department: "HR",
          role: "Manager",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 1,
          firstName: "Bob",
          lastName: "Johnson",
          email: "bob@example.com",
          department: "IT",
          role: "Developer",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 1,
          firstName: "Bob",
          lastName: "Johnson",
          email: "bob@example.com",
          department: "IT",
          role: "Developer",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 1,
          firstName: "Bob",
          lastName: "Johnson",
          email: "bob@example.com",
          department: "IT",
          role: "Developer",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 1,
          firstName: "Bob",
          lastName: "Johnson",
          email: "bob@example.com",
          department: "IT",
          role: "Developer",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 1,
          firstName: "Bob",
          lastName: "Johnson",
          email: "bob@example.com",
          department: "IT",
          role: "Developer",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 1,
          firstName: "Bob",
          lastName: "Johnson",
          email: "bob@example.com",
          department: "IT",
          role: "Developer",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 1,
          firstName: "Bob",
          lastName: "Johnson",
          email: "bob@example.com",
          department: "IT",
          role: "Developer",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 1,
          firstName: "Bob",
          lastName: "Johnson",
          email: "bob@example.com",
          department: "IT",
          role: "Developer",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 1,
          firstName: "Bob",
          lastName: "Johnson",
          email: "bob@example.com",
          department: "IT",
          role: "Developer",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 1,
          firstName: "Bob",
          lastName: "Johnson",
          email: "bob@example.com",
          department: "IT",
          role: "Developer",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 1,
          firstName: "Bob",
          lastName: "Johnson",
          email: "bob@example.com",
          department: "IT",
          role: "Developer",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 1,
          firstName: "Bob",
          lastName: "Johnson",
          email: "bob@example.com",
          department: "IT",
          role: "Developer",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 1,
          firstName: "Bob",
          lastName: "Johnson",
          email: "bob@example.com",
          department: "IT",
          role: "Developer",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 1,
          firstName: "Bob",
          lastName: "Johnson",
          email: "bob@example.com",
          department: "IT",
          role: "Developer",
          avatar: "default-avatar.png",
        },
      ];
      localStorage.setItem(this.storageKey, JSON.stringify(initialData));
      return initialData;
    }
  }

  saveEmployees() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.employees));
  }

  async fetchEmployees() {
    return this.employees;
  }

  async addEmployee(employee) {
    employee.id = Date.now();
    this.employees.push(employee);
    this.saveEmployees();
    return employee;
  }

  async updateEmployee(id, updatedEmployee) {
    const index = this.employees.findIndex((emp) => emp.id == id);
    if (index !== -1) {
      updatedEmployee.id = parseInt(id);
      this.employees[index] = updatedEmployee;
      this.saveEmployees();
      return updatedEmployee;
    }
    return null;
  }

  async deleteEmployee(id) {
    this.employees = this.employees.filter((emp) => emp.id != id);
    this.saveEmployees();
    return true;
  }
}
