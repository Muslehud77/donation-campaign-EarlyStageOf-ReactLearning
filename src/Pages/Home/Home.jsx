
import { useLoaderData } from 'react-router-dom';
import Banner from '../../Components/Header/Banner/Banner';
import DonationContainer from '../../Components/DonationContainer/DonationContainer';
import { useState } from 'react';

const Home = () => {
    const donations = useLoaderData()

     const [search, setSearch] = useState(null);

     let donationsToShow = []

     if(!search) {
        donationsToShow = [...donations]
     }else{
        const filterDonations = donations.filter(donation => donation.category.toLowerCase() === search.toLowerCase())
        donationsToShow = [...filterDonations]
     }

 
    return (
      <div>
        <Banner setSearch={setSearch}></Banner>
        <DonationContainer
          search={search}
          donations={donationsToShow}
        ></DonationContainer>
      </div>
    );
};

export default Home;