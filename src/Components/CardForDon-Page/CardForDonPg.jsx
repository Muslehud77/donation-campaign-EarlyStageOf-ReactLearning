import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardForDonationPg = ({ donation }) => {
  const {price, id, title, bg_img, title_bgColor, text_color, bg_color, category } =
    donation;

  return (
    <div
      className="flex gap-5 rounded-lg"
      style={{ background: `${bg_color}` }}
    >
      <img className="w-56 object-cover rounded-l-lg" src={bg_img} alt="" />
      <div className="p-5 space-y-2">
        <p
          style={{ background: `${title_bgColor}`, color: `${text_color}` }}
          className={` w-min p-2 font-semibold rounded-lg`}
        >
          {category}
        </p>
        <h2 className={`card-title`}>{title}</h2>
        <h4
          style={{ color: `${text_color}` }}
          className="text-lg font-semibold"
        >
          ${price}.00
        </h4>
        <Link
          to={`/donationdescription/${id}`}
          style={{ background: `${text_color}` }}
          className={` btn text-white font-semibold`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

CardForDonationPg.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default CardForDonationPg;
