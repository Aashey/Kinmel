import React from "react";
import PropTypes from "prop-types";
import "./menu-item.styles.scss";

const MenuItem = ({ title, id, image, size }) => {
  return (
    <div key={id} className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default MenuItem;
