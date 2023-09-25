
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
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-4 gap-5 my-10">
        {donationsToShow.map((donation, idx) => (
          <Card key={idx} donation={donation}></Card>
        ))}
      </div>
      <div className="flex justify-center my-5">
        {donationsToShow.length < `${search ? 3 : 9}` && (
          <button
            className="btn btn-primary"
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
    donations: PropTypes.array.isRequired
};

export default DonationContainer;