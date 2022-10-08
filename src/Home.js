import React, { useState, useEffect, useRef } from "react";
import ReactModal from "react-modal";
import HMain from "./components/HMain";
import HSideleft from "./components/HSideleft";
import HSideright from "./components/HSideright";
import FinishedModal from "./components/Modal";

const customStyles = {
  content: {
    width: 400,
    fontSize: 24,
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Home = () => {
  const text = `To help you get started, put together a list of 22 fun Javascript projects you can start working on right now. I included both beginner-level and intermediate level ideas to make sure things get boring. Browse through the list and click through to any JavaScript project you find intriguing. If you find a project idea that matches your goals and skill level, start building it right away!`;
  let [correctText, setCorrectText] = useState("");
  let [splittedText, setSplittedText] = useState(text.split(" "));
  let [bool, setBool] = useState(true);
  let [bool1, setBool1] = useState(true);
  let [count, setCount] = useState(2);
  let [working, setWorking] = useState(true);
  let [isLight, setIsLight] = useState(true);
  let [isArial, setIsArial] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);
  let [fullName, setFullName] = useState({ firstName: "", lastName: "" });

  let firstNameInputRef = useRef(null);
  let lastNameInputRef = useRef(null);
  let subtitle;

  useEffect(() => {
    if (localStorage.getItem("firstName") === null) {
      setIsOpen(true);
    } else {
      setFullName({
        firstName: localStorage.getItem("firstName"),
        lastName: localStorage.getItem("lastName"),
      });
    }
  }, []);

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  const handleChange = (e) => {
    setBool1(false);

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
      setBool1(false);
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

  const resetAll = () => {
    correctText
      .split(" ")
      .reverse()
      .forEach((word) => {
        if (word.trim() !== "") splittedText.unshift(word);
      });
    setCorrectText("");
    const highestTimeoutId = setTimeout(";");
    for (let i = 0; i < highestTimeoutId; i++) {
      clearTimeout(i);
    }
    setCount(60);
    setBool1(true);
    setBool(true);
  };

  const submitModal = () => {
    setIsOpen(false);
    localStorage.setItem("firstName", firstNameInputRef.current.value);
    localStorage.setItem("lastName", lastNameInputRef.current.value);
    setFullName({
      firstName: firstNameInputRef.current.value,
      lastName: lastNameInputRef.current.value,
    });
  };

  return (
    <div
      className={`Home ${isLight ? "light" : "dark"} ${
        isArial ? "arial" : "times"
      }`}
    >
      {working ? (
        <>
          <div>
            <ReactModal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                Ism va familiyangizni kiriting:{" "}
              </h2>
              <input
                type="text"
                placeholder="Ismingiz"
                style={{ padding: 8, fontSize: 20, margin: "10px 0" }}
                ref={firstNameInputRef}
              />
              <input
                type="text"
                placeholder="Familiyangiz"
                style={{ padding: 8, fontSize: 20, margin: "10px 0" }}
                ref={lastNameInputRef}
              />
              <button
                onClick={submitModal}
                style={{
                  padding: 3,
                  width: 120,
                  fontSize: 23,
                  margin: "10px 0",
                }}
              >
                Qo'shish
              </button>
            </ReactModal>
          </div>
          <HSideleft
            toggleArial={toggleArial}
            toggleTimes={toggleTimes}
            toggleLight={toggleLight}
            toggleDark={toggleDark}
            resetAll={resetAll}
          />
          <HMain
            text={splittedText.join(" ")}
            correctText={correctText}
            handleChange={handleChange}
            isLight={isLight}
          />
          <HSideright count={count} bool1={bool1} isLight={isLight} />
          <h3 style={{ fontSize: 25, width: 300, textAlign: "center" }}>
            {fullName.firstName + "  " + fullName.lastName}
            <br />
            {correctText.split(" ").length - 1
              ? correctText.split(" ").length - 1
              : ""}
          </h3>
        </>
      ) : (
        <FinishedModal
          correctText={correctText}
          percent={
            (correctText.split(" ").length - 1) / (text.split(" ").length - 1)
          }
          resetAll={resetAll}
        />
      )}
    </div>
  );
};

export default Home;
