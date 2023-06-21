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
{/* errand sending App */}
    </div>
  );
}

export default App;
