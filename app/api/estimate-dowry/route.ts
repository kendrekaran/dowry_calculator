import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

// Initialize the Google Generative AI client with your API key
// Note: In production, use environment variables for API keys
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'your-api-key');

export async function POST(request: NextRequest) {
  try {
    const { name, city, age, salary, property } = await request.json();

    // Input validation
    if (!name || !city || !age || !salary) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Calculate a basic fallback dowry estimate based on inputs
    // This is a simplistic calculation just for fallback purposes
    const baseSalaryMultiplier = Math.max(1, Math.min(5, Math.floor(salary / 200000))) * 0.8;
    const ageAdjustment = Math.max(0.5, (35 - age) / 10);
    const propertyValue = property ? parseFloat(property.replace(/[^0-9]/g, '')) : 0;
    const propertyFactor = propertyValue > 0 ? Math.min(2, 1 + (propertyValue / 10000000) * 0.5) : 1;
    
    // Fallback dowry range (in case API fails)
    const lowerEstimate = Math.round((salary * baseSalaryMultiplier * ageAdjustment * propertyFactor) / 100000) * 100000;
    const upperEstimate = Math.round(lowerEstimate * 1.5 / 100000) * 100000;
    const fallbackEstimate = `₹${(lowerEstimate).toLocaleString('en-IN')} - ₹${(upperEstimate).toLocaleString('en-IN')}`;

    // Create a structured prompt for Gemini with male-specific focus
    const prompt = `
      You are a dowry estimation consultant for males. Based on the following information about a male candidate, 
      provide a reasonable dowry estimate with a brief explanation. Keep the tone friendly and 
      professional, and provide a range rather than a specific amount.
      
      User Information:
      - Name: ${name} (male)
      - City: ${city}
      - Age: ${age}
      - Annual Salary: ₹${salary}
      - Property Value: ${property || 'None specified'}
      
      Your estimate should consider the following factors:
      - Regional differences in dowry expectations based on the city (e.g., metro cities might have higher dowry amounts)
      - Income level and earning potential based on age and current salary
      - Property ownership and value
      - Cultural factors in different Indian regions
      - The candidate's marital desirability based on age, income, and assets
      
      Format the response as JSON with two fields:
      - estimate: A numerical range for the dowry estimate in Indian Rupees (₹)
      - explanation: A brief, professional explanation for the estimate that highlights key factors specific to male dowry expectations
    `;

    // Call Gemini API for the dowry estimation
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    
    // Parse the JSON response from Gemini
    // If it's not valid JSON, provide a fallback response
    try {
      const parsedResponse = JSON.parse(text);
      return NextResponse.json(parsedResponse);
    } catch (e) {
      // If the response isn't valid JSON, extract the information and format it
      const estimateMatch = text.match(/estimate:\s*([^\n]+)/i);
      const explanationMatch = text.match(/explanation:\s*([^]*?)(?:\n\n|\n$|$)/i);
      
      const fallbackResponse = {
        estimate: estimateMatch ? estimateMatch[1].trim() : fallbackEstimate,
        explanation: explanationMatch 
          ? explanationMatch[1].trim() 
          : `Based on your profile as a ${age}-year-old male earning ₹${salary.toLocaleString('en-IN')} annually in ${city}${property ? ' with property valued at ' + property : ''}, the expected dowry range is estimated at ${fallbackEstimate}. This considers local marriage market factors, your earning potential, and assets.`
      };
      
      return NextResponse.json(fallbackResponse);
    }
  } catch (error) {
    console.error('Error in dowry estimation:', error);
    return NextResponse.json(
      { 
        error: 'Failed to process request',
        estimate: '₹5,00,000 - ₹15,00,000',
        explanation: 'We encountered an issue processing your request. This is a standard dowry estimate based on average male candidate data.'
      }, 
      { status: 500 }
    );
  }
} 