import React, { useState } from "react";
import { Button, Container, Col, Row, Card, 
    CardBody, 
    CardImg, 
    CardText, 
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem
 } from 'reactstrap';
import axios from "axios";
import SpotifySelectApi from "./SpotifySelectApi";

const SpotifyApp = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState(false);
    const [searchClicked, setSearchClicked] = useState(true);
    const [tracks, setTracks] = useState(null);
    const [albums, setAlbums] = useState(null);
    const [selectedApi, setSelectedApi] = useState("Search Artist's");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const apiOptions = ['top-tracks', 'albums'];
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSelectApi = (api) => {
        setSelectedApi(api);
        setTracks(null); // Clear tracks when the API selection changes
        setAlbums(null); // Clear albums when the API selection changes
      };

    const handleSearchSubmit = async (event) => {
        event.preventDefault();
    
        try{
            const response = await axios.post(process.env.REACT_APP_SPOTIFY_TOKEN_URL);
            const accessToken = response.data.accessToken;
    
            const searchResponse = await axios.get("https://api.spotify.com/v1/search?", {
                params: { q: searchQuery, type: "artist" },
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });
            if (searchResponse.data.artists.items.length == 0) {
                console.log("no artist");
                setSearchClicked(false);
                setSearchResults(false);
            } else if(selectedApi == 'top-tracks'){
                const artistId = searchResponse.data.artists.items[0].id;
                setSearchResults(true);
            
                const tracksResponse = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
                });
                console.log(tracksResponse);
                const maxResults = 9;

                const nineResults = tracksResponse.data.tracks.slice(0, maxResults);

                setTracks(nineResults);
            } else if(selectedApi == 'albums') {
                const artistId = searchResponse.data.artists.items[0].id;
                setSearchResults(true);
            
                const albumsResponse = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/albums`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
                });

                console.log(albumsResponse);
                const maxResults = 9;

                const nineResults = albumsResponse.data.items.slice(0, maxResults);
                console.log(nineResults);
                setAlbums(nineResults);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return(
        <>
        <div 
        style={{  backgroundImage: `url(${require('../img/wp2775382.jpg')})`, borderRadius: '25px', marginBottom: "50px" }}>
        <Container className="container-fluid spotify-container">
            <Row> 
                <Col className='text-center'>
                    <h2>Spotify API Integration</h2>
                    <h5>Search Artist</h5>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle} >
                            <DropdownToggle caret style={{ backgroundColor: 'rgb(43, 92, 36)', color: 'white', lineHeight: "16px", display: 'inline-block', textAlign: 'center', fontWeight: 'bold'}}>{selectedApi}</DropdownToggle>
                            <DropdownMenu>
                                {apiOptions.map((select) => {
                                    return <DropdownItem key={select} onClick={() =>  handleSelectApi(select)} >{select}</DropdownItem>
                                })}
                            </DropdownMenu>
                        </Dropdown>
                </Col>
            </Row>
            <Row sm={11} className="justify-content-center" style={{marginBottom: "40px"}}>
                <Col xs='auto' className="text-center" style={{ marginTop: '40px' }}>
                    <form onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            className="spotify-search-bar" 
                            value={searchQuery}
                            onChange={handleInputChange}
                            style={{ textAlign: 'center', verticalAlign: 'middle' }}
                        />
                        <Button 
                            type='submit' 
                            style={{ backgroundColor: 'rgb(43, 92, 36)', color: 'white', lineHeight: "16px", display: 'inline-block', textAlign: 'center', fontWeight: 'bold'}}>
                            Search
                        </Button>
                    </form>
                </Col>
            </Row>
            {!searchResults && !searchClicked ? (
                <Row>
                    <Col className="text-center" style={{fontWeight: 'bold'}}>No Results. Search Again</Col> 
                </Row>
            ) : selectedApi === 'top-tracks' ? (
                <Row className="justify-content-center">
                {tracks && tracks.map((track, index) => (
                <Col md={3} className="m-4 text-center" key={index}>
                    <Card className='spotify-card' style={{backgroundColor: 'black'}}>
                    <CardBody>
                        <CardImg src={track.album.images[1].url} style={{padding: "-25px"}}></CardImg>
                        <CardText style={{ backgroundColor: "black", color: "white", display: 'flex', justifyContent: 'center', border: '5px', marginTop: '10px', fontWeight: 'bold' }}>
                            {track.name}
                        </CardText>
                        </CardBody>
                    </Card>
                </Col>
                ))}
            </Row> 
            ) : selectedApi === 'albums' ? (
                <Row className="justify-content-center">
                    {albums && albums.map((album, index) => (
                    <Col md={3} className="m-4 text-center" key={index}>
                        <Card className='spotify-card' style={{backgroundColor: 'black'}}>
                        <CardBody>
                            <CardImg src={album.images[1].url} style={{padding: "-25px"}}></CardImg>
                            <CardText style={{ backgroundColor: "black", color: "white", display: 'flex', justifyContent: 'center', border: '5px', marginTop: '10px', fontWeight: 'bold' }}>
                                {album.name}
                            </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
                </Row>
            ) : null } 
        </Container>
        </div>
        </>
    );
};

export default SpotifyApp