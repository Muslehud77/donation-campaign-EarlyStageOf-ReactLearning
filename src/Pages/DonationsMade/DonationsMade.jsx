import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import getStoredItem from '../../LocalStorage/LocalStorage';
import CardForDonationPg from '../../Components/CardForDon-Page/CardForDonPg';

const DonationsMade = () => {
    const allDonations = useLoaderData()
    const [showDonations,setDonations] = useState([])
   
   useEffect(()=>{
    const local = getStoredItem()
    const toShow = allDonations.filter(donation => local.includes(parseInt(donation.id)))
    setDonations(toShow)
   },[])
    
    
   
   

    return (
      <div className='lg:grid grid-cols-2 gap-5 container mx-auto my-20'>
        {showDonations.map((donation) => (
          <CardForDonationPg key={donation.id} donation={donation}></CardForDonationPg>
        ))}
      </div>
    );
};

export default DonationsMade;