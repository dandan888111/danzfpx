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
      <HomeHeader />
    </>
  );
}

const mapStateToProps = (state: CombinedState):HomeState => state.home;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

