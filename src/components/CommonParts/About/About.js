import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './About.scss';
import { setAboutTextCreator } from '../../../redux/actionCreators';

const AboutSection = ({
  children,
  title,
  showAllAbout,
  setAboutText,
}) => {
  const handleText = () => {
    setAboutText();
  };

  const text = !showAllAbout
    ? children.filter((item, index) => index <= 1)
    : children;

  return (
    <div className={`${window.location.href
      .slice(window.location.href.length - 5) !== '/news' && 'container'}`}
    >
      <div className="about">
        <h4 className="about__title">
          {title}
        </h4>
        {text}
        {!showAllAbout
          ? (
            <button
              type="button"
              className="about__button about__button--more"
              onClick={() => handleText()}
            >
              <i className="fas fa-caret-down" />
              <span className="about__button-text">Больше</span>
            </button>
          )
          : (
            <button
              type="button"
              className="about__button about__button--more"
              onClick={() => handleText()}
            >
              <i className="fas fa-caret-up" />
              <span className="about__button-text">Меньше</span>
            </button>
          )
        }
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  showAllAbout: state.mainReducer.showAllAbout,
});

const mapDispatchToProps = dispatch => ({
  setAboutText: () => dispatch(setAboutTextCreator()),
});

const About = connect(mapStateToProps, mapDispatchToProps)(AboutSection);

export default React.memo(About);

AboutSection.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  showAllAbout: PropTypes.bool.isRequired,
  setAboutText: PropTypes.func.isRequired,
};
