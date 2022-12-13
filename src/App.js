import './App.css';
import './main.scss';
import LandingPage from './pages/LandingPage';
import { Route, Routes, useNavigate } from "react-router-dom"
import PageNotFound from './pages/PageNotFound';

function App() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="*" element={<PageNotFound navigate={navigate} />} />
      <Route path="/" element={<LandingPage navigate={navigate} />} />
      <Route path="/forgot-password" ex element={<LandingPage navigate={navigate} />} />
    </Routes>
  );
}

export default App;
