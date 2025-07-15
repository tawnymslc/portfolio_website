import './App.css';
import HomePage from './pages/HomePage';
import UnstoppableSearch from './projects/UnstoppableDomains/UnstoppableSearch';
import SpotifyApp from './projects/Spotify/SpotifyApp';
import NewsHomePage from './projects/NewsFrontEnd/NewsHomePage';
import ETLDashboard from './projects/ETLDashboard/ETLDashboard';
import Kubernetes from './projects/KubernetesServices/Kubernetes';
import ScrollToTop from './components/ScrollToTop'
import { Routes, Route} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/domains" element={<UnstoppableSearch />} />
        <Route path="/spotify" element={<SpotifyApp />} />
        <Route path="/etl" element={<ETLDashboard />} />
        <Route path="/news" element={<NewsHomePage />} />
        <Route path="/kubernetes" element={<Kubernetes />} />
      </Routes>
    </>
  );
}

export default App;
