// 引入库
import React, { Component } from 'react';
// 引入路由
import { Switch, Route } from 'react-router-dom'
// 引入页面组件
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import Comments from './pages/comments/Comments';
// 引入header组件
import Header from './components/header/Header'
// 引入样式
import './App.less'
// 定义组件并暴露接口
export default class App extends Component {
    // 渲染
    render() {
        return (
            <div>
                <Header title="爱创课堂新闻平台" rightContent="登录" onRightClick={e => console.log('click right')}></Header>
                {/*<Header title="爱创课堂新闻平台" rightContent="登录" onRightClick={e => console.log('click right')}>
                    <strong>hello</strong>
                </Header>*/}
                <Switch>
                    <Route path="/detail/:id" component={Detail}></Route>
                    <Route path="/comments/:id" component={Comments}></Route>
                    <Route path="*" component={Home}></Route>
                </Switch>
            </div>
        )
    }
}