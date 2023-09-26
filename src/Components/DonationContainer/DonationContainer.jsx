
import PropTypes from 'prop-types';
import Card from '../DonationsCard/Card';
import { useState } from 'react';

const DonationContainer = ({ donations, search }) => {

  const [showAll, setShowAll] = useState(false);

  let donationsToShow = [];

  if (donations.length > 4) {
    donationsToShow = donations.slice(0, 8);
  } else if (donations.length < 4){
    donationsToShow = donations.slice(0, 2);
  }

  if (showAll) {
    donationsToShow = donations;
  }





  return (
    <div className="container px-10 md:px-0 mx-auto my-10 space-y-5">
      <h1 className="text-5xl text-center capitalize">{`${
        search ? search : "All"
      }`}</h1>
      <div className="grid lg:grid-cols-4 gap-5 ">
        {donationsToShow.map((donation, idx) => (
          <Card key={idx} donation={donation}></Card>
        ))}
      </div>
      <div className="flex justify-center my-5">
        {donationsToShow.length !== 0 &&
          donationsToShow.length < `${search ? 3 : 9}` && (
            <button
              className="btn bg-cyan-300"
              onClick={() => {
                setShowAll(true);
              }}
            >
              Show All
            </button>
          )}
      </div>
    </div>
  );
};

DonationContainer.propTypes = {
  donations: PropTypes.array.isRequired,
  search: PropTypes.string
};

export default DonationContainer;