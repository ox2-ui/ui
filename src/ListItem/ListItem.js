import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Thumb from '@ox2/thumb/Thumb';

/**
 * ListItem Component
 */
const ListItem = props => {
  const {
    className: classNameProp,
    title,
    subtitle1,
    subtitle2,
    image,
    pictureBgColor,
    icon,
    iconGroup,
    iconColor,
    pictureWidth,
    pictureHeight,
    onClick,
    _id,
    hidePicture,
    style,
    widget,
    widgetBottom,
  } = props;

  const className = classNames(
    'border:bottom border:2 border-color:neutral-faded',
    classNameProp,
  );

  return (
    <div className={className} style={style}>
      <div
        className="font:roboto-condensed display:flex flex:items-center color:white padding:10 select:none cursor:pointer"
        onClick={() => onClick(_id)}
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
        <div className="display:flex flex:column flex:content-center margin-l:10 min-w:0 line-h:130p">
          {title &&
            <div className="select:text size:18 line-h:120p text:truncate text-color:brand">
              {title}
            </div>}
          {subtitle1 &&
            <div className="select:text size:16 line-h:115p text:truncate text-color:neutral-dim">
              {subtitle1}
            </div>}
          {subtitle2 &&
            <div className="select:text size:16 line-h:115p text:truncate text-color:neutral-dim">
              {subtitle2}
            </div>}
        </div>
        {widget &&
          <div className="margin-l:auto flex:0-auto">
            {widget(props)}
          </div>}
      </div>
      {widgetBottom &&
        <div>
          {widgetBottom(props)}
        </div>}
    </div>
  );
};

ListItem.defaultProps = {
  className: '',
  hidePicture: false,
  icon: '',
  iconColor: '',
  iconGroup: '',
  image: '',
  pictureBgColor: '',
  pictureHeight: 60,
  pictureWidth: 60,
  style: {},
  subtitle1: '',
  subtitle2: '',
  title: '',
  widget: () => null,
  widgetBottom: () => null,
};

ListItem.propTypes = {
  /**
   * The css class name of the root element.
   */
  _id: PropTypes.string.isRequired,
  className: PropTypes.string,
  hidePicture: PropTypes.bool,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  iconGroup: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  pictureBgColor: PropTypes.string,
  pictureHeight: PropTypes.number,
  pictureWidth: PropTypes.number,
  style: PropTypes.object,
  subtitle1: PropTypes.string,
  subtitle2: PropTypes.string,
  title: PropTypes.string,
  widget: PropTypes.func,
  widgetBottom: PropTypes.func,
};

export default ListItem;
