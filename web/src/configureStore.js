import { Store, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { History } from "history";

import { RootState } from "./store/rootTypes";
import rootReducer from "./store/rootReducer";
import rootSaga from "./store/rootSaga";

export default function configureStore(
  history,
  initialState
) {
  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();

  const persistConfig = {
    key: 'root',
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = createStore(
    // @ts-ignore
    connectRouter(history)(persistedReducer),
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  );

  const persistor = persistStore(store)

  sagaMiddleware.run(rootSaga);
  return { store, persistor }
}
