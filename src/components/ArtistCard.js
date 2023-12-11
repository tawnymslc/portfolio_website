import {
    Card, 
    CardBody, 
    CardImg, 
    CardText, 
    CardTitle, 
} from 'reactstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const ArtistCard = ({artist}) => {
    const {data} = artist;

    return (
            <Card className='spotify-card' style={{backgroundColor: 'black'}}>
            <CardBody>
            <CardImg src={data.images[0].url} style={{padding: "-25px"}}></CardImg>
                <CardTitle style={{ backgroundColor: "black", color: "white", display: 'flex', justifyContent: 'center', border: '5px', marginTop: '10px', fontWeight: 'bold' }}>
                    {data.name}
                </CardTitle>
                <CardText style={{ backgroundColor: "black", color: "white", display: 'flex', justifyContent: 'center', border: '5px', marginTop: '10px', fontWeight: 'bold' }}>
                    {data.genres[0]}
                </CardText>
                <CardText style={{ backgroundColor: "black", color: "white", display: 'flex', justifyContent: 'center', border: '5px', marginTop: '10px', fontWeight: 'bold' }}>
                    # of followers: {data.followers.total}
                </CardText>
                </CardBody>
            </Card>
    );
}

export default ArtistCard;