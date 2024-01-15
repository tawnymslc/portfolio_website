import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import SearchBar from './components/Searchbar';
import { Container } from 'reactstrap';
import 'font-awesome/css/font-awesome.css';
import SpotifyApp from './components/SpotifyApp';
import NewHomePage from './components/NewHomePage';


function App() {
  
  return (
    <>
    <Header />
    <Container className='main-container'>
    <HomePage />
    <SearchBar />
    <SpotifyApp />
    <NewHomePage />
    </Container>
    </>
  );
}

export default App;
