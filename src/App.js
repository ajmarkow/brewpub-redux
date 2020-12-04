import "./App.css";
import Header from "./components/Header";
import KegControl from "./components/KegControl";

function App() {
  return (
    <div className="App">
      <div className="flex h-screen content-center">
        <div className="m-auto self-center">
          <Header />
          <br></br>
          <KegControl />
        </div>
      </div>
    </div>
  );
}

export default App;
