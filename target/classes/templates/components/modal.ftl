<div id="employeeModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <h2>Employee Details</h2>
            <button class="modal-close" aria-label="Close modal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
        <form id="employeeForm" class="modal-form">
            <div class="form-group">
                <label class="form-label">First Name</label>
                <input type="text" name="firstName" class="form-input" required>
            </div>
            <div class="form-group">
                <label class="form-label">Last Name</label>
                <input type="text" name="lastName" class="form-input" required>
            </div>
            <div class="form-group">
                <label class="form-label">Email</label>
                <input type="email" name="email" class="form-input" required>
            </div>
            <div class="form-group">
                <label class="form-label">Department</label>
                <input type="text" name="department" class="form-input" required>
            </div>
            <div class="form-group">
                <label class="form-label">Role</label>
                <input type="text" name="role" class="form-input" required>
            </div>
            <div class="form-group">
                <label class="form-label">Avatar URL</label>
                <input type="text" name="avatar" class="form-input" placeholder="Optional">
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-primary" id="saveEmployee">Save</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            </div>
        </form>
    </div>
</div>