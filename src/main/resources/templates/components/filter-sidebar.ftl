<div class="filter-sidebar" id="filterSidebar">
    <div class="filter-header">
        <h3>Filter Employees</h3>
        <button class="btn-close" id="closeFilter" aria-label="Close filters">
            ×
        </button>
    </div>
    <div class="filter-content">
        <div class="form-group">
            <label class="form-label">First Name</label>
            <input type="text" 
                   class="form-input" 
                   id="filterFirstName" 
                   placeholder="Filter by first name">
        </div>
        <div class="form-group">
            <label class="form-label">Department</label>
            <select class="form-input" id="filterDepartment">
                <option value="">All Departments</option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
                <option value="Finance">Finance</option>
            </select>
        </div>
        <div class="form-group">
            <label class="form-label">Role</label>
            <select class="form-input" id="filterRole">
                <option value="">All Roles</option>
                <option value="Manager">Manager</option>
                <option value="Developer">Developer</option>
                <option value="Analyst">Analyst</option>
            </select>
        </div>
        <div class="filter-actions">
            <button class="btn btn-primary" id="applyFilters">
                Apply Filters
            </button>
            <button class="btn btn-secondary" id="resetFilters">
                Reset
            </button>
        </div>
    </div>
</div>