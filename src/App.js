import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import SearchBar from './components/Searchbar';
import { Container } from 'reactstrap';
import 'font-awesome/css/font-awesome.css';
import SpotifyApp from './components/SpotifyApp';
import NewsHomePage from './components/NewsHomePage';
//import { Routes, Route, Router} from 'react-router-dom';
import FitnessApp from './components/FitnessApp';

function App() {
  
  return (
    <>
    <Header />
    <Container className='main-container'>
    <HomePage />
    <SearchBar />
    <SpotifyApp />
    <NewsHomePage />
    <FitnessApp />
    </Container>
    </>
  );
}

export default App;
