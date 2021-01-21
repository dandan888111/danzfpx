import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
//import { Icon } from 'antd';
import { HomeOutlined, UserOutlined,ShoppingCartOutlined } from '@ant-design/icons';


import './index.less';
export default class Tabs extends React.Component {
    render() {
        return (
            <footer>
                <NavLink to="/" exact><HomeOutlined type="home" /><span>首页</span></NavLink>
                <NavLink to="/mine"><ShoppingCartOutlined type="solution" /><span>我的课程</span></NavLink>
                <NavLink to="/profile"><UserOutlined type="user" /><span>个人中心</span></NavLink>
            </footer>
        )
    }
}