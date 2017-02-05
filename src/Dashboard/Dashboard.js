import React, { PropTypes } from 'react';
import Scroller from '@ox2/scroller/Scroller';
import Button from '@ox2/button/Button';

/**
 * Dashboard Component
 */
const Dashboard = ({ onDismiss }) => (
  <Scroller className="padding-b:40">
    <Button onClick={() => onDismiss()} btn="raised action">Done</Button>
    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, sequi? Consequuntur inventore nulla ratione vitae obcaecati voluptatem animi molestiae ipsam et adipisci illo reiciendis saepe doloremque, quae perspiciatis iure vero.</div>
  </Scroller>
);

Dashboard.propTypes = {
  onDismiss: PropTypes.func.isRequired,
};

export default Dashboard;
