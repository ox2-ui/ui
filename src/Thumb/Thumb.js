import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Icon from '@ox2/icon/Icon';
import ImageOffline from '@ox2/image/ImageOffline';

/**
 * Thumb Component
 */
const Thumb = (props) => {
  const { className: classNameProp, image, icon, width, height, offlineEnabled, localImg } = props;

  const className = classNames(
    'display:flex flex:items-center flex:content-center',
    classNameProp
  );

  return (
    <div className={className} style={{width: `${width}px`, height: `${height}px`, WebkitFlex: `0 0 ${width}px`, flex: `0 0 ${width}px`}}>
      {do {
        if (image) {
          if (offlineEnabled && localImg) {
            <ImageOffline remoteLink={image} localImg={localImg} className="w:100p border:rounded" />;
          } else {
            <img src={image} className="w:100p border:rounded" />;
          }
        } else {
          <Icon icon={icon} size={`${height - 20}px`} className="text-color:neutral-faded" />;
        }
      }}
    </div>
  );
};

Thumb.propTypes = {
  /**
   * The css class name of the root element.
   */
  className: PropTypes.string,
  /**
   * Thumb height in pixels
   */
  height: PropTypes.number,
  /**
   * Icon id
   */
  icon: PropTypes.string,
  /**
   * Image url
   */
  image: PropTypes.string,
  /**
   * Offline/local server image filename
   */
  localImg: PropTypes.string,
  /**
   * If true will try to fetch local/offline images
   */
  offlineEnabled: PropTypes.bool,
  /**
   * Thumb width in pixels
   */
  width: PropTypes.number,
};

export default Thumb;
