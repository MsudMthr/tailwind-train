import { Route, Routes } from "react-router-dom";

//import components
import { Work } from "./pages/index";

function App() {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
