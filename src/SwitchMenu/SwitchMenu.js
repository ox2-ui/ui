import PropTypes from 'prop-types';
import React from 'react';
import Button from '@ox2/button/Button';

/**
 * SwitchMenu Component
 */
const SwitchMenu = ({ onDismiss }) =>
  <div className="padding-b:40">
    <Button onClick={() => onDismiss()} btn="raised action">
      Done
    </Button>
    <div>
      SWITCH Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Itaque, sequi? Consequuntur
      inventore nulla ratione vitae obcaecati voluptatem
      animi molestiae ipsam et adipisci illo reiciendis
      saepe doloremque, quae perspiciatis iure vero.
    </div>
  </div>;

SwitchMenu.propTypes = {
  onDismiss: PropTypes.func.isRequired,
};

export default SwitchMenu;
