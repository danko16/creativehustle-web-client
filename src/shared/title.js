import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const TitleComponent = ({ title }) => {
  return (
    <Helmet>
      <title>
        {title
          ? `${title} | Creative Hustle`
          : 'Creative Hustle | Portal Belajar Kreatif Cari Cuan'}
      </title>
    </Helmet>
  );
};

TitleComponent.propTypes = {
  title: PropTypes.string,
};

export default TitleComponent;
