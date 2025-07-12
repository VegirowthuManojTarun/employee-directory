<div class="controls">
    <div class="controls-left">
        <div class="form-group">
            <label for="sortSelect" class="form-label">Sort by</label>
            <div class="select-wrapper">
                <select id="sortSelect" class="form-select">
                    <option value="">Select sorting</option>
                    <option value="firstName">First Name</option>
                    <option value="lastName">Last Name</option>
                    <option value="department">Department</option>
                </select>
                <svg class="select-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M6 9l6 6 6-6"/>
                </svg>
            </div>
        </div>
        <div class="form-group">
            <label for="showSelect" class="form-label">Show</label>
            <div class="select-wrapper">
                <select id="showSelect" class="form-select">
                    <option value="10">10 per page</option>
                    <option value="25">25 per page</option>
                    <option value="50">50 per page</option>
                    <option value="100">100 per page</option>
                </select>
                <svg class="select-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M6 9l6 6 6-6"/>
                </svg>
            </div>
        </div>
    </div>
    <div class="controls-right">
        <button id="filterToggle" class="btn btn-secondary">
            <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/>
            </svg>
            Filters
        </button>
    </div>
</div>