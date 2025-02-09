import React, { useState } from "react";
import ChatWindow from "./ChatWindow";

const SupportButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="support-container">
      <button onClick={() => setOpen(!open)}>Contact Support</button>
      {open && <ChatWindow />}
    </div>
  );
};

export default SupportButton;
