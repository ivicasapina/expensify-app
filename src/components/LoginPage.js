import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div>
    <button
      onClick={startLogin}
    >Login
    </button>
  </div>
);

export default connect(null, { startLogin })(LoginPage);