import React, { useState } from "react";
import "./LandbotEmbed.css";

const LandbotEmbed = () => {
  const [openBot, setOpenBot] = useState(false);

  return (
    <>
      {openBot && (
        <iframe
          title="Landbot Chat"
          src="https://landbot.online/v3/H-3152711-8SN38NFXE8USL20J/index.html"
          className="landbot-frame"
        />
      )}

      <button
        className="open-bot-btn"
        onClick={() => setOpenBot(!openBot)}
      >
        💬
      </button>
    </>
  );
};

export default LandbotEmbed;