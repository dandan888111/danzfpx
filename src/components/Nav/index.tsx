/*
 * @Description: 
 * @Author: dandan.Wu
 * @Date: 2021-01-26 13:13:23
 * @LastEditTime: 2021-01-26 13:29:57
 * @LastEditors: dandan.Wu
 */
import React, { PropsWithChildren } from "react";
import "./index.less";
import { LeftOutlined } from '@ant-design/icons';
import { History } from 'history'
type Props = PropsWithChildren<{
  history: History
}>

 
export default function Nav(props: Props) {
  return (
    <div className="nav-header">
      <LeftOutlined onClick={() => props.history.goBack()} />
      {props.children}
    </div>
  );
}