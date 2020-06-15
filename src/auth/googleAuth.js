import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import QS from 'query-string';
import PropTypes from 'prop-types';
import { authActions } from '../redux/reducers/auth';

const mapActionToProps = (dispatch) =>
  bindActionCreators(
    {
      login: authActions.login,
    },
    dispatch
  );

function GoogleAuth({ history, login }) {
  useEffect(() => {
    const query = history.location.search;
    const parseQuery = QS.parse(query);

    if (
      !query ||
      !parseQuery.key ||
      !parseQuery.exp ||
      !parseQuery.id ||
      !parseQuery.name ||
      !parseQuery.email ||
      !parseQuery.type
    ) {
      history.push('/');
    }

    const payload = Object.freeze({
      token: {
        key: parseQuery.key,
        exp: parseQuery.exp,
      },
      user: {
        id: parseQuery.id,
        name: parseQuery.name,
        email: parseQuery.email,
        avatar: parseQuery.avatar,
      },
      type: parseQuery.type,
    });

    login(payload);
    history.push('/dashboard');
  }, [history, login]);

  return <div></div>;
}

GoogleAuth.propTypes = {
  history: PropTypes.object,
  login: PropTypes.func,
};

export default connect(null, mapActionToProps)(GoogleAuth);
