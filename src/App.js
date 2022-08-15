import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import ChatPage from "./components/ChatPage";

function App() {
  const [user, setUser] = useState();

  return (
    <Router>
      <div className="App">
        {user ? (
          <>
            <Routes>
              <Route path="/chatpage" element={<ChatPage />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </>
        ) : (
          <Login />
        )}
      </div>
    </Router>
  );
}

export default App;
