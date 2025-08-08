
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  completionOptions,
  processOptions,
  interactionOptions,
  surveySchema,
  SurveySchema,
  submitSurvey,
} from "./surveyUtils";
import { useState } from "react";

type SurveyFormProps = {
  onSubmitted(): void;
};

export function SurveyForm({ onSubmitted }: SurveyFormProps) {
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

  const completedSelected = watch("completed");

  const onSubmit = async (data: SurveySchema) => {
    setServerError(null);
    try {
      await submitSurvey(data);
      onSubmitted();
      reset();
    } catch (err: any) {
      setServerError("There was a network error submitting the survey. Please try again.");
    }
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-montserrat text-cerny-orange mb-1">
          Cerny Remodeling Detailed Feedback
        </CardTitle>
        <p className="text-sm text-[#b7b5c6] mt-1 font-medium">
          Thank you for taking a moment to share your experience with us!
        </p>
      </CardHeader>
      <CardContent>
        <form className="space-y-6 mt-2" onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Project Status */}
          <fieldset className="border-0 p-0 m-0">
            <legend className="block text-base font-bold mb-2 text-cerny-orange drop-shadow">
              Project Status <span className="text-red-500">*</span>
            </legend>
            <div className="flex flex-wrap gap-4">
              <Controller
                control={control}
                name="completed"
                render={({ field }) => (
                  <>
                    {completionOptions.map((label, idx) => {
                      const checkboxId = `completed-${idx}`;
                      return (
                        <div key={label} className="flex items-center gap-2">
                          <input
                            id={checkboxId}
                            type="checkbox"
                            checked={field.value.includes(label)}
                            onChange={(e) =>
                              field.onChange(
                                e.target.checked
                                  ? [...field.value, label]
                                  : field.value.filter((v) => v !== label)
                              )
                            }
                            className="accent-cerny-orange w-4 h-4 rounded border-[#35365a] bg-[#10101a] transition duration-100"
                          />
                          <label htmlFor={checkboxId} className="text-[#e3e2ef] hover:text-cerny-orange transition-colors cursor-pointer">
                            {label}
                          </label>
                        </div>
                      );
                    })}
                  </>
                )}
              />
            </div>
            {errors.completed && (
              <p className="text-sm text-red-400 mt-1">{errors.completed.message}</p>
            )}
          </fieldset>
          {/* Process for Starting Project */}
          <fieldset className="border-0 p-0 m-0">
            <legend className="block text-base font-bold mb-2 text-cerny-orange drop-shadow">
              How would you rate our process for starting your project? <span className="text-red-500">*</span>
            </legend>
            <div className="flex flex-col sm:flex-row gap-4">
              <Controller
                control={control}
                name="process"
                render={({ field }) => (
                  <>
                    {processOptions.map((option, idx) => {
                      const radioId = `process-${idx}`;
                      return (
                        <div key={option} className="flex items-center gap-2">
                          <input
                            id={radioId}
                            type="radio"
                            name="process"
                            value={option}
                            checked={field.value === option}
                            onChange={() => field.onChange(option)}
                            className="accent-cerny-orange w-4 h-4"
                            required
                          />
                          <label htmlFor={radioId} className={`px-3 py-2 rounded-md
                            ${field.value === option
                              ? "bg-[#ff6500]/90 text-white font-bold"
                              : "hover:bg-[#191A25] text-[#f6f4ff]"} transition-colors cursor-pointer`}>
                            {option}
                          </label>
                        </div>
                      );
                    })}
                  </>
                )}
              />
            </div>
            {errors.process && (
              <p className="text-sm text-red-400 mt-1">{errors.process.message}</p>
            )}
          </fieldset>
          {/* Employee Interaction Rating */}
          <fieldset className="border-0 p-0 m-0">
            <legend className="block text-base font-bold mb-2 text-cerny-orange drop-shadow">
              Interactions with Our Employees <span className="text-red-500">*</span>
            </legend>
            <Controller
              control={control}
              name="interaction"
              render={({ field }) => (
                <div className="flex gap-3">
                  {interactionOptions.map((n, idx) => {
                    const rateId = `interaction-${n}`;
                    return (
                      <label key={n} htmlFor={rateId} className="flex flex-col items-center cursor-pointer w-12 group select-none">
                        <input
                          id={rateId}
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
                    );
                  })}
                </div>
              )}
            />
            {errors.interaction && (
              <p className="text-sm text-red-400 mt-1">{errors.interaction.message}</p>
            )}
          </fieldset>
          {/* Overall Impression */}
          <div>
            <label className="block text-base font-bold mb-2 text-cerny-orange drop-shadow" htmlFor="impression">
              Please share your overall impression with us <span className="text-red-500">*</span>
            </label>
            <Controller
              control={control}
              name="impression"
              render={({ field }) => (
                <textarea
                  {...field}
                  id="impression"
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
      </CardContent>
    </>
  );
}
