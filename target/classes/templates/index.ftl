<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Employee Directory</title>
    <link rel="stylesheet" href="/css/base.css" />
    <link rel="stylesheet" href="/css/components.css" />
    <link rel="stylesheet" href="/css/animations.css" />
    <link rel="stylesheet" href="/css/utilities.css" />
</head>
<body>
    <div class="app-container">
        <#include "components/header.ftl">
        <main class="main-content">
            <#include "components/controls.ftl">
            <div id="employeeGrid" class="employee-grid">
                <!-- Employees will be rendered here by JS -->
            </div>
        </main>
        <#include "components/filter-sidebar.ftl">
        <#include "components/modal.ftl">
        <#include "components/footer.ftl">
    </div>

    <!-- JS Template for Employee Card -->
   <template id="employeeCardTemplate">
  <div class="employee-card">
    <div class="card-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    </div>
    <div class="card-content">
      <h3 class="employee-name"></h3>
      <p class="employee-role"></p>
      <p class="employee-email"></p>
      <span class="department-badge"></span>
    </div>
    <div class="card-actions">
      <button data-action="edit" class="btn-sm">Edit</button>
      <button data-action="delete" class="btn-sm btn-danger">Delete</button>
    </div>
  </div>
</template>


    <script type="module" src="/js/app.js"></script>
</body>
</html>
