import React, { useState } from "react";
import "./styles.css";
import ReactMarkdown from "react-markdown";

function Markdown() {
  const [markDown, setMarkDown] = useState("Welcome to Markdown");

  return (
    <div className="center-div">
      <textarea
        className="left-side"
        value={markDown}
        onChange={(e) => setMarkDown(e.target.value)}
      ></textarea>
      <div className="right-side">
        <ReactMarkdown>{markDown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Markdown;
