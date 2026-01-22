# Quality Automation - AI Analytics Platform

An end-to-end HTML layout for agentic AI-based quality automation system.

## Features

### 1. Multiple Quality Dashboards
- **Overview Dashboard**: Quality score distribution, top performers, and areas needing improvement
- **Trends Dashboard**: Historical quality trends and performance metrics
- **Agent Performance**: Detailed agent-level analytics and comparisons
- **Category Analysis**: Deep dive into specific quality categories

### 2. Sentiment & Emotional Analysis
- Real-time sentiment analysis for all calls
- Emotional breakdown (Happy, Satisfied, Neutral, Frustrated, Angry)
- Sentiment trends over time
- AI-powered insights and recommendations
- Call-level sentiment tracking with confidence scores

### 3. Form Designer
- Drag-and-drop interface for creating quality evaluation forms
- Multiple field types (Rating Scale, Yes/No, Text, Multiple Choice)
- Section-based organization with configurable weights
- Form versioning and template library
- AI auto-scoring capabilities

### 4. Call Level Audit
- Comprehensive call listing with advanced filters
- Search by Call ID, Agent, Customer, or other criteria
- Interactive transcript viewer with AI analysis
- Sentiment indicators and quality scores
- Bulk review capabilities
- Real-time AI annotations on transcripts

### 5. TNI (Training Needs Identification) Module
- Automatic identification of parameters not processing well
- Performance gap analysis
- Training action plan creation and tracking
- Progress monitoring and closed-loop tracking
- Priority-based recommendations
- Agent enrollment and training scheduling

### 6. Configuration Panel
- **Auto Sync**: Configure automatic data synchronization schedules
- **Integrations**: Connect with CRM, call recording, and other systems
- **AI Settings**: Configure AI analysis parameters and thresholds
- **Notifications**: Manage email and in-app notifications
- **User Management**: Control user access and permissions

## File Structure

```
ytautomation/
├── index.html                  # Main dashboard
├── dashboards.html             # Quality score dashboards
├── sentiment-analysis.html     # Sentiment & emotional analysis
├── form-designer.html          # Quality evaluation form designer
├── call-audit.html            # Call level audit with transcripts
├── tni-module.html            # Training needs identification
├── configuration.html         # System configuration
├── css/
│   └── styles.css             # Main stylesheet
├── js/
│   └── app.js                 # JavaScript functionality
└── data/
    └── sample-data.json       # Sample data structure
```

## Getting Started

1. Open `index.html` in a modern web browser
2. Navigate through different modules using the sidebar menu
3. All features are fully functional with mock data

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Technology Stack

- HTML5
- CSS3 (with Flexbox and Grid)
- Vanilla JavaScript (ES6+)
- Responsive design for mobile and desktop

## Key Components

### Navigation
- Fixed sidebar with icon-based menu
- Active state indication
- Smooth transitions

### Dashboards
- Tab-based navigation for different views
- Responsive grid layouts
- Interactive charts (placeholders for charting libraries)

### Data Tables
- Sortable columns
- Pagination
- Bulk actions
- Advanced filtering

### Modals
- Transcript viewer with AI annotations
- Responsive and accessible
- Keyboard navigation support

### Forms
- Professional form designer interface
- Dynamic field addition
- Weighted scoring system

## Customization

### Colors
The color scheme can be customized in `css/styles.css`:
- Primary: `#667eea` (Purple gradient)
- Success: `#27ae60` (Green)
- Warning: `#f39c12` (Orange)
- Danger: `#e74c3c` (Red)

### Layout
Responsive breakpoints:
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

## Future Enhancements

- Integration with real data sources
- Chart visualization library (Chart.js, D3.js)
- Real-time data updates
- Export functionality
- Advanced reporting
- Role-based access control
- Multi-language support

## License

This project is created for demonstration purposes.

## Support

For questions or issues, please refer to the project documentation.