import React from 'react'
import classes from './Home.module.css'

const Modal = ({ correctText }) => {
  return (
    <div className={classes.Modalcontainer}>
      <div>
        <p className={classes.Modal_par}>Sizning natijangiz.</p>
        <div className={classes.Modal}>
          <div className={classes.Result}>
            <p style={{ fontSize: "50px", lineHeight: "130px" }}>
              {correctText.split(' ').length} wpm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
