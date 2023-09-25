
import { useLoaderData } from 'react-router-dom';
import Banner from '../../Components/Header/Banner/Banner';
import DonationContainer from '../../Components/DonationContainer/DonationContainer';

const Home = () => {
    const donations = useLoaderData()
    console.log(donations)
    return (
        <div>
            <Banner></Banner>
            <DonationContainer donations={donations}></DonationContainer>
        </div>
    );
};

export default Home;