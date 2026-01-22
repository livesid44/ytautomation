// Quality Automation - Main JavaScript

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeModals();
    initializeTranscriptViewer();
    initializeFormDesigner();
    initializeFilters();
    initializeToggles();
});

// Tab Navigation
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// Modal Functionality
function initializeModals() {
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal-close');

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.classList.remove('active');
            }
        });
    });

    // Close modal when clicking outside
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => modal.classList.remove('active'));
        }
    });
}

// Transcript Viewer
function initializeTranscriptViewer() {
    const viewButtons = document.querySelectorAll('.view-transcript');
    const modal = document.getElementById('transcriptModal');

    if (!modal) return;

    viewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const callId = this.getAttribute('data-call');
            
            // Get call data from the row
            const row = this.closest('tr');
            if (row) {
                const callIdText = row.querySelector('td:nth-child(2)').textContent;
                const agent = row.querySelector('td:nth-child(4)').textContent;
                const customer = row.querySelector('td:nth-child(5)').textContent;
                const dateTime = row.querySelector('td:nth-child(3)').textContent;
                const duration = row.querySelector('td:nth-child(6)').textContent;
                const score = row.querySelector('td:nth-child(7) .score-badge').textContent;
                const sentiment = row.querySelector('td:nth-child(8) .sentiment-badge').textContent;

                // Update modal content
                document.getElementById('modalCallId').textContent = callIdText;
                document.getElementById('modalAgent').textContent = agent;
                document.getElementById('modalCustomer').textContent = customer;
                document.getElementById('modalDateTime').textContent = dateTime;
                document.getElementById('modalDuration').textContent = duration;
                document.getElementById('modalScore').textContent = score;
                document.getElementById('modalSentiment').textContent = sentiment;

                // Update badge classes
                const scoreElem = document.getElementById('modalScore');
                const sentimentElem = document.getElementById('modalSentiment');
                
                scoreElem.className = row.querySelector('td:nth-child(7) .score-badge').className;
                sentimentElem.className = row.querySelector('td:nth-child(8) .sentiment-badge').className;
            }
            
            // Show modal
            modal.classList.add('active');
        });
    });
}

// Form Designer
function initializeFormDesigner() {
    // Select all form items
    const formItems = document.querySelectorAll('.form-item');
    
    formItems.forEach(item => {
        item.addEventListener('click', function() {
            formItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Add field button
    const addFieldButtons = document.querySelectorAll('.form-field + .btn-secondary');
    addFieldButtons.forEach(button => {
        if (button.textContent.includes('Add Field')) {
            button.addEventListener('click', function() {
                console.log('Add new field to section');
                // In a real application, this would add a new field dynamically
                alert('Field designer would open here to add a new field');
            });
        }
    });

    // Add section button
    const addSectionButton = document.querySelector('.form-sections > .btn-primary');
    if (addSectionButton) {
        addSectionButton.addEventListener('click', function() {
            console.log('Add new section');
            alert('New section would be added here');
        });
    }

    // Form field edit buttons
    const editButtons = document.querySelectorAll('.field-header .btn-icon');
    editButtons.forEach(button => {
        if (button.textContent === '✏️') {
            button.addEventListener('click', function() {
                console.log('Edit field');
                alert('Field editor would open here');
            });
        }
    });
}

// Filters
function initializeFilters() {
    const applyFilterButtons = document.querySelectorAll('.filters-bar .btn-secondary');
    
    applyFilterButtons.forEach(button => {
        if (button.textContent.includes('Apply')) {
            button.addEventListener('click', function() {
                console.log('Applying filters');
                // In a real application, this would filter the table data
                alert('Filters would be applied to the data');
            });
        }
    });

    const clearFilterButtons = document.querySelectorAll('.filters-bar .btn-link');
    clearFilterButtons.forEach(button => {
        if (button.textContent.includes('Clear')) {
            button.addEventListener('click', function() {
                console.log('Clearing filters');
                // Reset all filter inputs
                const filterBar = this.closest('.filters-bar');
                if (filterBar) {
                    const inputs = filterBar.querySelectorAll('input, select');
                    inputs.forEach(input => {
                        if (input.tagName === 'SELECT') {
                            input.selectedIndex = 0;
                        } else {
                            input.value = '';
                        }
                    });
                }
            });
        }
    });
}

// Toggle Switches
function initializeToggles() {
    const toggleSwitches = document.querySelectorAll('.toggle-switch input');
    
    toggleSwitches.forEach(toggle => {
        toggle.addEventListener('change', function() {
            console.log('Toggle changed:', this.checked);
            // In a real application, this would save the setting
        });
    });
}

// Bulk Actions
function initializeBulkActions() {
    const selectAllCheckbox = document.getElementById('selectAll');
    
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', function() {
            const checkboxes = document.querySelectorAll('.calls-table tbody input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                checkbox.checked = this.checked;
            });
        });
    }
}

