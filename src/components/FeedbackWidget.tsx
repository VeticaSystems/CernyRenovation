
import React, { useState } from "react";
import { QuickFeedbackModal } from "./QuickFeedbackModal";

/**
 * Custom floating feedback widget replacing Feedback Fish.
 */
const FeedbackWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
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
      <QuickFeedbackModal open={open} onOpenChange={setOpen} />
    </>
  );
};

export default FeedbackWidget;
