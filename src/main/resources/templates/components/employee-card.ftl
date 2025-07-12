<div class="employee-card" data-id="${employee.id}">
           
            <h3 class="employee-name">${employee.firstName} ${employee.lastName}</h3>
            <p class="employee-role">${employee.role}</p>
            <div class="department-badge">${employee.department}</div>
            <div class="card-actions">
                <button data-action="edit" class="btn-sm">Edit</button>
                <button data-action="delete" class="btn-sm btn-danger">Delete</button>
            </div>
</div>
