import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import MenuCard from '../MenuCard';
import MenuItemBar from '../MenuItemBar';
import Immutable from 'immutable';

/**
 * DashboardHq Component
 */
const DashboardHq = props => {
  const {
    className: classNameProp,
    style,
    menuItems,
    onMenuItemClick,
    activeApp,
    recentApps,
    onAppItemClick,
    currentPath,
  } = props;
  const className = classNames(
    'display:flex',
    classNameProp,
  );

  return (
    <div className={className} style={style}>
      <div className="flex:1 pos:relative">
        <MenuItemBar
          items={recentApps}
          onUpdate={onAppItemClick}
          value={activeApp}
        />
      </div>
      <div className="flex:3 display:flex flex:wrap">
        <div
          className="margin:10"
          style={{ width: '330px' }}
        >
          <MenuCard
            items={menuItems.filter(
              x => x.moduleGroup === 'app',
            )}
            moduleId={activeApp}
            onItemClick={onMenuItemClick}
            selectedValue={currentPath}
            title={'App'}
          />
        </div>
        <div
          className="margin:10"
          style={{ width: '330px' }}
        >
          <MenuCard
            items={menuItems.filter(
              x => x.moduleGroup === 'client',
            )}
            onItemClick={onMenuItemClick}
            selectedValue={currentPath}
            title={'Client'}
          />
        </div>
        <div
          className="margin:10"
          style={{ width: '220px' }}
        >
          <MenuCard
            items={menuItems.filter(
              x => x.moduleGroup === 'system',
            )}
            moduleId={activeApp}
            onItemClick={onMenuItemClick}
            selectedValue={currentPath}
            title={'System'}
          />
        </div>
        <div
          className="margin:10"
          style={{ width: '220px' }}
        >
          <MenuCard
            items={menuItems.filter(
              x => x.moduleGroup === 'business',
            )}
            moduleId={activeApp}
            onItemClick={onMenuItemClick}
            selectedValue={currentPath}
            title={'Business'}
          />
        </div>
        <div
          className="margin:10"
          style={{ width: '220px' }}
        >
          <MenuCard
            items={menuItems.filter(
              x => x.moduleGroup === 'templates',
            )}
            onItemClick={onMenuItemClick}
            selectedValue={currentPath}
            title={'Templates'}
          />
        </div>
      </div>
      <div className="flex:1 pos:relative">
        3
      </div>
    </div>
  );
};

DashboardHq.defaultProps = {
  className: '',
  style: {},
};

DashboardHq.propTypes = {
  activeApp: PropTypes.string.isRequired,
  className: PropTypes.string,
  currentPath: PropTypes.string.isRequired,
  menuItems: PropTypes.array.isRequired,
  onAppItemClick: PropTypes.func.isRequired,
  onMenuItemClick: PropTypes.func.isRequired,
  recentApps: PropTypes.instanceOf(Immutable.List)
    .isRequired,
  style: PropTypes.object,
};

export default DashboardHq;
