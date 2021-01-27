/*
 * @Description: 
 * @Author: dandan.Wu
 * @Date: 2021-01-19 14:15:31
 * @LastEditTime: 2021-01-26 13:31:27
 * @LastEditors: dandan.Wu
 */
 
import React,{ PropsWithChildren,useEffect } from "react";
import './index.less'
import { RouteComponentProps } from 'react-router-dom';

import mapDispatchToProps from '@/store/actions/profile';

import { connect } from 'react-redux';
import { CombinedState } from '@/typings/state';
import { ProfileState, LOGIN_TYPES } from "@/typings/state";
import { Descriptions, Button, Alert, message } from "antd";

import Nav from '@/components/Nav'

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;
interface Params { }
type Props = PropsWithChildren<RouteComponentProps<Params> & StateProps & DispatchProps>;

function Profile(props: Props) {
  useEffect(() => {
    // 校验账户的有效性。这里是调接口了 
    props.validate().catch((error: AxiosError) => message.error(error.message));
  }, []);
  let content;
  if(props.loginState === LOGIN_TYPES.UN_VALIDATE) {
    content = null;
  } else if (props.loginState === LOGIN_TYPES.LOGINED) {
    content = (
      <div className="user-info">
        <Descriptions title="当前用户">
          <Descriptions.Item label="用户名">珠峰架构</Descriptions.Item>
          <Descriptions.Item label="邮箱">460409519@qq.com</Descriptions.Item>
        </Descriptions>
        <Button type="danger">退出登录</Button>
      </div>
    )
  } else {
    content = (
      <>
        <Alert type="warning" message="未登录" description="亲爱的用户你好，您尚未登录，请你注册或者登录" />
        <div style={{ textAlign: "center", padding: ".5rem" }}>
          <Button type="dashed" onClick={() => props.history.push("/login")}>
            登录
          </Button>
          <Button
            type="dashed"
            style={{ marginLeft: ".5rem" }}
            onClick={() => props.history.push("/register")}
          >
            注册
          </Button>
        </div>
      </>
    )
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

