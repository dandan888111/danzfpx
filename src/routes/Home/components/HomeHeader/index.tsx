/*
 * @Description: 
 * @Author: dandan.Wu
 * @Date: 2021-01-21 13:26:52
 * @LastEditTime: 2021-01-25 13:37:10
 * @LastEditors: dandan.Wu
 */
import React, {useState} from "react";
import './index.less'
import { Icon } from 'antd'
import classnames from 'classnames'
let logo = require('../../../../assets/images/logo.png')

import { BarsOutlined } from '@ant-design/icons';

interface Props{
  currentCategory: string;  // 当前选中的分类，此数据会放在redux仓库中
  setCurrentCategory: (currentCategory: string) => any;  // 改变仓库中的分类
}

function HomeHeader(props: Props) {
  let [isMenuVisible, setIsMenuVisible] = useState(false);
  const setCurrentCategory = () => {  
    
  }
  return (<header className="home-header">
      <div className="logo-header">
        <img src={logo.default} alt=""/>
        <BarsOutlined onClick={ ()=> setIsMenuVisible(!isMenuVisible)}/>
      </div>
      {
        isMenuVisible && (
          <ul className="category">
            <li data-category="all" className={classnames({active: props.currentCategory === 'all' })}>全部课程</li>
            <li data-category="react" className={classnames({active: props.currentCategory === 'react' })}>React课程</li>
            <li data-category="vue" className={classnames({active: props.currentCategory === 'vue' })}>Vue课程</li>
          </ul>
        )
      }
    </header>);
}
export default HomeHeader;