import { applyMiddleware, combineReducers, createStore } from "redux";
import settings from "./settings";
import userReducer from "./userReducer";
import categoriesReducer from "./categoriesReducer";
import formBookReducer from "./formBookReducer";
import seasonReducer from "./seasonReducer";
import chapterReducer from "./chapterReducer";
import orderReducer from "./orderReducer";
import descriptionReducer from "./descrptipnReducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import persistStore from "redux-persist/es/persistStore";

const presistConfig = {
  key: "root",
  storage: storage,
  whitelist: [
    "settings",
    "userReducer",
    "categoriesReducer",
    "formBookReducer",
    "seasonReducer",
    "chapterReducer",
    "orderReducer",
    "descriptionReducer",
  ],
};

const rootReducer = combineReducers({
  settings,
  userReducer,
  categoriesReducer,
  formBookReducer,
  seasonReducer,
  chapterReducer,
  orderReducer,
  descriptionReducer,
});
const persistedReducer = persistReducer(presistConfig, rootReducer);

const store = createStore(
  persistedReducer,

  composeWithDevTools(applyMiddleware(thunk))
);
let persistor = persistStore(store);

export { persistor, store };
