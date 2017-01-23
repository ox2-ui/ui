import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Thumb from '../Thumb';

/**
 * ListItem Component
 */
const ListItem = (props) => {
  const { className: classNameProp, title, subtitle, subtitle2, image, imageBgColor, icon, iconColor, imageWidth, imageHeight, onClick, _id, hidePicture, style, widget, widgetBottom } = props;

  const className = classNames(
    'border:bottom border:2 border-color:neutral-faded',
    classNameProp
  );

  return (
    <div className={className} style={style}>
      <div onClick={() => onClick(_id)} className="font:roboto-condensed display:flex flex:items-center color:white padding:10 select:none cursor:pointer">
        { !hidePicture &&
          <Thumb
            image={image}
            icon={icon || 'cactus'}
            width={imageWidth | 60}
            height={imageHeight | 60}
            color={imageBgColor}
            iconColor={iconColor}
          />
        }
        {/* class min-w:0 added to fix Flex child truncate issue */}
        <div className="display:flex flex:column flex:content-center margin-l:10 min-w:0 line-h:130p">
          <div className="size:18 line-h:120p text:truncate text-color:brand">{title}</div>
          <div className="size:16 line-h:115p text:truncate text-color:neutral">{subtitle}</div>
          <div className="size:16 line-h:115p text:truncate text-color:neutral">{subtitle2}</div>
        </div>
        { widget &&
          <div className="margin-l:auto flex:0-auto">
            {widget(props)}
          </div>
        }
      </div>
      { widgetBottom &&
        <div>
          {widgetBottom(props)}
        </div>
      }
    </div>
  );
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
  image: PropTypes.string,
  imageBgColor: PropTypes.string,
  imageHeight: PropTypes.number,
  imageWidth: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
  subtitle: PropTypes.string,
  subtitle2: PropTypes.string,
  title: PropTypes.string,
  widget: PropTypes.func,
  widgetBottom: PropTypes.func,
};

export default ListItem;
