
import { useEffect } from "react";

/**
 * Feedback Fish Widget integration for Cerny Remodeling
 * 
 * Usage: 
 * - The Feedback Fish script reads data attributes from a normal button element.
 * - Adjust the 'feedbackFishCode' to use your project's code.
 * - Styling and placement is controlled via Tailwind/className & inline style.
 */
const FeedbackFishWidget = () => {
  useEffect(() => {
    // Prevent duplicate script injection
    if (document.getElementById("ff-widget-script")) return;

    const script = document.createElement("script");
    script.id = "ff-widget-script";
    script.src = "https://cdn.feedback.fish/ff.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Replace with your Feedback Fish code!
  const feedbackFishCode = "YOUR_FEEDBACKFISH_CODE";

  return (
    <button
      type="button"
      data-feedback-fish
      data-project={feedbackFishCode}
      data-question="How was your experience with Cerny Remodeling?"
      data-cta="Leave Feedback"
      data-on-positive="Thank you! Want to leave more detailed feedback? Visit our survey page."
      data-on-positive-url="/survey"
      data-on-negative="Sorry to hear that. Please tell us more below, or visit our survey."
      data-on-negative-url="/survey"
      className="fixed right-4 bottom-6 z-[110] shadow-lg animate-fade-in font-montserrat transition-all select-none"
      style={{
        color: "#fff",
        background: "#b19cd9",
        fontWeight: 600,
        borderRadius: "30px",
        fontSize: "1rem",
        boxShadow: "0 2px 16px 0 rgba(0,0,0,0.13)",
        padding: "0.6em 1.4em",
      }}
      aria-label="Leave quick feedback"
    >
      Leave Feedback
    </button>
  );
};

export default FeedbackFishWidget;

