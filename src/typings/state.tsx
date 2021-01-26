/*
 * @Description: 
 * @Author: dandan.Wu
 * @Date: 2021-01-20 13:43:15
 * @LastEditTime: 2021-01-26 13:09:10
 * @LastEditors: dandan.Wu
 */


// import { HomeState } from '@/store/reducers/home';
// import { MineState } from '@/store/reducers/mine';
// import { ProfileState }  from '@/store/reducers/profile';



import { RouterState } from 'connected-react-router';
 
export interface HomeState{
  currentCategory: string;
}

export interface MineState{
 
}

interface User {
  username: string;
  email: string;
  avatar: string;
}
export enum LOGIN_TYPES {
  UN_VALIDATE = 'UN_VALIDATE'   // 尚未验证登录状态
  LOGINED = 'LOGINED'           // 已经登录
  UN_LOGINED = 'UN_LOGINED'       // 的确没有登录
}
export interface ProfileState{
  loginState: LOGIN_TYPES;
  user: User | null;
  error: string | null;
}
export interface CombinedState{
  home: HomeState;
  mine: MineState;
  profile: ProfileState;
  router: RouterState
}