import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({donation}) => {
    const {id,title,bg_img,title_bgColor,text_color,bg_color,category} = donation


    
    return (
      <Link to={`/donationdescription/${id}`}>
        <div
          style={{ background: `${bg_color}`, color: `${text_color}` }}
          className={`card`}
        >
          <figure>
            <img
              src={bg_img}
              alt="Shoes"
              className="md:h-[250px] md:w-[450px] object-cover "
            />
          </figure>
          <div className="card-body">
            <p
              style={{ background: `${title_bgColor}`, color: `${text_color}` }}
              className={` w-min p-2 font-semibold rounded-lg`}
            >
              {category}
            </p>
            <h2 className={`card-title`}>{title}</h2>
          </div>
        </div>
      </Link>
    );
};

Card.propTypes = {
    donation: PropTypes.object.isRequired
};

export default Card;