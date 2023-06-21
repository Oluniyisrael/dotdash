import logo from './logo.svg';
import LandingPage from './pages/landingPage/LandingPage';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
   <Router>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
    </Routes>
   </Router>

    </div>
  );
}

export default App;
