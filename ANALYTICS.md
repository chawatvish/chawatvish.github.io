# Analytics Tracking Documentation

This documentation outlines all the tracking events implemented in the portfolio website.

## 📊 Firebase Analytics Events

### Contact Channel Tracking

All contact channel clicks are tracked with detailed information:

#### Email Contact
- **Event**: `contact_click` and `email_click`
- **Triggered when**: User clicks "📧 Email Me" button
- **Data captured**:
  - `contact_channel`: 'email'
  - `contact_type`: 'click'
  - `url`: 'mailto:chawatvish.wo@gmail.com'
  - `source`: 'contact_section'
  - `timestamp`: ISO timestamp

#### Social Media Links
- **Event**: `contact_click` and `{platform}_click`
- **Triggered when**: User clicks any social media link
- **Platforms tracked**:
  - Twitter/X (`twitter_click`)
  - LinkedIn (`linkedin_click`)
  - GitHub (`github_click`)
  - Medium (`medium_click`)
- **Data captured**:
  - `contact_channel`: platform name
  - `contact_type`: 'social_click'
  - `url`: social media URL
  - `source`: 'contact_section'
  - `timestamp`: ISO timestamp

### Navigation Tracking

#### Section Navigation
- **Event**: `navigation_click`
- **Triggered when**: User clicks navigation menu items
- **Data captured**:
  - `section`: target section (home, about, work, skills, projects, contact)
  - `timestamp`: ISO timestamp

#### Theme Toggle
- **Event**: `button_click`
- **Triggered when**: User toggles between light/dark theme
- **Data captured**:
  - `button_type`: 'theme_toggle'
  - `button_label`: 'switch_to_light' or 'switch_to_dark'
  - `timestamp`: ISO timestamp

### Call-to-Action Tracking

#### Hero Section CTA
- **Event**: `button_click`
- **Triggered when**: User clicks "Contact Me" button in hero section
- **Data captured**:
  - `button_type`: 'cta'
  - `button_label`: 'Contact Me'
  - `source`: 'hero_section'
  - `action`: 'scroll_to_contact'
  - `timestamp`: ISO timestamp

### Project Interaction Tracking

#### Project Clicks
- **Event**: `project_click`
- **Triggered when**: User clicks project links (overlay or bottom links)
- **Data captured**:
  - `project_title`: name of the project
  - `project_link`: project URL
  - `source`: 'overlay' or 'bottom_link'
  - `technologies`: comma-separated list of tech stack
  - `timestamp`: ISO timestamp

### Skills Interaction Tracking

#### Skill Card Interactions
- **Event**: `skill_interaction`
- **Triggered when**: User hovers or clicks skill cards
- **Data captured**:
  - `skill_name`: name of the skill
  - `interaction_type`: 'hover' or 'click'
  - `timestamp`: ISO timestamp

### Page Analytics

#### Page Views
- **Event**: `page_view`
- **Triggered when**: User loads the homepage
- **Data captured**:
  - `page_title`: 'portfolio_home'
  - `timestamp`: ISO timestamp

## 🛠️ Development Tools

### Analytics Dashboard (Development Only)
A real-time analytics dashboard is available in development mode:
- **Location**: Bottom-right corner (📊 button)
- **Features**:
  - Live event tracking display
  - Event history (last 20 events)
  - Event data inspection
  - Clear events functionality
- **Visibility**: Development mode only

## 📈 Firebase Console

All events can be monitored in the Firebase Analytics console:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `cwstory-com`
3. Navigate to Analytics > Events
4. View real-time and historical data

### Key Metrics to Monitor

1. **Contact Conversion**: Track which contact channels are most effective
2. **User Engagement**: Monitor navigation patterns and section visits
3. **Project Interest**: Analyze which projects get the most clicks
4. **Skill Focus**: See which skills users are most interested in
5. **User Experience**: Track theme preferences and interaction patterns

## 🔧 Implementation Details

### Core Files
- `src/utils/analytics.js`: Main analytics utilities
- `src/firebase.js`: Firebase configuration
- `src/components/AnalyticsDashboard.jsx`: Development dashboard

### Dependencies
- Firebase SDK v12.3.0
- Firebase Analytics
- React hooks for event handling

### Event Structure
All events follow a consistent structure:
```javascript
{
  event_name: 'event_type',
  parameters: {
    // Specific event data
    timestamp: '2025-01-01T00:00:00.000Z',
    ...additionalData
  }
}
```

## 🚀 Future Enhancements

Potential tracking improvements:
1. **Scroll Depth**: Track how far users scroll
2. **Time on Section**: Measure engagement per section
3. **Device/Browser Analytics**: Enhanced user agent tracking
4. **A/B Testing**: Test different CTA button texts or layouts
5. **Conversion Funnels**: Track user journey from visit to contact
6. **Performance Metrics**: Track page load times and Core Web Vitals

## 🔒 Privacy Considerations

- All analytics are anonymous and aggregated
- No personally identifiable information is collected
- Users can opt-out through browser settings
- Compliant with privacy regulations (GDPR, CCPA)
- Data retention follows Firebase Analytics policies