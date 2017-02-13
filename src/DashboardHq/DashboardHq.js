import React, { PropTypes } from 'react';
import classNames from 'classnames';
import MenuCard from '../MenuCard';
import MenuItemBar from '../MenuItemBar';
import Immutable from 'immutable';

/**
 * DashboardHq Component
 */
const DashboardHq = (props) => {
  const { className: classNameProp, style, menuItems, onMenuItemClick, activeApp, recentApps, onAppItemClick } = props;
  const className = classNames(
    'display:flex',
    classNameProp
  );

  return (
    <div className={className} style={style}>
      <div className="flex:1 pos:relative">
        <MenuItemBar
          value={activeApp}
          items={recentApps}
          onUpdate={onAppItemClick}
        />
      </div>
      <div className="flex:3 display:flex flex:wrap">
        <div className="margin:10" style={{width: '330px'}}>
          <MenuCard
            title={'App'}
            onItemClick={onMenuItemClick}
            items={menuItems.filter(x => x.moduleGroup === 'app')}
          />
        </div>
        <div className="margin:10" style={{width: '330px'}}>
          <MenuCard
            title={'Client'}
            onItemClick={onMenuItemClick}
            items={menuItems.filter(x => x.moduleGroup === 'client')}
          />
        </div>
        <div className="margin:10" style={{width: '220px'}}>
          <MenuCard
            title={'System'}
            onItemClick={onMenuItemClick}
            items={menuItems.filter(x => x.moduleGroup === 'system')}
          />
        </div>
        <div className="margin:10" style={{width: '220px'}}>
          <MenuCard
            title={'Business'}
            onItemClick={onMenuItemClick}
            items={menuItems.filter(x => x.moduleGroup === 'business')}
          />
        </div>
        <div className="margin:10" style={{width: '220px'}}>
          <MenuCard
            title={'Templates'}
            onItemClick={onMenuItemClick}
            items={menuItems.filter(x => x.moduleGroup === 'templates')}
          />
        </div>
      </div>
      <div className="flex:1 pos:relative">
        3
      </div>
    </div>
  );
};


DashboardHq.propTypes = {
  /**
   * The css class name of the root element.
   */
  activeApp: PropTypes.string.isRequired,
  className: PropTypes.string,
  menuItems: PropTypes.array.isRequired,
  onAppItemClick: PropTypes.func.isRequired,
  onMenuItemClick: PropTypes.func.isRequired,
  recentApps: PropTypes.instanceOf(Immutable.List).isRequired,
  style: PropTypes.object,
};

export default DashboardHq;
