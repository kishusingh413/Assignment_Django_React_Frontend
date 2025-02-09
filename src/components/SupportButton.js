import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import "../styles/SupportButton.css"; // Style separately

const SupportButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="support-container">
      {open && <ChatWindow closeChat={() => setOpen(false)} />}
      <button className="support-btn" onClick={() => setOpen(!open)}>
        {open ? "Close Chat" : "Contact Support"}
      </button>
    </div>
  );
};

export default SupportButton;
