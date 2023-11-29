import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import SearchBar from './components/Searchbar';
import { Container } from 'reactstrap';
import 'font-awesome/css/font-awesome.css';
import SpotifyApp from './components/SpotifyApp';


function App() {
  
  return (
    <>
    <Header />
    <Container className='main-container'>
    <HomePage />
    <SearchBar />
    <SpotifyApp />
    </Container>
    </>
  );
}

export default App;
