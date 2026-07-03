import React from "react";

function Frame0({ onYes, onNo }) {
  return (
    <div className="frame0">
      <h1>
        Ready to <span>hear the Evolution ?</span>
      </h1>

      <div className="frame0-buttons">
        <button className="frame0-button-yes" onClick={onYes}>
          Yes
        </button>

        <button className="frame0-button-no" onClick={onNo}>
          No
        </button>
      </div>
    </div>
  );
}

export default Frame0;
