import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound, Home } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
