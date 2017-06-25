import PropTypes from 'prop-types';
import React from 'react';
import Button from '@ox2/button/Button';

/**
 * UserMenu Component
 */
const UserMenu = ({ onDismiss }) =>
  <div className="padding-b:40">
    <Button onClick={() => onDismiss()} btn="raised action">
      Done
    </Button>
    <div>
      USER Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Itaque, sequi? Consequuntur
      inventore nulla ratione vitae obcaecati voluptatem
      animi molestiae ipsam et adipisci illo reiciendis
      saepe doloremque, quae perspiciatis iure vero.
    </div>
  </div>;

UserMenu.propTypes = {
  onDismiss: PropTypes.func.isRequired,
};

export default UserMenu;
