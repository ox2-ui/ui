import React, { PropTypes } from 'react';
import Thumb from '../Thumb';

/**
 * MenuItem Component
 */
const MenuItem = ({ _id, title, className, style, onClick, hidePicture, image, icon, pictureWidth, pictureHeight, pictureBgColor, iconColor }) => (
  <div className={className} style={style}>
    <div onClick={() => onClick(_id)} className="display:flex flex:items-center color:white padding:5 select:none cursor:pointer">
      { !hidePicture &&
        <Thumb
          image={image}
          icon={icon || 'cactus'}
          width={pictureWidth | 28}
          height={pictureHeight | 28}
          color={pictureBgColor}
          iconColor={iconColor}
        />
      }
      {/* class min-w:0 added to fix Flex child truncate issue */}
      <div className="display:flex flex:column flex:content-center margin-l:5 min-w:0 line-h:130p font:roboto-condensed">
        <div className="select:text size:16 line-h:120p text:truncate text-color:backdrop-alt">{title}</div>
      </div>
    </div>
  </div>
);


MenuItem.propTypes = {
  _id: PropTypes.string.isRequired,
  className: PropTypes.string,
  hidePicture: PropTypes.bool,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  pictureBgColor: PropTypes.string,
  pictureHeight: PropTypes.number,
  pictureWidth: PropTypes.number,
  style: PropTypes.object,
  title: PropTypes.string,
};

export default MenuItem;