import logo from "./logo.svg";
import "./App.css";
import ImageMatting from "./ImageMatting";
import { ImageMattingContextProvider } from "./ImageMattingContext";

function App() {
  return (
    <div className="App">
      <ImageMattingContextProvider>
        <ImageMatting />
      </ImageMattingContextProvider>
    </div>
  );
}

export default App;
