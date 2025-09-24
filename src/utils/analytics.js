// src/utils/analytics.js
import { getAnalytics, logEvent } from 'firebase/analytics';
import firebaseApp from '../firebase';

const analytics = getAnalytics(firebaseApp.app);

// Track contact channel clicks
export const trackContactClick = (channel, contactType = 'click', additionalData = {}) => {
  try {
    logEvent(analytics, 'contact_click', {
      contact_channel: channel,
      contact_type: contactType,
      timestamp: new Date().toISOString(),
      ...additionalData
    });
    
    // Also log a more specific event for each channel
    logEvent(analytics, `${channel}_click`, {
      contact_type: contactType,
      timestamp: new Date().toISOString(),
      ...additionalData
    });
    
    console.log(`📊 Tracked: ${channel} ${contactType}`, additionalData);
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
};

// Track project clicks
export const trackProjectClick = (projectTitle, projectLink, additionalData = {}) => {
  try {
    logEvent(analytics, 'project_click', {
      project_title: projectTitle,
      project_link: projectLink,
      timestamp: new Date().toISOString(),
      ...additionalData
    });
    
    console.log(`📊 Tracked: Project click - ${projectTitle}`, additionalData);
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
};

// Track navigation clicks
export const trackNavigation = (section) => {
  try {
    logEvent(analytics, 'navigation_click', {
      section: section,
      timestamp: new Date().toISOString()
    });
    
    console.log(`📊 Tracked: Navigation to ${section}`);
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
};

// Track button clicks (CTA, theme toggle, etc.)
export const trackButtonClick = (buttonType, buttonLabel = '', additionalData = {}) => {
  try {
    logEvent(analytics, 'button_click', {
      button_type: buttonType,
      button_label: buttonLabel,
      timestamp: new Date().toISOString(),
      ...additionalData
    });
    
    console.log(`📊 Tracked: Button click - ${buttonType} ${buttonLabel}`);
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
};

// Track skill interactions
export const trackSkillInteraction = (skillName, interactionType = 'hover') => {
  try {
    logEvent(analytics, 'skill_interaction', {
      skill_name: skillName,
      interaction_type: interactionType,
      timestamp: new Date().toISOString()
    });
    
    console.log(`📊 Tracked: Skill interaction - ${skillName} ${interactionType}`);
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
};

// Track page views and sections
export const trackPageView = (page = 'home') => {
  try {
    logEvent(analytics, 'page_view', {
      page_title: page,
      timestamp: new Date().toISOString()
    });
    
    console.log(`📊 Tracked: Page view - ${page}`);
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
};

export default analytics;