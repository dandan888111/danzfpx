/*
 * @Description: 
 * @Author: dandan.Wu
 * @Date: 2021-01-19 13:43:41
 * @LastEditTime: 2021-01-25 13:40:24
 * @LastEditors: dandan.Wu
 */
import React,{ PropsWithChildren } from "react";
import './index.less'
import { RouteComponentProps } from 'react-router-dom';
import mapDispatchToProps from '@/store/actions/home';
import HomeHeader from './components/HomeHeader';
import { connect } from 'react-redux';
import { CombinedState } from '@/store/reducers';
import { HomeState } from "@/store/reducers/home";

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;
interface Params { }
type Props = PropsWithChildren<RouteComponentProps<Params> & StateProps & DispatchProps>;

function Home(props: Props) {
  return (
    <>
      <HomeHeader 
        currentCategory={props.currentCategory}
        setCurrentCategory={props.setCurrentCategory}
      />
    </>
  );
}

const mapStateToProps = (state: CombinedState):HomeState => state.home;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

