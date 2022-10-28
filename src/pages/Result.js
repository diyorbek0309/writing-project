import React from "react";
import style from "../components/Result.module.css";

const Result = () => {
  return (
    <div>
      <div className={style.result_table}>
        <h2>Natija</h2>
        <table>
          <thead>
            <tr>
              <th>Vaqt</th>
              <th>Wpm</th>
              <th>Protsent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AM</td>
              <td>Soni</td>
              <td>%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Result;
