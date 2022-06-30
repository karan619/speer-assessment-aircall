import "./App.css";
import Calls from "./component/Calls";
import Archive from "./component/Archive";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CallDetails from "./component/CallDetails";
import Navbar from "./component/Navbar";
import BottomNavBar from "./component/BottomNavBar";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="contain">
          <div className="contain-view">
            {/**Archive */}
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Calls />} />

              <Route exact path="/archive" element={<Archive />} />

              <Route path="/calls/:id" element={<CallDetails />} />
            </Routes>
            <BottomNavBar />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
