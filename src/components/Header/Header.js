//import "./Header.css";
import styled from "styled-components"

export default function Header() {
  return (
      <HeaderLogo>
          <img src="assets/img/logo-pequeno.png" alt="logo-zaprecall" />
          <h1>ZapRecall</h1>
      </HeaderLogo>
  );
}


const HeaderLogo = styled.div
`
  display: flex;
  justify-content: center;
  margin-top: 48px;

  img {
    width: 52px;
    height: 60px;
    margin-right: 22px;
  }

  h1 {
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.012em;
    color: #FFFFFF;
  }
}
`