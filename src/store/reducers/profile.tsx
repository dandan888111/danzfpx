/*
 * @Description: 
 * @Author: dandan.Wu
 * @Date: 2021-01-20 12:57:48
 * @LastEditTime: 2021-01-26 13:11:25
 * @LastEditors: dandan.Wu
 */
import { AnyAction } from "redux";
import * as TYPES from "../action-types";
import LOGIN_TYPES from "@/typings/login-types";

export interface ProfileState {
  loginState: LOGIN_TYPES;
  user: any;
  error: string | null;
}
let initialState: ProfileState = {
  loginState: LOGIN_TYPES.UN_VALIDATE,
  user: null,
  error: null,
};
export default function (
  state: ProfileState = initialState,
  action: AnyAction
): ProfileState {
  switch (action.type) {
    case TYPES.VALIDATE:
      if (action.payload.success) {
        return {
          ...state,
          loginState: LOGIN_TYPES.LOGINED,
          user: action.payload.data,
          error: null,
        };
      } else {
        return {
          ...state,
          loginState: LOGIN_TYPES.UNLOGIN,
          user: null,
          error: action.payload,
        };
      }
    case TYPES.LOGOUT:
      return {
        ...state,
        loginState: LOGIN_TYPES.UN_VALIDATE,
        user: null,
        error: null,
      };
    default:
      return state;
  }
}