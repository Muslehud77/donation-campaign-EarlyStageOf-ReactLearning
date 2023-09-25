
import PropTypes from 'prop-types';
import Card from '../DonationsCard/Card';

const DonationContainer = ({donations}) => {
    
   
    return (
        <div className='grid lg:grid-cols-4 gap-5 my-10'>
            {
                donations.map((donation,idx) => <Card key={idx} donation={donation}></Card>)
            }
        </div>
    );
};

DonationContainer.propTypes = {
    donations: PropTypes.array.isRequired
};

export default DonationContainer;