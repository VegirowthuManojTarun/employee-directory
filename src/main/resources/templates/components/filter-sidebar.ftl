<div class="filter-sidebar" id="filterSidebar">
    <div class="filter-header">
        <h3>
            <svg class="filter-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/>
            </svg>
            Filter Employees
        </h3>
        <button class="btn-close" id="closeFilter" aria-label="Close filters">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
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
            <div class="select-wrapper">
                <select class="form-select" id="filterDepartment">
                    <option value="">All Departments</option>
                    <option value="HR">HR</option>
                    <option value="IT">IT</option>
                    <option value="Finance">Finance</option>
                </select>
                <svg class="select-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M6 9l6 6 6-6"/>
                </svg>
            </div>
        </div>
        <div class="form-group">
            <label class="form-label">Role</label>
            <div class="select-wrapper">
                <select class="form-select" id="filterRole">
                    <option value="">All Roles</option>
                    <option value="Manager">Manager</option>
                    <option value="Developer">Developer</option>
                    <option value="Analyst">Analyst</option>
                </select>
                <svg class="select-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M6 9l6 6 6-6"/>
                </svg>
            </div>
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