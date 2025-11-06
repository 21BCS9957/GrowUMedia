// Server-side Conversions API endpoint
// This would typically be implemented in your backend (Node.js, Python, etc.)
// This is just an example of how it would work

interface ConversionsAPIRequest {
  pixelId: string;
  accessToken: string;
  testEventCode?: string;
  eventName: string;
  eventData: {
    event_time: number;
    action_source: string;
    user_data?: {
      em?: string; // email hash
      ph?: string; // phone hash
      client_ip_address?: string;
      client_user_agent?: string;
      fbc?: string; // Facebook click ID
      fbp?: string; // Facebook browser ID
    };
    custom_data?: any;
  };
}

export const sendToConversionsAPI = async (data: ConversionsAPIRequest) => {
  const url = `https://graph.facebook.com/v18.0/${data.pixelId}/events`;
  
  const payload = {
    data: [data.eventData],
    test_event_code: data.testEventCode,
    access_token: data.accessToken
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    console.log('Conversions API Response:', result);
    return result;
  } catch (error) {
    console.error('Conversions API Error:', error);
    throw error;
  }
};

// Example usage:
/*
sendToConversionsAPI({
  pixelId: '690851557108015',
  accessToken: 'EAAJ8G7uTtgoBP4RFlTfgZBZBAILGzBS14h3sxzV7wUFhLVJWvp1jW6Cv6ZCPRU4JKZBaCZAVDFlyZB0gsKhdKf5qskQZCym9gldGV1lHbrO4ueDjWsxKLaJTYe8xao9bI70OweJEmiVqvyi8wmNUKNj2f7mH9wEWlP6AiKcH0ZALnAy9nqAaxRYSWIN3J9xYCk8ziAZDZD',
  testEventCode: 'TEST47938',
  eventName: 'InitiateCheckout',
  eventData: {
    event_time: Math.floor(Date.now() / 1000),
    action_source: 'website',
    user_data: {
      client_ip_address: '192.168.1.1',
      client_user_agent: navigator.userAgent,
      fbp: getCookie('_fbp'),
      fbc: getCookie('_fbc')
    },
    custom_data: {
      content_name: 'Strategy Session Booking',
      content_category: 'Consultation',
      value: 0,
      currency: 'USD'
    }
  }
});
*/