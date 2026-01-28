
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Tu es l'Assistant Technique Virtuel de "Entreprise ABC" (Atelier de Câblage et de Bobinage).
Ton rôle est d'aider les visiteurs du site web à comprendre nos services électromécaniques.

Informations clés sur l'entreprise :
- Nom : Entreprise ABC / Atelier de Câblage et de Bobinage.
- Localisation : Avenue Nelson Mandela à Farcha, N'Djamena, Tchad.
- Établi : Mai 2007.
- Spécialités : Bobinage de moteurs et générateurs électriques (réparation/fabrication), fournitures de pièces mécaniques et électriques de rechange, planification, intervention et conseil technique.
- Partenaires majeurs : BDT, TchadElec, CIMAF, RAZEL, Arab Contractor, etc.
- Contacts : Tél (+235) 63113764 / 93085084, Email acb.equipro@gmail.com.

Instructions :
1. Sois professionnel, accueillant et technique si nécessaire.
2. Réponds principalement en français.
3. Si un client demande un devis, encourage-le à nous contacter par téléphone ou email.
4. Explique clairement ce qu'est le bobinage pour les novices (réfection des enroulements de cuivre d'un moteur).
`;

/**
 * Fetches a response from the Gemini model based on user input and chat history.
 */
export const getGeminiChatResponse = async (userMessage: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({ 
          role: h.role === 'user' ? 'user' : 'model', 
          parts: h.parts 
        })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Désolé, j'ai rencontré une petite erreur technique. N'hésitez pas à nous appeler directement pour vos questions !";
  }
};
