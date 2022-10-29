import { useTranslation } from "react-i18next";
import style from "../components/Result.module.css";

const Result = () => {
  const { t } = useTranslation();
  const result = JSON.parse(localStorage.getItem("history"));

  return (
    <div>
      <div className={style.result_table}>
        <h2>{t("result.title")}</h2>
        {result && result.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>№</th>
                <th>WPM</th>
                <th>{t("result.percent")}</th>
                <th>{t("result.time")}</th>
              </tr>
            </thead>
            <tbody>
              {result.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.result}</td>
                  <td>{item.percent}%</td>
                  <td>
                    {`${new Date(item.date).getHours()}:${new Date(
                      item.date
                    ).getMinutes()} 
                      ${new Date(item.date).getDate()}-${
                      new Date(item.date).getMonth() + 1
                    }-${new Date(item.date).getFullYear()}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>{t("result.empty")}</div>
        )}
      </div>
    </div>
  );
};

export default Result;
