import { useEffect } from "react";
import "./App.css";
import { GlobalStyles } from "./GlobalStyles";
import { Header } from "./components";

function App() {
  // setar o titulo da pagina com slice
  let title = document.title;

  // motrar o title letra por letra com settimout
  useEffect(() => {
    let i = 0;
    let titleLength = title.length;
    let titleInterval = setInterval(() => {
      if (i <= titleLength) {
        document.title = title.slice(0, i);
        i++;
      } else {
        i = 0;
      }
    }, 100);
    return () => {
      clearInterval(titleInterval);
    };
  }, [title]);

  return (
    <div>
      <Header />
      <GlobalStyles />
    </div>
  );
}

export default App;
