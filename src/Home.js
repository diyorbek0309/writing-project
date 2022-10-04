import React, { useState } from "react";
import HMain from "./components/HMain";
import HSideleft from "./components/HSideleft";
import HSideright from "./components/HSideright";
import Modal from "./components/Modal";

const Home = () => {
  const text = `To help you get started, put together a list of 22 fun Javascript projects you can start working on right now. I included both beginner-level and intermediate level ideas to make sure things get boring. Browse through the list and click through to any JavaScript project you find intriguing. If you find a project idea that matches your goals and skill level, start building it right away!`;
  let [correctText, setCorrectText] = useState("");
  let [splittedText, setSplittedText] = useState(text.split(" "));
  let [bool, setBool] = useState(true);
  let [count, setCount] = useState(1);
  let [working, setWorking] = useState(true);
  let [isLight, setIsLight] = useState(true);
  let [isArial, setIsArial] = useState(true);

  const handleChange = (e) => {
    if (e.target.value === splittedText[0] + " ") {
      e.target.value = "";
      correctText += splittedText[0] + " ";
      splittedText = splittedText.slice(1, splittedText.length);
      setCorrectText(correctText);
      setSplittedText(splittedText);
    }

    if (bool) {
      const timer = setInterval(() => {
        if (count === 0) {
          clearInterval(timer);
          setWorking(false);
        } else {
          setCount(--count);
        }
      }, 1000);
      setBool(false);
    }
  };

  const toggleArial = () => {
    setIsArial(true);
  };

  const toggleTimes = () => {
    setIsArial(false);
  };

  const toggleLight = () => {
    setIsLight(true);
  };

  const toggleDark = () => {
    setIsLight(false);
  };

  return (
    <div
      className={`Home ${isLight ? "light" : "dark"} ${
        isArial ? "arial" : "times"
      }`}
    >
      {working ? (
        <>
          <HSideleft
            toggleArial={toggleArial}
            toggleTimes={toggleTimes}
            toggleLight={toggleLight}
            toggleDark={toggleDark}
          />
          <HMain
            text={splittedText.join(" ")}
            correctText={correctText}
            handleChange={handleChange}
          />
          <HSideright count={count} />
        </>
      ) : (
        <Modal correctText={correctText} />
      )}
    </div>
  );
};

export default Home;
