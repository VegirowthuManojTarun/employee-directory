// This class handles all employee data logic using localStorage.
export default class DataManager {
  constructor() {
    // Key used to store and retrieve data from localStorage
    this.storageKey = "employees";

    // Load employees from localStorage when the app starts
    this.employees = this.loadEmployees();
  }

  // Load employees from localStorage or use default sample data
  loadEmployees() {
    const stored = localStorage.getItem(this.storageKey);

    // If data already exists in localStorage, return it
    if (stored) {
      return JSON.parse(stored);
    } else {
      // If no data, initialize with sample employee data
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
      ];

      // Save the initial data to localStorage for future use
      localStorage.setItem(this.storageKey, JSON.stringify(initialData));
      return initialData;
    }
  }

  // Save the current employee list to localStorage
  saveEmployees() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.employees));
  }

  // Fetch the list of employees (simulate async call)
  async fetchEmployees() {
    return this.employees;
  }

  // Add a new employee to the list
  async addEmployee(employee) {
    // Assign a unique ID based on timestamp
    employee.id = Date.now();
    this.employees.push(employee);
    this.saveEmployees();
    return employee;
  }

  // Update an existing employee based on their ID
  async updateEmployee(id, updatedEmployee) {
    const index = this.employees.findIndex((emp) => emp.id == id);
    if (index !== -1) {
      updatedEmployee.id = parseInt(id); // Make sure ID is still a number
      this.employees[index] = updatedEmployee;
      this.saveEmployees();
      return updatedEmployee;
    }
    return null; // If employee not found
  }

  // Delete an employee by ID
  async deleteEmployee(id) {
    this.employees = this.employees.filter((emp) => emp.id != id);
    this.saveEmployees();
    return true;
  }
}
