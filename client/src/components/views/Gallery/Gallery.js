import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAllPhotos } from '../../../redux/galleryRedux';

import styles from './Gallery.module.scss';

import { PageTitle } from '../../common/PageTitle/PageTitle';

class Component extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    photos: PropTypes.array,
  }

  state = {
    fullScreen: false,
    activePhoto: {
      src : null,
      description: null,
    },
  }

  setFullScreen = (event) => {
    const { fullScreen } = this.state;

    if(fullScreen) {
      this.setState({
        fullScreen: false,
        activePhoto: {
          src : null,
          description: null,
        },
      });
    } else {
      this.setState({
        fullScreen: true,
        activePhoto: {
          src : event.target.currentSrc,
          description: event.target.alt,
        },
      });
    }
  };

  render() {
    const { className, photos } = this.props;
    const { fullScreen } = this.state;
    const { src, description } = this.state.activePhoto;

    return(
      <div className={clsx(className, styles.root)}>

        <PageTitle>Galeria</PageTitle>

        <div className = {styles.gallery}>
          {photos.map(photo => (
            <div className={fullScreen? styles.fulscreen_photobox_off : styles.photobox} key={photo.id} onClick={this.setFullScreen}>
              <img src={photo.photo} className={styles.photo} alt={`Zdjęcie ${photo.description}`} />
            </div>
          ))}
        </div>

        <div className={fullScreen? styles.fullscreen_on : styles.fullscreen_off} onClick={this.setFullScreen}>
          <img src={src} alt={description} className={styles.fullscreen_photo} />
        </div>

      </div>
    );
  }
}


const mapStateToProps = state => ({
  photos: getAllPhotos(state),
});

// const mapDispatchToProps = state => ({
//   someAction: arg => dispatchEvent(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Gallery,
  Container as Gallery,
  Component as GalleryComponent,
};
