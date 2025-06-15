
import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
};

export function QuickFeedbackModal({ open, onOpenChange }: Props) {
  const [step, setStep] = useState<"choice" | "positive" | "negative" | "submitted">("choice");
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  function closePopup() {
    setStep("choice");
    setComment("");
    onOpenChange(false);
  }

  function handlePositive() {
    setStep("positive");
  }

  function handleNegative() {
    setStep("negative");
  }

  function handleSubmitNegative(evt: React.FormEvent) {
    evt.preventDefault();
    setStep("submitted");
  }

  function handleGoToSurvey() {
    closePopup();
    navigate("/survey");
  }

  // Optional: here you can send feedback to your backend or reuse submitSurvey

  return (
    <Dialog open={open} onOpenChange={closePopup}>
      <DialogContent className="max-w-xs md:max-w-sm px-5 py-7 rounded-2xl bg-[#2f2f47] text-white"
        onPointerDownOutside={closePopup}
        onEscapeKeyDown={closePopup}
      >
        <button type="button" onClick={closePopup} className="absolute top-3 right-4 text-[#ddd] hover:text-red-400 focus:outline-none">
          <X size={20} />
          <span className="sr-only">Close</span>
        </button>
        {step === "choice" && (
          <div className="flex flex-col items-center gap-5">
            <div className="text-lg font-semibold mb-2">How was your experience?</div>
            <div className="flex gap-8">
              <button
                onClick={handlePositive}
                aria-label="Thumbs Up"
                className="p-3 rounded-full bg-[#21213a] hover:bg-cerny-orange/80 outline-none ring-0 transition-all border border-transparent hover:border-cerny-orange shadow hover:scale-110"
              >
                <ThumbsUp size={32} className="text-green-400" />
              </button>
              <button
                onClick={handleNegative}
                aria-label="Thumbs Down"
                className="p-3 rounded-full bg-[#21213a] hover:bg-red-500/80 outline-none ring-0 transition-all border border-transparent hover:border-red-500 shadow hover:scale-110"
              >
                <ThumbsDown size={32} className="text-red-400" />
              </button>
            </div>
            <div className="text-sm opacity-80">Your feedback helps us improve!</div>
          </div>
        )}
        {step === "positive" && (
          <div className="flex flex-col items-center">
            <ThumbsUp size={36} className="text-green-400 mb-2" />
            <div className="text-lg font-bold text-cerny-orange mb-1">Thank you!</div>
            <div className="text-sm text-[#d3d3ea] mb-3 text-center">
              We're glad you had a positive experience.
            </div>
            <Button
              onClick={handleGoToSurvey}
              variant="secondary"
              className="mb-3 font-semibold w-full"
            >
              Leave detailed feedback
            </Button>
            <Button
              onClick={closePopup}
              variant="ghost"
              className="w-full"
            >
              Close
            </Button>
          </div>
        )}
        {step === "negative" && (
          <form className="flex flex-col items-center gap-2 w-full" onSubmit={handleSubmitNegative}>
            <ThumbsDown size={36} className="text-red-400 mb-2" />
            <div className="font-bold mb-1">Oh no! What can we do better?</div>
            <textarea
              value={comment}
              onChange={e => setComment(e.target.value)}
              rows={3}
              className="w-full rounded-md bg-[#23243A] text-white border border-[#444] px-3 py-2 focus:ring-2 focus:ring-cerny-orange"
              placeholder="Let us know how we can improve..."
              required
            />
            <Button
              type="submit"
              className="w-full mt-1 bg-cerny-orange hover:bg-cerny-orange-dark"
            >
              Send Feedback
            </Button>
          </form>
        )}
        {step === "submitted" && (
          <div className="flex flex-col items-center justify-center">
            <div className="font-bold text-cerny-orange mb-1">Thank you for your honesty!</div>
            <div className="text-sm text-[#d3d3ea] mb-3 text-center">
              We truly appreciate your feedback and will work to improve.
            </div>
            <Button
              onClick={handleGoToSurvey}
              variant="secondary"
              className="mb-3 font-semibold w-full"
            >
              Leave more detailed feedback
            </Button>
            <Button
              onClick={closePopup}
              variant="ghost"
              className="w-full"
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
