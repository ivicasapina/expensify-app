import { login, logout } from '../../actions/auth';

test('should call login with correct uid', () => {
  const uid = 'adj324ASDew2wcxDS';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should call logout', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});