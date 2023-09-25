import React from 'react';
import PropTypes from 'prop-types';

const Card = ({donation}) => {
    const {title,bg_img,title_bgColor,text_color,bg_color,category} = donation

    console.log(title_bgColor,text_color,bg_color)
    
    return (
      <div>
        <div className={`card w-96 bg-${bg_color} shadow-xl`}>
          <figure>
            <img
              src={bg_img}
              alt="Shoes"
              className="h-[250px] w-[450px] object-cover "
            />
          </figure>
          <div className="card-body">
            <p
              className={`bg-${title_bgColor} w-min p-2 font-semibold rounded-lg text-${text_color}`}
            >
              {category}
            </p>
            <h2 className={`card-title text-${text_color}`}>{title}</h2>
          </div>
        </div>
      </div>
    );
};

Card.propTypes = {
    donation: PropTypes.object.isRequired
};

export default Card;