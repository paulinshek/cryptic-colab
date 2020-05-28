// import { Store, createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";
// import { connectRouter, routerMiddleware } from "connected-react-router";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { History } from "history";

// import rootReducer from "./store/rootReducer";
// import rootSaga from "./store/rootSaga";

// export default function configureStore(
//   history: History,
//   initialState: Root.ApplicationState
// ): Store<Root.ApplicationState> {
//   const composeEnhancers = composeWithDevTools({});
//   const sagaMiddleware = createSagaMiddleware();

//   const store = createStore(
//     // @ts-ignore
//     connectRouter(history)(rootReducer),
//     initialState,
//     composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
//   );

//   // Don't forget to run the root saga, and return the store object.
//   sagaMiddleware.run(rootSaga);
//   return store;
// }

import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/rootReducer";

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware());
}
