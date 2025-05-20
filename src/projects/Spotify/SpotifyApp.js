import React, { useState } from "react";
import { Button, Col, Row, Card, 
    CardBody, 
    CardImg, 
    CardText, 
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem
 } from 'reactstrap';
import axios from "axios";
import ArtistCard from "./ArtistCard";
import SubHeader from '../../components/SubHeader'

const SpotifyApp = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState(false);
    const [searchClicked, setSearchClicked] = useState(true);
    const [tracks, setTracks] = useState(null);
    const [albums, setAlbums] = useState(null);
    const [artist, setArtist] = useState(null);
    const [selectedApi, setSelectedApi] = useState("Search Artist's");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const SPOTIFY_TOKEN_ENDPOINT = `${process.env.REACT_APP_NODE_API_URL}/spotify/get-access-token`;

    const apiOptions = ['top-tracks', 'albums', 'artist-info'];
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
            const response = await axios.post(SPOTIFY_TOKEN_ENDPOINT);
            const accessToken = response.data.accessToken;
    
            const searchResponse = await axios.get("https://api.spotify.com/v1/search?", {
                params: { q: searchQuery, type: "artist" },
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });
            if (searchResponse.data.artists.items.length === 0) {
                console.log("no artist");
                setSearchClicked(false);
                setSearchResults(false);
            } else if(selectedApi === 'top-tracks'){
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
            } else if(selectedApi === 'albums') {
                const artistId = searchResponse.data.artists.items[0].id;
                setSearchResults(true);
            
                const albumsResponse = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/albums`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
                });

                const maxResults = 9;

                const nineResults = albumsResponse.data.items.slice(0, maxResults);

                setAlbums(nineResults);
            } else if(selectedApi === 'artist-info') {
                const artistId = searchResponse.data.artists.items[0].id;
                setSearchResults(true);
            
                const artistResponse = await axios.get(`https://api.spotify.com/v1/artists/${artistId}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
                });

                setArtist(artistResponse);
            } 
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return(
        <div className='project-container spotify-bg'>
            <SubHeader current='Spotify' dark />
            <Row> 
                <Col md={12}>
                    <h5>🎧 Spotify Artist Explorer</h5>
                    <p>This feature allows users to explore detailed information about their favorite artists directly through my portfolio site. 
                        Leveraging the Spotify Web API, users can:</p>
                        <p><li className="project-bullets"><b>Access Artist Information:</b> Gain insights into the artist's profile, including genres, popularity, and follower count.</li>
                        <li className="project-bullets"><b>View Top Tracks:</b> Discover the artist's most popular songs.</li>
                        <li className="project-bullets"><b>Browse Albums:</b> Explore a list of albums released by the artist.​</li></p>
                    <h5>🧩 Real-World Application</h5>
                        <p>This project emulates real-world scenarios where applications need to fetch and display data from external sources based on user input. It demonstrates proficiency in:</p>
                            <p><li className="project-bullets"><b>API Integration:</b> Connecting and interacting with external APIs to fetch and display data.​</li>
                            <li className="project-bullets"><b>State Management:</b> Handling multiple states and conditional rendering based on user interactions.</li>
                            <li className="project-bullets"><b>Error Handling:</b> Managing scenarios where data might be unavailable or API requests fail.</li>
                        </p>
                    <p>Technologies Used:
                        <li className="project-bullets">React, Reactstrap, Axios, Node.js, Express.js, REST APIs: Spotify Web API</li>
                    </p>        
                </Col>
                <Col className='text-center spotify-border'>
                    <h5 style={{padding:'5px 0 10px 0', fontWeight: 'bold'}}>Search Artists on Spotify</h5>
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
            <Row sm={11} className="justify-content-center spotify-search-row" style={{marginBottom: "20px"}}>
                <Col md={10} xs={11} className="text-center" style={{ marginTop: '20px' }}>
                    <form onSubmit={handleSearchSubmit}>
                        <div className="search-bar-wrapper">
                        <input
                            type="text"
                            className="custom-search-bar" 
                            value={searchQuery}
                            onChange={handleInputChange}
                            style={{ textAlign: 'center', verticalAlign: 'middle' }}
                        />
                        </div>
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
            ) : selectedApi === 'artist-info' ? (
                <Row className="justify-content-center">
                    {artist &&
                    <Col md={6} className="m-4 text-center">
                        <ArtistCard artist={artist} />
                    </Col>
                    }
                </Row>
            ) : selectedApi === "Search Artist's" ? (
                <Row>
                  <Col className="text-center" style={{fontWeight: 'bold'}}>Please select from the dropdown</Col>   
                </Row>
            ) : null } 
        </div>
    );
};

export default SpotifyApp