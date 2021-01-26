/*
 * @Description: 
 * @Author: dandan.Wu
 * @Date: 2021-01-21 13:26:52
 * @LastEditTime: 2021-01-26 12:46:40
 * @LastEditors: dandan.Wu
 */
import React, {CSSProperties, useState} from "react";
import './index.less'
import { Icon } from 'antd'
import classnames from 'classnames'
import { Transition } from 'react-transition-group';
import { BarsOutlined } from '@ant-design/icons';

let logo = require('../../../../assets/images/logo.png')

const duration = 600;  // 动画的持续时间

// CSSProperties 其实就是行内样式的对象定义
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}
interface TransitionStyles {
  entering: CSSProperties;
  entered: CSSProperties;
  exiting: CSSProperties;
  exited: CSSProperties;
}
const transitionStyles: TransitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

interface Props{
  currentCategory: string;  // 当前选中的分类，此数据会放在redux仓库中
  setCurrentCategory: (currentCategory: string) => any;  // 改变仓库中的分类
}

function HomeHeader(props: Props) {
  let [isMenuVisible, setIsMenuVisible] = useState(false);
  const setCurrentCategory = (event: React.MouseEvent<HTMLUListElement>) => {  
    let target:HTMLUListElement = event.target as HTMLUListElement;
    let category = target.dataset.category;
    props.setCurrentCategory(category);
    setIsMenuVisible(false)
  }
  return (<header className="home-header">
      <div className="logo-header">
        <img src={logo.default} alt=""/>
        <BarsOutlined onClick={ ()=> setIsMenuVisible(!isMenuVisible)}/>
      </div>
      <Transition in={isMenuVisible} timeout={duration}>
        {
          (state) => (
            <ul 
              className="category" 
              onClick={setCurrentCategory} 
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            >
              <li data-category="all" className={classnames({active: props.currentCategory === 'all' })}>全部课程</li>
              <li data-category="react" className={classnames({active: props.currentCategory === 'react' })}>React课程</li>
              <li data-category="vue" className={classnames({active: props.currentCategory === 'vue' })}>Vue课程</li>
            </ul>
          )
        }
      </Transition>
    </header>);
}
export default HomeHeader;


// 动画是如何实现的
// Transition
// 
//
//
//
