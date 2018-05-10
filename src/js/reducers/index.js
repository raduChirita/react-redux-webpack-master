import { combineReducers } from "redux";
import credentialReducer from "./credentialReducer";

export default combineReducers({ credentials: credentialReducer });
