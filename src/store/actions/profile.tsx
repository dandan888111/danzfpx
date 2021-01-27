/*
 * @Description: 
 * @Author: dandan.Wu
 * @Date: 2021-01-21 13:45:04
 * @LastEditTime: 2021-01-26 12:52:22
 * @LastEditors: dandan.Wu
 */
import { AnyAction } from "redux";
import * as actionTypes from '@/store/action-types'; 
import { validate } from '@/api/profile'
export default {
  validate(): AnyAction {
    return {
      type: actionTypes.VALIDATE,
      payload: validate()
    }
  }
}