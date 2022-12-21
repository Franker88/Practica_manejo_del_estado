import { UseState } from "../components/UseState";
import { ClassState } from "../components/ClassState";
import "../styles/App.css";
import { UseReducer } from "../components/UseReducer";

function App() {
  return (
    <div className="App">
      <UseState name="useState" />
      <UseReducer name="useReducer" />
      <ClassState name="classState" />
    </div>
  );
}

export default App;
