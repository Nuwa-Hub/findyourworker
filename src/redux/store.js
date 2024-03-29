import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import requestReducer from "./requestRedux";
import developerReducer from "./developerRedux";
import taskReducer from "./taskRedux";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import dataReducer from "./dataReducer";
import ratingReducer from "./ratingReducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  rating:ratingReducer,
  request: requestReducer,
  developer:developerReducer,
  task:taskReducer,
  data:dataReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
