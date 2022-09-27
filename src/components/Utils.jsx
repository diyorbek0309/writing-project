export const Switch = ({ img1, img2 }) => {
  return (
    <div>
      <button>
        <img src={img1} alt="Light" />
      </button>
      <button>
        <img src={img2} alt="Dark" />
      </button>
    </div>
  );
};
