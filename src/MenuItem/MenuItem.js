import PropTypes from 'prop-types';
import React from 'react';
import Thumb from '../Thumb';

/**
 * MenuItem Component
 */
const MenuItem = ({
  value,
  title,
  className,
  style,
  onClick,
  hidePicture,
  image,
  icon,
  iconGroup,
  pictureWidth,
  pictureHeight,
  pictureBgColor,
  iconColor,
  textColor,
  moduleId,
  moduleGroup,
  module,
}) =>
  <div className={className} style={style}>
    <div
      className="display:flex flex:items-center color:white padding:5 select:none cursor:pointer"
      onClick={() => onClick(
        moduleId
          ? `/${moduleGroup}/${moduleId}/${module}`
          : value,
      )}
    >
      {!hidePicture &&
        <Thumb
          color={pictureBgColor}
          height={pictureHeight}
          icon={icon}
          iconColor={iconColor}
          iconGroup={iconGroup}
          image={image}
          width={pictureWidth}
        />}
      {/* class min-w:0 added to fix Flex child truncate issue */}
      <div className="display:flex flex:column flex:content-center margin-l:5 min-w:0 line-h:130p font:roboto-condensed">
        <div
          className={`select:text size:16 line-h:120p text:truncate text-color:${textColor}`}
        >
          {title}
        </div>
      </div>
    </div>
  </div>;

MenuItem.defaultProps = {
  className: '',
  hidePicture: false,
  icon: '',
  iconColor: '',
  iconGroup: '',
  image: '',
  module: '',
  moduleGroup: '',
  moduleId: '',
  pictureBgColor: '',
  pictureHeight: 28,
  pictureWidth: 28,
  style: {},
  textColor: 'backdrop-alt',
  title: '',
};

MenuItem.propTypes = {
  className: PropTypes.string,
  hidePicture: PropTypes.bool,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  iconGroup: PropTypes.string,
  image: PropTypes.string,
  module: PropTypes.string,
  moduleGroup: PropTypes.string,
  moduleId: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  pictureBgColor: PropTypes.string,
  pictureHeight: PropTypes.number,
  pictureWidth: PropTypes.number,
  style: PropTypes.object,
  textColor: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default MenuItem;
