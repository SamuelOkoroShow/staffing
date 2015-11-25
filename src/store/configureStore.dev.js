import { createStore, applyMiddleware, compose } from 'redux';
import DevTools from '../containers/DevTools';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import { syncReduxAndRouter } from 'redux-simple-router';

const finalCreateStore = compose(
  applyMiddleware(thunk),
  applyMiddleware(createLogger()),
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);
  const history = createBrowserHistory();

  syncReduxAndRouter(history, store);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers.
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
