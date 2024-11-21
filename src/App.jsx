import "./App.css";
import Split from "react-split";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";

function App() {
  return (
    <>
      <main>
        <Split sizes={[35, 65]} direction="horizontal" className="split">
          <Sidebar />
          <Editor />
        </Split>
      </main>
    </>
  );
}

export default App;
