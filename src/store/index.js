import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

// configureStore expects an options object in recent redux versions.
// Pass the reducer as an option so the API matches and the app doesn't crash at startup.
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
});

export default store;
