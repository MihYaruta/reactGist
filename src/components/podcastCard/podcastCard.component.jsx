/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/**
 *  Components
 *
 **/
/**
 *  Components.showCard
 *
 **/
import React from 'react';
import { PropTypes } from 'prop-types';
import './podcastCard.styles.scss';
import { withRouter } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

const PodcastCard = ({ show }) => {
  const redirectHandler = () => {
    const path = show.url;
    window.location.href = path.includes(':')
      ? show.url
      : `${process.env.REACT_APP_URL}/${show.url}`;
    return null;
  };

  return (
    <div className="podcastCard-item" onClick={redirectHandler}>
      <div className="podcastCard-body">
        <Zoom>
          <img
            className="podcastCard-image"
            src={show.nginx_image_url}
            alt="show image"
          />
        </Zoom>
      </div>

      <div className="podcastCard-footer">
        <span className="podcastCard-name">{show.title}</span>
      </div>
    </div>
  );
};
PodcastCard.defaultProps = {
  show: {
    id: null,
    title: '',
    image_url: '',
    nginx_image_url: '',
    url: '',
  },
};
PodcastCard.propTypes = {
  show: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    image_url: PropTypes.string,
    nginx_image_url: PropTypes.string,
    url: PropTypes.string,
  }),
};
export default withRouter(PodcastCard);
