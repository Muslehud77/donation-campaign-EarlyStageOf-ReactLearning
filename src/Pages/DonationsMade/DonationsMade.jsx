import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import getStoredItem from '../../LocalStorage/LocalStorage';
import CardForDonationPg from '../../Components/CardForDon-Page/CardForDonPg';
import { Helmet } from 'react-helmet-async';

const DonationsMade = () => {
    const allDonations = useLoaderData()
    const [showDonations,setDonations] = useState([])
    const [showAll,setShowAll] = useState(false)
    
    
    let donToShow = showDonations.slice(0, 4);

    if (showAll) {
     donToShow = showDonations;
    }

   useEffect(() => {
     const local = getStoredItem();
     const toShow = allDonations.filter((donation) =>
       local.includes(parseInt(donation.id))
     );
     setDonations(toShow);
   }, [showAll]);



   

    return (
      <div>
        <Helmet>
          <title>Donation Campaign | Donation</title>
        </Helmet>
        {showDonations.length > 0 ? (
          <div className={`lg:mt-10 ${showAll || "lg:h-screen"} `}>
            <h1 className="text-5xl text-center font-semibold">Donations</h1>
            <div className="">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 container mx-auto my-5 px-2 ">
                {donToShow.map((donation) => (
                  <CardForDonationPg
                    key={donation.id}
                    donation={donation}
                  ></CardForDonationPg>
                ))}
              </div>
              {donToShow.length === 4 && (
                <div className="flex justify-center my-10">
                  <button
                    onClick={() => {
                      setShowAll(true);
                    }}
                    className="btn bg-cyan-300"
                  >
                    Show All
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="h-screen flex justify-center items-center">
            <h1 className="text-5xl font-bold text-center">
              You Haven't Donated Yet!
            </h1>
          </div>
        )}
      </div>
    );
};

export default DonationsMade;