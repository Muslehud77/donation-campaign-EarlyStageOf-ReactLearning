import { useLoaderData } from "react-router-dom";
import getStoredItem from "../../LocalStorage/LocalStorage";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, XAxis, Tooltip, Legend } from "recharts";
import { Helmet } from "react-helmet-async";



const Statistics = () => {
  const donations = useLoaderData();

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
    { name: "Your Donations", money: donationTotal },
    { name: "Total Donations", money: sumTotal }
  ];


const COLORS = [ "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};







  return (
    <div className=" flex md:h-screen flex-col justify-center items-center">
      <Helmet>
        <title>Donation Campaign | Statistics</title>
      </Helmet>
      <h1 className="text-5xl">Statistics</h1>
      <div className="">
        <PieChart width={400} height={400}>
          <Pie
            data={donation}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="money"
          >
            {donation.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip></Tooltip>
        </PieChart>
        <div className="flex flex-col gap-2 bg-base-200 p-2 font-semibold">
          <div className="flex justify-center gap-2 items-center">
            <div className="bg-[#FFBB28] w-5 h-3"></div>
            <p className="text-[#FFBB28]">Total Donations</p>
          </div>
          <div className="flex justify-center gap-2 items-center">
            <div className="bg-[#FF8042] w-5 h-3"></div>
            <p className="text-[#FF8042]">Your Donations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
