import { useState } from "react";
import "./Home.css";

export default function Home({ visible, setVisible, deckAndMeta, setDeckAndMeta }) {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  function buttonIniciar() {
    if (selectValue === "") {
      alert("Selecione um deck");
      return;
    } else if (parseInt(inputValue) > 8) {
      alert("A meta máxima de Zaps é 8");
      return;
    } else {
      setVisible(false);
      setDeckAndMeta({ deck: selectValue, meta: inputValue });
    }
  }

  return visible === true ? (
    <div className="home-page">
      <img src="assets/img/logo.png" alt="logo" />
      <h1>ZapRecall</h1>
      <select
        className="decks"
        id="decks"
        onChange={(e) => setSelectValue(e.target.value)}
      >
        <option value="">Escolha seu deck</option>
        <option value="jsx">JSX</option>
      </select>
      <input
        type="number"
        min="0"
        max="8"
        placeholder="Digite sua meta de zaps..."
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={buttonIniciar}>Iniciar Recall!</button>
    </div>
  ) : (
    <></>
  );
}
