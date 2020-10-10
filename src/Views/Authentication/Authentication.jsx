import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TransitionsModal from '../../Comopents/Modal/Modal';

const LoginCard = props => {
  return (
    <form className="test" noValidate autoComplete="off">
      <TextField
        id="outlined-full-width"
        label="Label"
        style={{ margin: 8 }}
        placeholder="Placeholder"
        helperText="Full width!"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
        variant="outlined"
      />
      <TextField
        id="outlined-full-width"
        label="Label"
        style={{ margin: 8 }}
        placeholder="Placeholder"
        helperText="Full width!"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
        variant="outlined"
      />
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
    </form>
  );
};

const Authentication = () => {
  const handelSubmit = () => {};
  const handelCancle = () => {};
  return (
    <TransitionsModal>
      <LoginCard onSubmit={handelSubmit} onCancle={handelCancle} />
    </TransitionsModal>
  );
};
Authentication.propTypes = {
  prop: PropTypes
};
export default Authentication;
