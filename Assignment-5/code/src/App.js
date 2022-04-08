// import react from "react";
import Postview from "./Postview";
import Landing from "./components/Landing";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
    
export default function App() {
  return (
    <div>
        <Router>
            <Routes>
            <Route exact path="/" element={<Landing/>}/>
            </Routes>
            <Routes>
            <Route exact path="/Postview" element={<Postview/>}/>   
            </Routes>
        </Router>
    </div>
            
  )
}



