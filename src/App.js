import './App.css';
import { Container } from 'reactstrap';
import HomePage from './pages/HomePage';
import UnstoppableSearch from './projects/UnstoppableDomains/UnstoppableSearch';
import SpotifyApp from './projects/Spotify/SpotifyApp';
import NewsHomePage from './projects/NewsFrontEnd/NewsHomePage';
import ETLDashboard from './projects/ETLDashboard/ETLDashboard';
import ScrollToTop from './components/ScrollToTop'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from 'react-router-dom';


function App() {
  
  return (
      <Container className="main-container">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/domains" element={<UnstoppableSearch />} />
          <Route path="/spotify" element={<SpotifyApp />} />
          <Route path="/etl" element={<ETLDashboard />} />
          <Route path="/news" element={<NewsHomePage />} />
        </Routes>
      </Container>
  );
}

export default App;
