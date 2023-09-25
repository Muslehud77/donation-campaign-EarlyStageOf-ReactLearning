import { useLoaderData } from "react-router-dom";
import getStoredItem from "../../LocalStorage/LocalStorage";



const Statistics = () => {
  const donations = useLoaderData();
  // console.log(donations);
  let sumTotal = 0;
  donations.forEach((donation) => {
    sumTotal += parseInt(donation.price);
  });

  const local = getStoredItem();
  const filter = donations.filter((donation) => local.includes(donation.id));

  let donationTotal = 0;

  filter.forEach((donation) => {
    donationTotal += parseInt(donation.price);
  });

  const donation = [
    { data: "Your Donations", money: donationTotal },
    { data: "Total Donations", money: sumTotal },
  ];

  return(

     <div>hello</div>
     
     );
};

export default Statistics;
