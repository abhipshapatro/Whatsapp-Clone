
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ChatPage from './components/ChatPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/chatpage' element= { <ChatPage /> } />
          <Route path='/' element= { <Home />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
