    
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import { Suspense } from "react";

function App() {
  return (
    <div className="w-[1536px] ">
       <Router>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage/>} />
      
          </Routes>
          </Suspense>
       </Router>
    </div>
  )
}

export default App
