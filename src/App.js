import './App.css';
import Header from './pages/Header';
import HomePage from './pages/HomePage';
import SearchBar from './projects/UnstoppableDomains/Searchbar';
import { Container } from 'reactstrap';
import SpotifyApp from './projects/Spotify/SpotifyApp';
import NewsHomePage from './projects/NewsFrontEnd/NewsHomePage';
import ETLDashboard from './projects/ETLDashboard/ETLDashboard';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Routes, Route, Router} from 'react-router-dom';

function App() {
  
  return (
    <>
    <Header />
    <Container className='main-container'>
    <HomePage />
    <SearchBar />
    <SpotifyApp />
    <ETLDashboard />
    <NewsHomePage />
    </Container>
    </>
  );
}

export default App;
