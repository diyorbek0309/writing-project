import "./anime.css";

const HSideright = ({ count, bool }) => {
  return (
    <>
      <div className={`anime ${!bool ? "anime2" : ""}`}>{count}</div>
    </>
  );
};

export default HSideright;
