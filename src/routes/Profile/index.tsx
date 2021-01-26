/*
 * @Description: 
 * @Author: dandan.Wu
 * @Date: 2021-01-19 14:15:31
 * @LastEditTime: 2021-01-26 13:31:27
 * @LastEditors: dandan.Wu
 */
 
import React,{ PropsWithChildren } from "react";
import './index.less'
import { RouteComponentProps } from 'react-router-dom';
import mapDispatchToProps from '@/store/actions/home';

import { connect } from 'react-redux';
import { CombinedState } from '@/typings/state';
import { ProfileState, LOGIN_TYPES } from "@/typings/state";
import Nav from '@/components/Nav'

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;
interface Params { }
type Props = PropsWithChildren<RouteComponentProps<Params> & StateProps & DispatchProps>;

function Profile(props: Props) {
  let content;
  if(props.loginState === LOGIN_TYPES.UN_VALIDATE) {
    content = null;
  }
  return (
    <section>
      <Nav history={props.history}>个人中心</Nav>
      { content }
    </section>
  );
}

const mapStateToProps = (state: CombinedState):ProfileState => state.profile;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)

