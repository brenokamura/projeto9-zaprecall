import { useState } from "react";
import styled from "styled-components"
//import "./Home.css";

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
    <HomePage>
      <img src="assets/img/logo.png" alt="logo" />
      <h1>ZapRecall</h1>
      <select
        className="decks"
        id="decks"
        onChange={(e) => setSelectValue(e.target.value)}
      >
        <option data-identifier="deck-selector" value="">Escolha seu deck</option>
        <option data-identifier="deck-option" value="jsx">JSX</option>
      </select>
      <input
        data-identifier="goals-input"
        type="number"
        min="0"
        max="8"
        placeholder="Digite sua meta de zaps..."
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button data-identifier="start-btn" onClick={buttonIniciar}>Iniciar Recall!</button>
    </HomePage>
  ) : (
    <></>
  );
}





const HomePage = styled.div
`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background-color: #FB6B6B;

  h1 {
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -0.012em;
    color: #FFFFFF;
  }

  img {
    width: 136px;
    height: 161px;
    margin-bottom: 13px;
  }

  button {
    width: 246px;
    height: 54px;
    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-top: 15px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 14px;
    text-align: center;
    color:#D70900;
    cursor: pointer;
  }

  #decks {
    width: 246px;
    height: 54px;
    background: #FFFFFF;
    border-radius: 5px;
    border: none;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 11px;
    color: #ADADAD;
    margin-top: 30px;
    &:focus {
    outline: none;
    }
  }

  input {
    width: 246px;
    height: 54px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-top: 15px;
    border: none;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 11px;
    color: #ADADAD;
  & input:focus {
    outline: none;
  } 
  & input::placeholder {
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #ADADAD;
  }
  & input:focus::placeholder {
  color: transparent;
  }
  }
}

`