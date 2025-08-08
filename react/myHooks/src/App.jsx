import "./App.css";
import Emp from "./pages/emp";
import HR from "./pages/hr";
import { emp, hr } from "./data/company";
import { CreateContxt } from "./hooks/Hooks";
let ceo = "admin";

function App() {
  return (
    <CreateContxt.Provider value={{ hr, emp, ceo }}>
      <Emp props={hr} />
      <HR />
    </CreateContxt.Provider>
  );
}

export default App;
