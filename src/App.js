import "./styles.css";
import { useTranslation } from "react-i18next";

export default function App() {
  // const { t, i18n } = useTranslation();
  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {/* <button type="button" onClick={() => changeLanguage("fr")}>
        fr
      </button>
      <button type="button" onClick={() => changeLanguage("en")}>
        en
      </button>
      <h2>{t("Welcome to React")}</h2> */}
      <h2>"Welcome to React and react-i18next"</h2>
    </div>
  );
}
