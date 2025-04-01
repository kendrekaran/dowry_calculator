# Financial Calculators

A modern web application with calculators for:
1. **Dowry Estimation** (for males) - Calculate expected dowry based on personal details
2. **Alimony Estimation** (for females) - Calculate expected alimony based on marriage details

Both calculators use the Gemini AI API for intelligent estimations.

## Features

- Clean, responsive UI built with React and Tailwind CSS
- Tabbed interface to switch between calculators
- **Dowry Calculator** collects:
  - Name
  - City
  - Age
  - Annual Salary
  - Property Value (optional)
- **Alimony Calculator** collects:
  - Name
  - City
  - Age
  - Monthly Salary
  - Spouse's Monthly Salary
  - Marriage Duration
  - Number of Children
- AI-powered estimations using Google's Gemini API
- Smooth animations and transitions using Framer Motion
- Dark mode support
- Mobile-friendly design

## Tech Stack

- **Frontend**: Next.js with React 19
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form
- **Animations**: Framer Motion
- **Notifications**: Sonner
- **AI**: Google Generative AI (Gemini)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd create_dajeh
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Create a `.env.local` file in the root directory with your Gemini API key:
```
GEMINI_API_KEY=your-gemini-api-key
```

You can obtain a Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey).

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

### For Males - Dowry Calculator
1. Select the "Dowry Calculator" tab
2. Fill in your details (Name, City, Age, Annual Salary, and Property Value)
3. Click "Calculate Dowry Estimate"
4. View your estimated dowry range and explanation

### For Females - Alimony Calculator
1. Select the "Alimony Calculator" tab
2. Fill in your details (Name, City, Age, Monthly Salary, Spouse's Salary, Marriage Duration, and Number of Children)
3. Click "Calculate Alimony"
4. View your estimated alimony amount, payment duration, and explanation

## Deployment

This application can be easily deployed using Vercel:

```bash
npm run build
npm run start
```

## Customization

- Modify the Tailwind theme in `tailwind.config.js` to change colors and animations
- Update API prompts in the API route files to adjust the estimation logic
- Edit components in the `app/components` directory to change UI elements

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Disclaimer

This application is for educational purposes only. The calculations provided are estimates and should not be considered financial or legal advice. Please consult with qualified professionals for guidance specific to your situation.
