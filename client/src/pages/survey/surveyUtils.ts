
import { z } from "zod";

// --- Types and Validation ---
export const completionOptions = [
  "Project completed",
  "Project in progress",
  "Estimate only",
] as const;
export const processOptions = [
  "Excellent",
  "Good",
  "Average",
  "Below Average",
  "Poor",
];
export const interactionOptions = [5, 4, 3, 2, 1]; // 5 = Excellent, 1 = Poor

export const surveySchema = z.object({
  completed: z
    .array(z.enum([
      "Project completed",
      "Project in progress",
      "Estimate only",
    ])).min(1, "Please select at least one."),
  process: z.enum([
    "Excellent",
    "Good",
    "Average",
    "Below Average",
    "Poor",
  ], { errorMap: () => ({ message: "Please select one option." }) }),
  interaction: z.enum(["5", "4", "3", "2", "1"], { errorMap: () => ({ message: "Please select one option." }) }),
  impression: z.string().min(6, "Please provide your feedback."),
  email: z.string().email("Invalid email address.").optional().or(z.literal("")),
});

export type SurveySchema = z.infer<typeof surveySchema>;

// --- Placeholder for future backend integration ---
export async function submitSurvey(data: SurveySchema) {
  await new Promise((resolve) => setTimeout(resolve, 1200));
  // Uncomment the next line to simulate a random error for testing
  // if (Math.random() < 0.15) throw new Error("Network error. Please try again.");
  return { ok: true };
}
