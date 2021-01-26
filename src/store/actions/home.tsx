/*
 * @Description: 
 * @Author: dandan.Wu
 * @Date: 2021-01-21 13:45:04
 * @LastEditTime: 2021-01-25 13:49:36
 * @LastEditors: dandan.Wu
 */

import * as actionTypes from '@/store/action-types'; 

export default {
  setCurrentCategory(currentCategory: string) {
    return {
      type: actionTypes.SET_CURRENT_CATEGORY,
      payload: currentCategory
    }
  }
}