// Export Functions
function exportData(format) {
    console.log('Exporting data in format:', format);
    alert('Data would be exported as ' + format);
}

// Training Plan Creation
function createTrainingPlan(formData) {
    console.log('Creating training plan:', formData);
    alert('Training plan would be created with this data');
}

// Sync Operations
function runSyncNow() {
    console.log('Running manual sync');
    alert('Manual sync would be triggered');
}

// Navigation Helper
function navigateTo(page) {
    window.location.href = page;
}

// Initialize bulk actions when DOM is ready
document.addEventListener('DOMContentLoaded', initializeBulkActions);

// Range Slider Value Display
document.addEventListener('DOMContentLoaded', function() {
    const rangeSliders = document.querySelectorAll('.range-slider');
    
    rangeSliders.forEach(slider => {
        const valueDisplay = slider.nextElementSibling;
        if (valueDisplay && valueDisplay.classList.contains('range-value')) {
            slider.addEventListener('input', function() {
                valueDisplay.textContent = this.value + '%';
            });
        }
    });
});

// Form Submissions
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted');
            alert('Form would be submitted in a real application');
        });
    });
});

// Create New Form
function createNewForm() {
    console.log('Creating new form');
    alert('New form designer would open here');
}

// View Details
function viewDetails(type, id) {
    console.log('Viewing details for', type, id);
    alert('Details view would open for ' + type + ' ' + id);
}

// Create Action Plan
function createActionPlan(parameter) {
    console.log('Creating action plan for parameter:', parameter);
    alert('Action plan creator would open for: ' + parameter);
}

// Initialize action plan buttons
document.addEventListener('DOMContentLoaded', function() {
    const createPlanButtons = document.querySelectorAll('.create-plan');
    
    createPlanButtons.forEach(button => {
        button.addEventListener('click', function() {
            const param = this.getAttribute('data-param');
            createActionPlan(param);
        });
    });
});

// Initialize view details buttons
document.addEventListener('DOMContentLoaded', function() {
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const param = this.getAttribute('data-param');
            viewDetails('parameter', param);
        });
    });
});

// Chart initialization (placeholder - would use Chart.js or similar in production)
function initializeCharts() {
    console.log('Charts would be initialized here with a library like Chart.js');
}

// Call charts initialization when DOM is ready
document.addEventListener('DOMContentLoaded', initializeCharts);

// Notification system
function showNotification(message, type = 'info') {
    console.log('Notification:', type, message);
    // In a real application, this would show a toast notification
    alert(message);
}

// Export report
function exportReport(format) {
    console.log('Exporting report as', format);
    showNotification('Report exported successfully!', 'success');
}

// Save configuration
function saveConfiguration() {
    console.log('Saving configuration');
    showNotification('Configuration saved successfully!', 'success');
}

// Add user
function addUser() {
    console.log('Adding new user');
    alert('User creation form would open here');
}

// Initialize all export buttons
document.addEventListener('DOMContentLoaded', function() {
    const exportButtons = document.querySelectorAll('[class*="btn"]');
    
    exportButtons.forEach(button => {
        if (button.textContent.includes('Export')) {
            button.addEventListener('click', function() {
                exportReport('PDF');
            });
        }
    });
});

// Save all changes button
document.addEventListener('DOMContentLoaded', function() {
    const saveButtons = document.querySelectorAll('.btn-primary');
    
    saveButtons.forEach(button => {
        if (button.textContent.includes('Save All Changes')) {
            button.addEventListener('click', function() {
                saveConfiguration();
            });
        }
    });
});

// Console log for debugging
console.log('Quality Automation System - JavaScript Loaded');
