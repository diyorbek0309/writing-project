import "./anime.css";


const HSideright = ({ count , bool }) => {
  
  console.log(bool);
  return (
    <>
    
      <div className={`anime ${!bool ? 'anime2': ""}` }>{count}</div>
    </>
  );
};

export default HSideright;
