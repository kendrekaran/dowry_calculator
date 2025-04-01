import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

// Initialize the Google Generative AI client with your API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'your-api-key');

export async function POST(request: NextRequest) {
  try {
    const { 
      name, 
      city, 
      age, 
      monthlySalary, 
      spouseSalary, 
      marriageDuration, 
      childrenCount 
    } = await request.json();

    // Input validation
    if (!name || !city || !age || !monthlySalary || !spouseSalary || !marriageDuration) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Calculate a basic fallback alimony estimate based on inputs
    // This is a simplistic calculation just for fallback purposes
    let alimonyPercentage = 0;
    
    // Calculate percentage based on income disparity
    if (spouseSalary > monthlySalary * 3) {
      alimonyPercentage = 0.30; // Large income disparity
    } else if (spouseSalary > monthlySalary * 1.5) {
      alimonyPercentage = 0.25; // Moderate income disparity
    } else if (spouseSalary > monthlySalary) {
      alimonyPercentage = 0.20; // Small income disparity
    } else {
      alimonyPercentage = 0.15; // Minimal or no income disparity
    }
    
    // Adjust for marriage duration
    if (marriageDuration > 15) {
      alimonyPercentage += 0.10;
    } else if (marriageDuration > 7) {
      alimonyPercentage += 0.05;
    }
    
    // Adjust for children
    if (childrenCount > 0) {
      alimonyPercentage += 0.05 * Math.min(childrenCount, 3);
    }
    
    // Calculate alimony amount
    const baseAlimony = Math.round(spouseSalary * alimonyPercentage / 100) * 100;
    const maxAlimony = Math.round(baseAlimony * 1.2 / 100) * 100;
    
    // Calculate duration
    let durationYears;
    if (marriageDuration <= 5) {
      durationYears = Math.ceil(marriageDuration / 2);
    } else if (marriageDuration <= 10) {
      durationYears = Math.ceil(marriageDuration / 1.5);
    } else {
      durationYears = Math.min(marriageDuration, 20);
    }
    
    // Format fallback responses
    const fallbackAmount = `₹${baseAlimony.toLocaleString('en-IN')} - ₹${maxAlimony.toLocaleString('en-IN')} per month`;
    const fallbackDuration = `${durationYears} years or until remarriage`;

    // Create a structured prompt for Gemini with female-specific focus
    const prompt = `
      You are a professional legal consultant specializing in family law for women. Based on the following information, 
      provide a reasonable alimony estimate with a brief explanation. Keep the tone professional, 
      unbiased, and educational. Focus specifically on the woman's perspective and rights.
      
      User Information:
      - Name: ${name} (female)
      - City: ${city}
      - Age: ${age}
      - Your Monthly Salary: ₹${monthlySalary}
      - Husband's Monthly Salary: ₹${spouseSalary}
      - Marriage Duration: ${marriageDuration} years
      - Number of Children: ${childrenCount || 'None'}
      
      Your estimate should consider the following factors specifically from a woman's perspective:
      - Income disparity between you and your husband
      - Duration of marriage (longer marriages typically result in higher alimony)
      - Standard of living during marriage
      - Child custody and support needs
      - Regional variations in alimony standards based on the city
      - Your future financial independence and needs
      
      Format the response as JSON with three fields:
      - amount: A numerical monthly alimony estimate (can be a range) in Indian Rupees (₹)
      - duration: How long the alimony payments might continue
      - explanation: A professional explanation for the estimate that addresses women's financial security concerns
    `;

    // Call Gemini API for the alimony estimation
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
      const amountMatch = text.match(/amount:\s*([^\n]+)/i);
      const durationMatch = text.match(/duration:\s*([^\n]+)/i);
      const explanationMatch = text.match(/explanation:\s*([^]*?)(?:\n\n|\n$|$)/i);
      
      const fallbackResponse = {
        amount: amountMatch ? amountMatch[1].trim() : fallbackAmount,
        duration: durationMatch ? durationMatch[1].trim() : fallbackDuration,
        explanation: explanationMatch 
          ? explanationMatch[1].trim() 
          : `Based on your situation as a ${age}-year-old woman with a monthly income of ₹${monthlySalary.toLocaleString('en-IN')} after a marriage of ${marriageDuration} years to a spouse earning ₹${spouseSalary.toLocaleString('en-IN')} monthly${childrenCount > 0 ? ' with ' + childrenCount + ' child' + (childrenCount > 1 ? 'ren' : '') : ''}, you may be entitled to approximately ${fallbackAmount}. This considers the income disparity, length of your marriage, and your potential needs for maintaining a standard of living similar to what you experienced during the marriage.`
      };
      
      return NextResponse.json(fallbackResponse);
    }
  } catch (error) {
    console.error('Error in alimony calculation:', error);
    return NextResponse.json(
      { 
        error: 'Failed to process request',
        amount: '₹15,000 - ₹25,000 per month',
        duration: '1-3 years or until remarriage',
        explanation: 'We encountered an issue processing your request. This is a standard alimony estimate for women based on average case data.'
      }, 
      { status: 500 }
    );
  }
} 