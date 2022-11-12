import React, { useState, useEffect, useRef } from "react";
import ReactModal from "react-modal";
import { useTranslation } from "react-i18next";
import HMain from "../components/HMain";
import HSideleft from "../components/HSideleft";
import HSideright from "../components/HSideright";
import FinishedModal from "../components/Modal";
import { dummyTextUZ, dummyTextEN } from "../text";

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
  const { t, i18n } = useTranslation();

  const [lang, setLang] = useState(localStorage.getItem("lang"));
  let randomNumber = Math.round(Math.random() * 700);

  let [text, setText] = useState(
    lang === "uz"
      ? dummyTextUZ.split(" ").slice(randomNumber, randomNumber + 110)
      : dummyTextEN.split(" ").slice(randomNumber, randomNumber + 110)
  );
  i18n.on("languageChanged", (l) => {
    setLang(l);
    resetAll();
  });

  let [correctText, setCorrectText] = useState("");

  let [bool, setBool] = useState(true);
  let [bool1, setBool1] = useState(true);
  let [count, setCount] = useState(60);
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

    if (e.target.value === text[0] + " ") {
      e.target.value = "";
      correctText += text[0] + " ";
      text = text.slice(1, text.length);
      setCorrectText(correctText);
      setText(text);
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
    const highestTimeoutId = setTimeout(";");
    let randomNumber = Math.round(Math.random() * 700);

    correctText
      .split(" ")
      .reverse()
      .forEach((word) => {
        if (word.trim() !== "") text.unshift(word);
      });

    setCorrectText("");
    for (let i = 0; i < highestTimeoutId; i++) {
      clearTimeout(i);
    }
    setCount(60);
    setBool1(true);
    setBool(true);
    setText(
      lang === "uz"
        ? dummyTextUZ.split(" ").slice(randomNumber, randomNumber + 110)
        : dummyTextEN.split(" ").slice(randomNumber, randomNumber + 110)
    );
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
                {t("modal.title")}:{" "}
              </h2>
              <input
                type="text"
                placeholder={t("modal.placeholder1")}
                style={{ padding: 8, fontSize: 20, margin: "10px 0" }}
                ref={firstNameInputRef}
                required
                minLength="3"
                maxLength="24"
              />
              <input
                type="text"
                placeholder={t("modal.placeholder2")}
                style={{ padding: 8, fontSize: 20, margin: "10px 0" }}
                ref={lastNameInputRef}
                required
                minLength="3"
                maxLength="24"
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
                {t("modal.add")}
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
            text={text.join(" ")}
            correctText={correctText}
            handleChange={handleChange}
            isLight={isLight}
          />
          <HSideright count={count} bool1={bool1} isLight={isLight} />
        </>
      ) : (
        <FinishedModal
          correctText={correctText}
          percent={(correctText.split(" ").length - 1) / (text.length - 1)}
          resetAll={resetAll}
          setWorking={setWorking}
        />
      )}
    </div>
  );
};

export default Home;
