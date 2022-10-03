//import "./Footer.css";
import styled from "styled-components"

let numberOfQuestions = 8;
let answers = [];
let contadorZap = 0;

function Footer({
  contador,
  setContador,
  iconsAnswers,
  setIconsAnswers,
  meta,
  deDeckAndMeta,
  setDeckAndMeta,
  setVisible,
}) {
  function restartRecall() {
    setContador(0);
    answers = [];
    setIconsAnswers([]);
    setDeckAndMeta({ meta: "", deck: "" });
    setVisible(true);
  }

  if (contador !== numberOfQuestions) {
    return (
      <FooterContainer data-identifier="flashcard-counter">
        <p>
          {contador}/{numberOfQuestions} CONCLUÍDOS
        </p>
        <div className="icons-answer">
          {iconsAnswers.map((answer) => answer)}
        </div>
      </FooterContainer>
    );
  } else {
    for (let i = 0; i < iconsAnswers.length; i++) {
      let answer = iconsAnswers[i].props.id;
      answers.push(answer);
    }
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === "zap") contadorZap += 1;
    }
    if (answers.includes("nao-lembrei") === true) {
      if (meta === "") {
        return (
          <FooterMsg>
            <p>
              😢 <span>PUTZ!</span>
            </p>
            <p>Ainda faltaram alguns... Mas não desanime!</p>
            <div className="icons-answer">
              {iconsAnswers.map((answer) => answer)}
            </div>
            <button
              className="reiniciar"
              onClick={() => {
                restartRecall();
              }}
            >
              REINICAR RECALL
            </button>
          </FooterMsg>
        );
      } else {
        if (contadorZap >= parseInt(meta)) {
          return (
            <FooterMsg>
              <p>
                😢 <span>PUTZ!</span>
              </p>
              <p>Ainda faltaram alguns... Mas não desanime!</p>
              <p>Lado bom? Você atingiu sua meta de Zaps!</p>
              <div className="icons-answer">
                {iconsAnswers.map((answer) => answer)}
              </div>
              <button
                className="reiniciar"
                onClick={() => {
                  restartRecall();
                }}
              >
                REINICAR RECALL
              </button>
            </FooterMsg>
          );
        } else {
          return (
            <FooterMsg>
              <p>
                😢 <span>PUTZ!</span>
              </p>
              <p>Ainda faltaram alguns... Mas não desanime!</p>
              <p>
                Meta de Zaps não atingida! Não desanime, a prática leva a
                perfeição!
              </p>
              <div className="icons-answer">
                {iconsAnswers.map((answer) => answer)}
              </div>
              <button
                className="reiniciar"
                onClick={() => {
                  restartRecall();
                }}
              >
                REINICAR RECALL
              </button>
            </FooterMsg>
          );
        }
      }
    } else {
      if (meta === "") {
        return (
          <FooterMsg>
            <p>
              🥳 <span>PARABÉNS!</span>
            </p>
            <p>Você não esqueceu de nenhum flashcard!</p>
            <div className="icons-answer">
              {iconsAnswers.map((answer) => answer)}
            </div>
            <button
              className="reiniciar"
              onClick={() => {
                restartRecall();
              }}
            >
              REINICAR RECALL
            </button>
          </FooterMsg>
        );
      } else {
        if (contadorZap >= parseInt(meta)) {
          return (
            <FooterMsg>
              <p>
                🥳 <span>PARABÉNS!</span>
              </p>
              <p>Você não esqueceu de nenhum flashcard!</p>
              <p>Quer ficar mais feliz ainda? Atingiu sua meta de Zaps!</p>
              <div className="icons-answer">
                {iconsAnswers.map((answer) => answer)}
              </div>
              <button
                onClick={() => {
                  restartRecall();
                }}
              >
                REINICAR RECALL
              </button>
            </FooterMsg>
          );
        } else {
          return (
            <FooterMsg>
              <p>
                🥳 <span>PARABÉNS!</span>
              </p>
              <p>Você não esqueceu de nenhum flashcard!</p>
              <p>A meta de Zaps não foi atingida, mas estamos quase lá!</p>
              <div className="icons-answer">
                {iconsAnswers.map((answer) => answer)}
              </div>
              <button
                className="reiniciar"
                onClick={() => {
                  restartRecall();
                }}
              >
                REINICAR RECALL
              </button>
            </FooterMsg>
          );
        }
      }
    }
  }
}

export default Footer;

const FooterContainer = styled.div
`
    margin-top: 650px;
    width: 100%;
    min-height: 70px;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    height: 50px;
    position: fixed;
    bottom: 0
  p {
    text-align: center;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    margin-bottom: 5px;
  }
`
const FooterMsg = styled.div
`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -210px;
    min-height: 244px;
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.15);
    & p:first-child {
    margin-top: 22px;
    }
    & span {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
  }

  button {
    width: 167px;
    min-height: 32px;
    background: #FB6B6B;
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    margin: 27px 0 25px;
    border: none;
    cursor:pointer;
  }
  .icons-answer #nao-lembrei {
    color: #FF3030;
    width: 23px;
    height: 23px;
  }


  .icons-answer #zap {
    color: #2FBE34;
    width: 23px;
    height: 23px;
  }

  .icons-answer #quase-lembrei {
    color: #FF922E;
    width: 23px;
    height: 23px;
  }


}
`