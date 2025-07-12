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
        <div class="employee-card" data-id="">
            <h3 class="employee-name"></h3>
            <p class="employee-role"></p>
            <div class="department-badge"></div>
            <div class="card-actions">
                <button data-action="edit" class="btn-sm">Edit</button>
                <button data-action="delete" class="btn-sm btn-danger">Delete</button>
            </div>
        </div>
    </template>

    <script type="module" src="/js/app.js"></script>
</body>
</html>
