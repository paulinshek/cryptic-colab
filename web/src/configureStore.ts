import { Store, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { History } from "history";

import { RootState } from "./store/rootTypes";
import rootReducer from "./store/rootReducer";
import rootSaga from "./store/rootSaga";

export default function configureStore(
  history: History,
  initialState: RootState
): Store<RootState> {
  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    // @ts-ignore
    connectRouter(history)(rootReducer),
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);
  return store;
}
