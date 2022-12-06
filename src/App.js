import MainContent from "./components/MainContent";
import SimpleNavBar from "./components/SimpleNavBar";
import "./style.css";

function App() {
  return (
    <>
      <header>
        <SimpleNavBar />
      </header>
      <main className="main">
        <MainContent />
      </main>
    </>
  );
}

export default App;
