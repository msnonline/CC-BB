import "./App.css";
import Header from "./components/Header";
import Left from "./components/Left";
import Right from "./components/Right";

function App() {
  return (
    <div className="layout">
      <Header />
      <div className="Content">
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default App;
