import React from "react";
import ReactHtmlParser from "react-html-parser";
import "../assets/styles/tailwind-override.css";

const HtmlParsed = ({ content }) => {
  return (
    <div className="override-tailwind text-gray-600">
      {ReactHtmlParser(content)}
    </div>
  );
};

export default HtmlParsed;
