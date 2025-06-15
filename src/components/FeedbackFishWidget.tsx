
import { useEffect } from "react";

/**
 * Feedback Fish Widget integration. 
 * 
 * Note: Edit the data-question attribute to your liking, and set your Feedback Fish project code.
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
  // You can easily find your project code on their website.
  const feedbackFishCode = "YOUR_FEEDBACKFISH_CODE";

  return (
    <feedback-fish
      // Widget floats bottom-right, custom CTA label.
      project={feedbackFishCode}
      class="fixed right-4 bottom-6 z-[110] shadow-lg animate-fade-in font-montserrat transition-all"
      style={{
        color: "#fff",
        background: "#b19cd9",
        fontWeight: 600,
        borderRadius: "30px",
        fontSize: "1rem",
        boxShadow: "0 2px 16px 0 rgba(0,0,0,0.13)",
        padding: "0.6em 1.4em"
      }}
      data-question="How was your experience with Cerny Remodeling?"
      // Optional: Encourage to leave more detailed feedback
      data-cta="Leave Feedback"
      data-on-positive="Thank you! Want to leave more detailed feedback? Visit our survey page."
      data-on-positive-url="/survey"
      data-on-negative="Sorry to hear that. Please tell us more below, or visit our survey."
      data-on-negative-url="/survey"
    >
      {/* The widget will be rendered by the FF script */}
    </feedback-fish>
  );
};

export default FeedbackFishWidget;
