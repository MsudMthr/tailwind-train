import { Route, Routes } from "react-router-dom";

//import components
import { SignUp, Work } from "./pages/index";

function App() {
  return (
    <div className="mx-auto">
      <Routes>
        <Route path="/work" element={<Work />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
