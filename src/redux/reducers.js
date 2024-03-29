import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import session from "redux-persist/lib/storage/session";
// import session from "redux-persist/lib/storage";
// import reducer
import auth from "./auth";

const persistConfig = {
  key: "root",
  storage: session,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;