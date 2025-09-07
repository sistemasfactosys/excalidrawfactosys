import { Excalidraw, WelcomeScreen } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";
import logoFactosys from "./assets/factosys/logofactosysv2.png";
import "./App.css";

function App() {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <a
          href="https://www.factosysperu.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logof" src={logoFactosys} alt="Logo FACTOSYS" />
        </a>
        <div style={{ height: "100vh" }}>
          <Excalidraw>
            <WelcomeScreen />
          </Excalidraw>
        </div>
      </div>
    </>
  );
}
export default App;
