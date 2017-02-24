import React, { PropTypes } from 'react';
import Scroller from '@ox2/scroller/Scroller';
import Button from '@ox2/button/Button';

/**
 * FormWrapper Component
 */
const FormWrapper = ({ children, dirty, submitSucceeded, handleSubmit, promptWidget, pristine, reset, submitting }) => (
  <div className="pos:absolute-0 overflow:hidden h:100p">
    { promptWidget &&
      (promptWidget({ dirty, submitSucceeded }))
    }
    <form onSubmit={handleSubmit}>
      <div className="pos:absolute left:0 right:0 z:2 display:flex flex:items-center padding-x:7 flex:content-between border-color:neutral-faded border:bottom border:2" style={{ height: '44px' }}>
        <Button
          btn="action small"
          type="submit"
          disabled={pristine || submitting}
        >Save</Button>
        <Button
          btn="neutral-dim small"
          type="button"
          disabled={pristine || submitting}
          onClick={reset}
        >Reset</Button>
      </div>
      <Scroller className="padding-x:20" style={{ top: '44px' }}>
        {children}
      </Scroller>
    </form>
  </div>
);


FormWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  dirty: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  promptWidget: PropTypes.func,
  reset: PropTypes.func.isRequired,
  submitSucceeded: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default FormWrapper;
