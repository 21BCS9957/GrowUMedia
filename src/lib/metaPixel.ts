// Meta Pixel utility functions
declare global {
  interface Window {
    fbq: any;
  }
}

// Utility to get cookie value
const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
};

export const trackEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
    console.log(`Meta Pixel: Tracked ${eventName}`, parameters);
  }
};

export const trackCustomEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, parameters);
    console.log(`Meta Pixel: Tracked custom event ${eventName}`, parameters);
  }
};

// Specific event functions
export const trackPageView = () => {
  trackEvent('PageView');
};

export const trackInitiateCheckout = () => {
  trackEvent('InitiateCheckout', {
    content_name: 'Strategy Session Booking',
    content_category: 'Consultation',
    value: 0,
    currency: 'USD'
  });
};

export const trackSchedule = () => {
  trackCustomEvent('Schedule', {
    content_name: 'Strategy Session Scheduled',
    content_category: 'Consultation',
    value: 0,
    currency: 'USD'
  });
};

// Enhanced tracking with Conversions API support
export const trackEventWithConversionsAPI = async (eventName: string, parameters?: any) => {
  // Track with browser pixel
  trackEvent(eventName, parameters);
  
  // Prepare data for Conversions API
  const eventData = {
    event_time: Math.floor(Date.now() / 1000),
    action_source: 'website',
    user_data: {
      client_ip_address: '', // This would be filled by your backend
      client_user_agent: navigator.userAgent,
      fbp: getCookie('_fbp'),
      fbc: getCookie('_fbc')
    },
    custom_data: parameters
  };
  
  // Send to your backend for Conversions API
  try {
    await fetch('/api/facebook-conversions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pixelId: '690851557108015',
        accessToken: 'EAAJ8G7uTtgoBP4RFlTfgZBZBAILGzBS14h3sxzV7wUFhLVJWvp1jW6Cv6ZCPRU4JKZBaCZAVDFlyZB0gsKhdKf5qskQZCym9gldGV1lHbrO4ueDjWsxKLaJTYe8xao9bI70OweJEmiVqvyi8wmNUKNj2f7mH9wEWlP6AiKcH0ZALnAy9nqAaxRYSWIN3J9xYCk8ziAZDZD',
        testEventCode: 'TEST47938',
        eventName,
        eventData
      })
    });
  } catch (error) {
    console.log('Conversions API not available, using pixel only');
  }
};