import { Route, Routes } from "react-router-dom";

//import components
import { SignUp, Work, HomePage } from "./pages/index";

function App() {
  return (
    <div className="mx-auto">
      <Routes>
        <Route path="/work" element={<Work />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
