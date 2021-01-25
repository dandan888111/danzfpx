/*
 * @Description: 
 * @Author: dandan.Wu
 * @Date: 2021-01-20 13:43:15
 * @LastEditTime: 2021-01-25 13:41:11
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

export interface ProfileState{
 
}
export interface CombinedState{
  home: HomeState;
  mine: MineState;
  profile: ProfileState;
  router: RouterState
}