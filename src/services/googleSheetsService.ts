const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzwBr1Q-U54v9NLRFomWuT9xMIH2QDRZQ6H6TD7gsSCS2mbH37iaAWTq-gnodPXtPVD/exec';

export interface EmailSubmissionResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export const submitEmailToGoogleSheets = async (email: string): Promise<EmailSubmissionResponse> => {
  try {
    console.log('Submitting email to Google Sheets:', email);
    console.log('Using URL:', GOOGLE_SHEETS_URL);

    // Try POST request with FormData first
    const formData = new FormData();
    formData.append('email', email);

    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      body: formData,
    });

    console.log('Response status:', response.status);
    console.log('Response ok:', response.ok);

    // Always try to parse the response, even if status is not ok
    let result: EmailSubmissionResponse;
    try {
      result = await response.json();
      console.log('Response result:', result);
    } catch (parseError) {
      console.error('Failed to parse response:', parseError);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Return the result regardless of HTTP status - let the result.success determine outcome
    return result;
  } catch (error) {
    console.error('POST request failed:', error);
    
    // Try GET request with URL parameters as fallback
    try {
      console.log('Trying GET request with URL parameters...');
      const urlWithParams = `${GOOGLE_SHEETS_URL}?email=${encodeURIComponent(email)}`;
      
      const response = await fetch(urlWithParams, {
        method: 'GET',
      });
      
      console.log('GET response status:', response.status);
      console.log('GET response ok:', response.ok);
      
      // Always try to parse the response, even if status is not ok
      let result: EmailSubmissionResponse;
      try {
        result = await response.json();
        console.log('GET response result:', result);
      } catch (parseError) {
        console.error('Failed to parse GET response:', parseError);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Return the result regardless of HTTP status
      return result;
    } catch (altError) {
      console.error('GET request also failed:', altError);
      return {
        success: false,
        error: 'Failed to submit email. Please try again later.',
      };
    }
  }
};