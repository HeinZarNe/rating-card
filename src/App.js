import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Thank } from "./Thank";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import Main from "./Main";
const GlobalStyle = createGlobalStyle`

  * {
  box-sizing: border-box;
  }

  body {
    --White : hsl(0, 0%, 100%);
    --LightGrey : hsl(217, 12%, 63%);
    --MediumGrey : hsl(216, 12%, 54%);
    --DarkBlue : hsl(213, 19%, 18%);
    --VeryDarkBlue : hsl(216, 12%, 8%);
    --Orange : hsl(25, 97%, 53%);
    --MediumBlue:#293851;
    font-family : 'Overpass', sans-serif;
    padding: 0;
    margin: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/thankyou" element={<Thank />} />
        </Routes>{" "}
      </BrowserRouter>
    </>
  );
}

export default App;
