export const Switch = ({ toggleLight, toggleDark, img1, img2 }) => {
  return (
    <div>
      <button onClick={toggleLight}>
        <img src={img1} alt="Light" />
      </button>
      <button onClick={toggleDark}>
        <img src={img2} alt="Dark" />
      </button>
    </div>
  );
};
