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
          id: Date.now() + 1,
          firstName: "Alice",
          lastName: "Smith",
          email: "alice@example.com",
          department: "HR",
          role: "Manager",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 2,
          firstName: "Bob",
          lastName: "Johnson",
          email: "bob@example.com",
          department: "IT",
          role: "Developer",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 3,
          firstName: "Charlie",
          lastName: "Brown",
          email: "charlie@example.com",
          department: "Finance",
          role: "Accountant",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 4,
          firstName: "Diana",
          lastName: "Miller",
          email: "diana@example.com",
          department: "Marketing",
          role: "SEO Specialist",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 5,
          firstName: "Ethan",
          lastName: "Davis",
          email: "ethan@example.com",
          department: "IT",
          role: "Backend Developer",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 6,
          firstName: "Fiona",
          lastName: "Garcia",
          email: "fiona@example.com",
          department: "HR",
          role: "Recruiter",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 7,
          firstName: "George",
          lastName: "Martinez",
          email: "george@example.com",
          department: "Sales",
          role: "Sales Executive",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 8,
          firstName: "Hannah",
          lastName: "Rodriguez",
          email: "hannah@example.com",
          department: "IT",
          role: "UI/UX Designer",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 9,
          firstName: "Ian",
          lastName: "Wilson",
          email: "ian@example.com",
          department: "Support",
          role: "Customer Support",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 10,
          firstName: "Jane",
          lastName: "Lee",
          email: "jane@example.com",
          department: "Finance",
          role: "Auditor",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 11,
          firstName: "Kyle",
          lastName: "Walker",
          email: "kyle@example.com",
          department: "IT",
          role: "Frontend Developer",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 12,
          firstName: "Laura",
          lastName: "Hall",
          email: "laura@example.com",
          department: "Marketing",
          role: "Content Writer",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 13,
          firstName: "Mike",
          lastName: "Allen",
          email: "mike@example.com",
          department: "Sales",
          role: "Sales Manager",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 14,
          firstName: "Nina",
          lastName: "Young",
          email: "nina@example.com",
          department: "IT",
          role: "Full Stack Developer",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 15,
          firstName: "Oscar",
          lastName: "Hernandez",
          email: "oscar@example.com",
          department: "Support",
          role: "Tech Support",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 16,
          firstName: "Paula",
          lastName: "King",
          email: "paula@example.com",
          department: "HR",
          role: "HR Assistant",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 17,
          firstName: "Quinn",
          lastName: "Wright",
          email: "quinn@example.com",
          department: "Legal",
          role: "Legal Advisor",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 18,
          firstName: "Rachel",
          lastName: "Lopez",
          email: "rachel@example.com",
          department: "Finance",
          role: "Budget Analyst",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 19,
          firstName: "Steve",
          lastName: "Hill",
          email: "steve@example.com",
          department: "IT",
          role: "DevOps Engineer",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 20,
          firstName: "Tina",
          lastName: "Scott",
          email: "tina@example.com",
          department: "Design",
          role: "Graphic Designer",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 21,
          firstName: "Umar",
          lastName: "Green",
          email: "umar@example.com",
          department: "Marketing",
          role: "Digital Marketer",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 22,
          firstName: "Vera",
          lastName: "Baker",
          email: "vera@example.com",
          department: "Admin",
          role: "Office Administrator",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 23,
          firstName: "Will",
          lastName: "Adams",
          email: "will@example.com",
          department: "IT",
          role: "Security Analyst",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 24,
          firstName: "Xena",
          lastName: "Nelson",
          email: "xena@example.com",
          department: "R&D",
          role: "Research Scientist",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 25,
          firstName: "Yara",
          lastName: "Carter",
          email: "yara@example.com",
          department: "HR",
          role: "Training Specialist",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 26,
          firstName: "Zack",
          lastName: "Mitchell",
          email: "zack@example.com",
          department: "IT",
          role: "Mobile Developer",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 27,
          firstName: "Amber",
          lastName: "Bell",
          email: "amber@example.com",
          department: "Finance",
          role: "Tax Consultant",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 28,
          firstName: "Brian",
          lastName: "Reed",
          email: "brian@example.com",
          department: "Support",
          role: "Helpdesk",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 29,
          firstName: "Clara",
          lastName: "Perez",
          email: "clara@example.com",
          department: "Design",
          role: "UX Researcher",
          avatar: "default-avatar.png",
        },
        {
          id: Date.now() + 30,
          firstName: "David",
          lastName: "Cook",
          email: "david@example.com",
          department: "Operations",
          role: "Operations Manager",
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
