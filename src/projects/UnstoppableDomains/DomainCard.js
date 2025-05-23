import {
        Button, 
        Card, 
        CardBody, 
        CardImg, 
        CardText, 
        CardTitle, 
        CardFooter
    } from 'reactstrap';
import PaymentModal from './PaymentModal';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const DomainCard = ({ domain, udImg, searchQuery }) => {
    const {name, price} = domain;
    const domainName = name.split('.')

    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

    const udClick = () => {
        const url = `https://unstoppabledomains.com/search?searchTerm=${encodeURIComponent(searchQuery)}&searchRef=home&tab=relev`;
        window.open(url, '_blank');
        console.log('Search: ', url, searchQuery);
    };

    return (
        <Card className='domain-card'>
            <CardBody className='domain-card-body'>
            <CardImg 
                src={udImg}
            />
                <CardTitle className='domain-card-title'>{domainName[0]}</CardTitle>
                <CardText className='domain-tld'>.{domainName[1]}</CardText>
            </CardBody>
            <CardText style={{ marginTop: '15px', fontWeight: 'bold'}}>${price}</CardText>
            <CardFooter style={{ display: 'flex', justifyContent: 'center' }}>
                <Button 
                    style={{ marginRight: '10px', backgroundColor: 'rgb(77, 72, 242)' }}
                    onClick={udClick}
                >
                    UD
                </Button>
                <Elements stripe={stripePromise}>
                    <PaymentModal price={price} domain={name} />
                </Elements>
            </CardFooter>
      </Card>
    );
  }

  export default DomainCard;