// src/components/AnalyticsDashboard.jsx
import React, { useState, useEffect } from 'react';
import { trackButtonClick } from '../utils/analytics';

const AnalyticsDashboard = () => {
  const [events, setEvents] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Listen for analytics events (in development)
    if (import.meta.env.DEV) {
      const originalConsoleLog = console.log;
      console.log = (...args) => {
        if (args[0] && args[0].includes('📊 Tracked:')) {
          setEvents(prev => [...prev.slice(-19), {
            id: Date.now(),
            timestamp: new Date().toLocaleTimeString(),
            message: args[0],
            data: args[1] || {}
          }]);
        }
        originalConsoleLog.apply(console, args);
      };

      return () => {
        console.log = originalConsoleLog;
      };
    }
  }, []);

  const toggleDashboard = () => {
    trackButtonClick('analytics_dashboard', isVisible ? 'close' : 'open');
    setIsVisible(!isVisible);
  };

  const clearEvents = () => {
    trackButtonClick('analytics_dashboard', 'clear_events');
    setEvents([]);
  };

  if (!import.meta.env.DEV) {
    return null; // Don't show in production
  }

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleDashboard}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200"
        title="Analytics Dashboard"
      >
        📊
      </button>

      {/* Dashboard Panel */}
      {isVisible && (
        <div className="fixed bottom-16 right-4 z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl w-96 max-h-96 overflow-hidden">
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <h3 className="font-semibold">Analytics Tracking</h3>
            <div className="flex gap-2">
              <button
                onClick={clearEvents}
                className="text-blue-200 hover:text-white text-sm"
                title="Clear events"
              >
                🗑️
              </button>
              <button
                onClick={toggleDashboard}
                className="text-blue-200 hover:text-white"
                title="Close"
              >
                ✕
              </button>
            </div>
          </div>
          
          <div className="p-3">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Live Events ({events.length}/20)
            </div>
            
            <div className="max-h-64 overflow-y-auto space-y-2">
              {events.length === 0 ? (
                <div className="text-gray-500 text-sm text-center py-4">
                  No events tracked yet. Interact with the page to see analytics.
                </div>
              ) : (
                events.map((event) => (
                  <div
                    key={event.id}
                    className="bg-gray-50 dark:bg-gray-700 p-2 rounded text-xs"
                  >
                    <div className="font-mono text-blue-600 dark:text-blue-400">
                      {event.timestamp}
                    </div>
                    <div className="text-gray-800 dark:text-gray-200 mt-1">
                      {event.message}
                    </div>
                    {Object.keys(event.data).length > 0 && (
                      <div className="text-gray-600 dark:text-gray-400 mt-1">
                        {JSON.stringify(event.data, null, 2)}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AnalyticsDashboard;