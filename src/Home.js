import React from "react";
import HMain from "./components/HMain";
import HSideleft from "./components/HSideleft";
import HSideright from "./components/HSideright";

const Home = () => {
  const text = `To help you get started, put together a list of 22 fun Javascript projects you can start working on right now. I included both beginner-level and intermediate level ideas to make sure things get boring. Browse through the list and click through to any JavaScript project you find intriguing. If you find a project idea that matches your goals and skill level, start building it right away!`;
  let splittedText = text.split(" ");
  let correctText = "";

  const handleChange = (e) => {
    if (e.target.value === splittedText[0] + " ") {
      e.target.value = "";
      correctText += splittedText[0] + " ";
      splittedText = splittedText.slice(1, splittedText.length);
      console.log(correctText, splittedText);
    }
  };

  return (
    <div className="Home">
      <HSideleft />
      <HMain
        text={splittedText.join(" ")}
        correctText={correctText}
        handleChange={handleChange}
      />
      <HSideright />
    </div>
  );
};

export default Home;
