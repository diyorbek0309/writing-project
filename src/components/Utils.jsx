export const Switch = ({ toggleLight, toggleDark, img1, img2 }) => {
  return (
    <div>
      <button
        onClick={(e) => {
          toggleLight();
          // e.currentTarget.classList.add("active");
        }}
      >
        <img src={img1} alt="Light" />
      </button>
      <button
        onClick={(e) => {
          toggleDark();
          // e.currentTarget.classList.add("active");
        }}
      >
        <img src={img2} alt="Dark" />
      </button>
    </div>
  );
};
