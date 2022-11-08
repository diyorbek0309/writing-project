import "./anime.css";
import "./Home.module.css";

const HSideright = ({ count, bool1, isLight }) => {
  return (
    <>
      <div
        className={`anime ${!bool1 ? "anime2" : ""} ${
          !isLight ? "tun" : "kun"
        }`}
      >
        {count}
      </div>
    </>
  );
};

export default HSideright;
