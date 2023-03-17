import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

function Router() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
