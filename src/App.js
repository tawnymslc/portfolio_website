import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import SearchBar from './components/Searchbar';
import { Container } from 'reactstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SpotifyApp from './components/SpotifyApp';
import NewsHomePage from './components/NewsHomePage';
//import { Routes, Route, Router} from 'react-router-dom';

function App() {
  
  return (
    <>
    <Header />
    <Container className='main-container'>
    <HomePage />
    <SearchBar />
    <SpotifyApp />
    <NewsHomePage />
    </Container>
    </>
  );
}

export default App;
