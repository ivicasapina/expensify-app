import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
  const uid = 'adj324ASDew2wcxDS';
  const action = {
    type: 'LOGIN',
    uid
  };

  const state = authReducer({}, action);
  expect(state).toEqual({
    uid
  });
});

test('should clear uid for logout', () => {
  const uid = 'adj324ASDew2wcxDS';
  const action = {
    type: 'LOGOUT'
  };

  const state = authReducer({ uid }, action);
  expect(state).toEqual({});
});