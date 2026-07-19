import { GoogleGenAI } from "@google/genai";

export const getCropAdvice = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const response = await ai.models.generateContent({
   model: "gemini-3.5-flash",
      contents: `
You are an expert agricultural advisor for Indian farmers.

Provide:
- Best crops
- Fertilizer recommendation
- Irrigation advice
- Pest prevention
- Weather precautions

User Query:
${prompt}
`,
    });

    res.status(200).json({
      success: true,
      answer: response.text,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to generate AI response",
      error: error.message,
    });
  }
};