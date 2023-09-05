import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import Reducers from "./reducers";
import Storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage: Storage
}

const PersistReducer = persistReducer(persistConfig, Reducers)

export const store = configureStore({
    reducer: PersistReducer,
    middleware: [...getDefaultMiddleware({ serializableCheck: false }) , thunk]
})

export const persistor = persistStore(store)
export default store