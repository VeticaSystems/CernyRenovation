
import { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/**
 * Survey page built to match the provided screenshot/structure.
 */
const Survey = () => {
  // Form state
  const [completed, setCompleted] = useState<string[]>([]);
  const [process, setProcess] = useState("");
  const [interaction, setInteraction] = useState("");
  const [impression, setImpression] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Simulate submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Send data to your backend or email
  };

  // Survey options
  const completionOptions = [
    "Project completed",
    "Project in progress",
    "Estimate only"
  ];

  const processOptions = [
    "Excellent",
    "Good",
    "Average",
    "Below Average",
    "Poor"
  ];

  const interactionOptions = [5, 4, 3, 2, 1]; // 5 = Excellent

  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-cerny-navy via-white to-cerny-light-gray px-2 py-12">
      <Card className="max-w-xl w-full shadow-lg bg-white animate-fade-in border-cerny-light-gray">
        <CardHeader>
          <CardTitle className="text-2xl font-montserrat text-light-purple mb-0">
            Cerny Remodeling Detailed Feedback
          </CardTitle>
          <p className="text-sm text-tenorite mt-1">
            Thank you for taking a moment to share your experience with us!
          </p>
        </CardHeader>
        <CardContent>
          {submitted ? (
            <div className="py-8 text-center">
              <div className="text-xl font-semibold text-cerny-orange mb-4">Thank you for your feedback!</div>
              <div className="text-tenorite">
                We truly value your insights and will use them to improve our service.
              </div>
            </div>
          ) : (
            <form className="space-y-6 mt-2" onSubmit={handleSubmit}>
              {/* Project Status */}
              <div>
                <label className="block text-lg font-semibold mb-2 text-light-purple">
                  Project Status
                </label>
                <div className="flex flex-wrap gap-4">
                  {completionOptions.map((label) => (
                    <label key={label} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={completed.includes(label)}
                        onChange={(e) => {
                          setCompleted(
                            e.target.checked
                              ? [...completed, label]
                              : completed.filter((v) => v !== label)
                          );
                        }}
                        className="accent-cerny-orange w-4 h-4"
                      />
                      <span className="text-tenorite">{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Process for Starting Project */}
              <div>
                <label className="block text-lg font-semibold mb-2 text-light-purple">
                  How would you rate our process for starting your project?
                </label>
                <div className="flex flex-col sm:flex-row gap-4">
                  {processOptions.map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="process"
                        value={option}
                        checked={process === option}
                        onChange={() => setProcess(option)}
                        className="accent-cerny-orange w-4 h-4"
                        required
                      />
                      <span className="text-tenorite">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Employee Interaction Rating */}
              <div>
                <label className="block text-lg font-semibold mb-2 text-light-purple">
                  Interactions with Our Employees
                </label>
                <div className="flex gap-2">
                  {interactionOptions.map((n) => (
                    <label key={n} className="flex flex-col items-center cursor-pointer w-10">
                      <input
                        type="radio"
                        name="interaction"
                        value={n}
                        checked={interaction === n.toString()}
                        onChange={() => setInteraction(n.toString())}
                        className="sr-only"
                        required
                      />
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold border text-tenorite ${
                          interaction === n.toString()
                            ? "bg-cerny-orange text-white border-cerny-orange shadow"
                            : "border-cerny-orange"
                        }`}
                      >
                        {n}
                      </span>
                      <span className="text-xs text-tenorite">{n === 5 ? "Excellent" : n === 1 ? "Poor" : ""}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Overall Impression */}
              <div>
                <label className="block text-lg font-semibold mb-2 text-light-purple">
                  Please share your overall impression with us
                </label>
                <textarea
                  value={impression}
                  onChange={(e) => setImpression(e.target.value)}
                  rows={4}
                  className="w-full p-3 border border-cerny-light-gray rounded-md shadow-inner bg-cerny-card-gray focus:outline-none focus:ring-2 focus:ring-cerny-orange"
                  required
                  placeholder="Your comments, suggestions, or thoughts..."
                />
              </div>

              {/* Email (Optional) */}
              <div>
                <label className="block text-sm font-semibold mb-1 text-light-purple" htmlFor="survey-email">
                  Email address (optional)
                </label>
                <input
                  id="survey-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-cerny-light-gray rounded-md shadow-sm bg-cerny-card-gray"
                  placeholder="you@email.com"
                  autoComplete="email"
                />
              </div>
              
              <Button
                type="submit"
                variant="default"
                className="w-full bg-cerny-orange hover:bg-cerny-orange-dark text-lg font-semibold mt-2"
              >
                Submit
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </section>
  );
};

export default Survey;
