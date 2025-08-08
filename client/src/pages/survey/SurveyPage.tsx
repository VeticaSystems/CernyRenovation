
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { SurveyForm } from "./SurveyForm";
import { SurveyThankYou } from "./SurveyThankYou";

export default function SurveyPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="flex min-h-screen items-start justify-center bg-gradient-to-br from-[#191A25] to-[#27283B] px-2 py-12 pt-20">
      <Card className="max-w-xl w-full shadow-2xl bg-[#23243A] border border-[#262741] text-white animate-fade-in">
        {submitted
          ? <SurveyThankYou />
          : <SurveyForm onSubmitted={() => setSubmitted(true)} />}
      </Card>
    </section>
  );
}
