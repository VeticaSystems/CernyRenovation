import { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// --- Types and Validation ---
const completionOptions = [
  "Project completed",
  "Project in progress",
  "Estimate only",
];
const processOptions = [
  "Excellent",
  "Good",
  "Average",
  "Below Average",
  "Poor",
];
const interactionOptions = [5, 4, 3, 2, 1]; // 5 = Excellent, 1 = Poor

const surveySchema = z.object({
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

type SurveySchema = z.infer<typeof surveySchema>;

// --- Placeholder for future backend integration ---
async function submitSurvey(data: SurveySchema) {
  // Simulate server request delay and possible network error.
  // Here you'd integrate with your backend/serverless/email server in the future.
  // The payload is ready for sending to info@cernyremodeling.com.
  await new Promise((resolve) => setTimeout(resolve, 1200));
  // Uncomment the next line to simulate a random error for testing
  // if (Math.random() < 0.15) throw new Error("Network error. Please try again.");
  return { ok: true };
}

const Survey = () => {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SurveySchema>({
    resolver: zodResolver(surveySchema),
    defaultValues: {
      completed: [],
      process: undefined,
      interaction: undefined,
      impression: "",
      email: "",
    },
  });

  // Watch for better UX
  const completedSelected = watch("completed");

  const onSubmit = async (data: SurveySchema) => {
    setServerError(null);
    try {
      await submitSurvey(data);
      setSubmitted(true);
      reset();
    } catch (err: any) {
      setServerError("There was a network error submitting the survey. Please try again.");
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#191A25] to-[#27283B] px-2 py-12">
      <Card className="max-w-xl w-full shadow-2xl bg-[#23243A] border border-[#262741] text-white animate-fade-in">
        <CardHeader>
          <CardTitle className="text-2xl font-montserrat text-cerny-orange mb-1">
            Cerny Remodeling Detailed Feedback
          </CardTitle>
          <p className="text-sm text-[#b7b5c6] mt-1 font-medium">
            Thank you for taking a moment to share your experience with us!
          </p>
        </CardHeader>
        <CardContent>
          {submitted ? (
            <div className="py-8 text-center">
              <div className="text-xl font-extrabold text-cerny-orange mb-4">Thank you for your feedback!</div>
              <div className="text-[#ccccda] text-base">
                We truly value your insights and will use them to improve our service.
              </div>
            </div>
          ) : (
            <form className="space-y-6 mt-2" onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* Project Status */}
              <div>
                <label className="block text-base font-bold mb-2 text-cerny-orange drop-shadow">Project Status <span className="text-red-500">*</span></label>
                <div className="flex flex-wrap gap-4">
                  <Controller
                    control={control}
                    name="completed"
                    render={({ field }) => (
                      <>
                        {completionOptions.map((label) => (
                          <label
                            key={label}
                            className="flex items-center gap-2 text-[#e3e2ef] hover:text-cerny-orange transition-colors"
                          >
                            <input
                              type="checkbox"
                              checked={field.value.includes(label)}
                              onChange={(e) => {
                                field.onChange(
                                  e.target.checked
                                    ? [...field.value, label]
                                    : field.value.filter((v) => v !== label)
                                );
                              }}
                              className="accent-cerny-orange w-4 h-4 rounded border-[#35365a] bg-[#10101a] transition duration-100"
                            />
                            <span>{label}</span>
                          </label>
                        ))}
                      </>
                    )}
                  />
                </div>
                {errors.completed && (
                  <p className="text-sm text-red-400 mt-1">{errors.completed.message}</p>
                )}
              </div>

              {/* Process for Starting Project */}
              <div>
                <label className="block text-base font-bold mb-2 text-cerny-orange drop-shadow">
                  How would you rate our process for starting your project? <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Controller
                    control={control}
                    name="process"
                    render={({ field }) => (
                      <>
                        {processOptions.map((option) => (
                          <label
                            key={option}
                            className={`flex items-center gap-2 px-3 py-2 rounded-md
                              ${field.value === option
                              ? "bg-[#ff6500]/90 text-white font-bold"
                              : "hover:bg-[#191A25] text-[#f6f4ff]"} transition-colors cursor-pointer`}
                          >
                            <input
                              type="radio"
                              name="process"
                              value={option}
                              checked={field.value === option}
                              onChange={() => field.onChange(option)}
                              className="accent-cerny-orange w-4 h-4"
                              required
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </>
                    )}
                  />
                </div>
                {errors.process && (
                  <p className="text-sm text-red-400 mt-1">{errors.process.message}</p>
                )}
              </div>

              {/* Employee Interaction Rating */}
              <div>
                <label className="block text-base font-bold mb-2 text-cerny-orange drop-shadow">
                  Interactions with Our Employees <span className="text-red-500">*</span>
                </label>
                <Controller
                  control={control}
                  name="interaction"
                  render={({ field }) => (
                    <div className="flex gap-3">
                      {interactionOptions.map((n) => (
                        <label key={n} className="flex flex-col items-center cursor-pointer w-12 group select-none">
                          <input
                            type="radio"
                            name="interaction"
                            value={n}
                            checked={field.value === n.toString()}
                            onChange={() => field.onChange(n.toString())}
                            className="sr-only"
                            required
                          />
                          <span
                            className={`w-9 h-9 rounded-full flex items-center justify-center font-bold border-2
                              ${field.value === n.toString()
                                ? "bg-cerny-orange border-cerny-orange text-white shadow-lg"
                                : "border-cerny-orange text-cerny-orange group-hover:bg-cerny-orange group-hover:text-white transition-colors"
                              }`}
                          >
                            {n}
                          </span>
                          <span className={`text-xs mt-1 ${field.value === n.toString() ? "text-cerny-orange" : "text-[#c4c3d6]"}`}>
                            {n === 5 ? "Excellent" : n === 1 ? "Poor" : "\u00A0"}
                          </span>
                        </label>
                      ))}
                    </div>
                  )}
                />
                {errors.interaction && (
                  <p className="text-sm text-red-400 mt-1">{errors.interaction.message}</p>
                )}
              </div>

              {/* Overall Impression */}
              <div>
                <label className="block text-base font-bold mb-2 text-cerny-orange drop-shadow">
                  Please share your overall impression with us <span className="text-red-500">*</span>
                </label>
                <Controller
                  control={control}
                  name="impression"
                  render={({ field }) => (
                    <textarea
                      {...field}
                      rows={4}
                      className="w-full p-3 border border-[#35365a] rounded-md shadow-inner bg-[#181831] text-white focus:outline-none focus:ring-2 focus:ring-cerny-orange"
                      placeholder="Your comments, suggestions, or thoughts..."
                      required
                    />
                  )}
                />
                {errors.impression && (
                  <p className="text-sm text-red-400 mt-1">{errors.impression.message}</p>
                )}
              </div>

              {/* Email (Optional) */}
              <div>
                <label className="block text-sm font-semibold mb-1 text-cerny-orange" htmlFor="survey-email">
                  Email address (optional)
                </label>
                <Controller
                  control={control}
                  name="email"
                  render={({ field }) => (
                    <input
                      {...field}
                      id="survey-email"
                      type="email"
                      className="w-full p-2 border border-[#35365a] rounded-md shadow-sm bg-[#181831] text-white placeholder:text-[#a1a1b8] focus:ring-2 focus:ring-cerny-orange"
                      placeholder="you@email.com"
                      autoComplete="email"
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-sm text-red-400 mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Submit Button & Status */}
              <div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="default"
                  className="w-full bg-cerny-orange hover:bg-cerny-orange-dark text-lg font-bold shadow-xl mt-2 transition"
                >
                  {isSubmitting ? (
                    <span>
                      <svg className="inline w-5 h-5 mr-2 animate-spin text-white" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="none" stroke="#fff" strokeWidth="4" opacity="0.4"/>
                        <path d="M4 12a8 8 0 018-8" fill="none" stroke="#fff" strokeWidth="4" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit"
                  )}
                </Button>
                {serverError && <p className="mt-2 text-sm text-red-400">{serverError}</p>}
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </section>
  );
};

export default Survey;
