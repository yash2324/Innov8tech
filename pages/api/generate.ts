// pages/api/generateAIContent.ts

import { NextApiRequest, NextApiResponse } from "next";
import { GoogleGenerativeAI } from "@google/generative-ai";

const api_key = process.env.GOOGLE_API_KEY as string;
const genAI = new GoogleGenerativeAI(api_key);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  const { title } = req.body;

  // Define the prompt for generating content
  const prompt = `For the given title: ${title}, write an in-detail article that needs to be published on a tech blog. Do not include any special symbols such as # or *. You are rewriting the title at the start of the text; don't do that directly. Start from the content. For formatting, return plain text with numbers if needed. The title is given by the creator; everything else needs to be figured out by you. An example: if the title is "Exploring the Future of Artificial Intelligence in Healthcare," then the content should be of the form:

Introduction:
Artificial Intelligence (AI) is rapidly transforming various industries, and healthcare is no exception. In recent years, AI has shown immense potential to revolutionize how medical professionals diagnose diseases, personalize treatments, and streamline administrative tasks. This article explores the current advancements and future possibilities of AI in healthcare, examining its impact on patient care, operational efficiency, and the ethical considerations that accompany its integration.

Sections to Include:
- Current Applications of AI in Healthcare:
  Discuss how AI is currently being used in medical imaging (e.g., radiology, pathology) to improve accuracy and speed of diagnoses.
  Explore AI applications in predictive analytics for patient outcomes and disease progression.

- AI in Personalized Medicine:
  Explain how AI algorithms analyze vast datasets to tailor treatments based on individual patient characteristics and genetic profiles.
  Provide examples of AI-driven advancements in drug discovery and development.

- Operational Efficiency and Cost Reduction:
  Detail how AI-powered systems are optimizing hospital operations, including scheduling, resource allocation, and administrative tasks.
  Discuss cost-saving potentials through AI-driven predictive maintenance and inventory management in healthcare facilities.

- Challenges and Ethical Considerations:
  Identify ethical concerns surrounding AI in healthcare, such as data privacy, algorithm bias, and the implications of AI decisions on patient care.
  Discuss regulatory challenges and the need for ethical guidelines to ensure responsible AI deployment in healthcare settings.

- Future Trends and Innovations:
  Predict future trends in AI healthcare applications, including advancements in robotics for surgery, virtual health assistants, and AI-driven patient monitoring.
  Explore the potential of AI to democratize healthcare access and improve health outcomes globally.

Conclusion:
In conclusion, while AI presents unprecedented opportunities to transform healthcare delivery and patient outcomes, its integration requires careful consideration of ethical, regulatory, and practical challenges. As technology continues to evolve, collaboration between healthcare professionals, researchers, policymakers, and technology developers will be crucial to harnessing AI's full potential while ensuring patient safety and ethical standards are upheld.

Audience:
This article is targeted at healthcare professionals, technology enthusiasts, policymakers, and anyone interested in understanding the intersection of artificial intelligence and healthcare.

Style and Tone:
The tone should be informative and objective, providing a balanced view of AI's current capabilities, future potentials, and the associated challenges in healthcare.

DO NOT INCLUDE ANY SYMBOLS SUCH AS * AND # ONLY RETURN THE FORMATTED TEXT.`;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    res.status(200).json({ content: text });
  } catch (error) {
    console.error("Error generating AI content:", error);
    res.status(500).json({ error: "Error generating AI content" });
  }
}
