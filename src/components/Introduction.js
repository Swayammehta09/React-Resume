import React from "react";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Swayam Mehta</h1>
          <p className="i-desc">
            I am a second year Bachelor of Data Science student with a major in
            Data Science. I am a hardworking and committed individual who
            strives to always deliver excellence. I am highly proactive and love
            to be challenged. I have outstanding communications skills and I
            enjoy working on tasks and projects that involve client interaction.
            I am seeking a position in marketing communications with a reputable
            company that values their staff and offers solid, exciting career
            opportunities. I am keen to utilize and demonstrate my
            organizational, creative, communications and interpersonal skills
            and my ability to add value to a company willing to offer me the
            opportunity.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
      </div>
    </div>
  );
};

export default Introduction;
