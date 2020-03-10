// 使用jsx语法，要引入React
import React from 'react';
// 引入路由策略
import { HashRouter } from 'react-router-dom';
// 引入应用程序
import App from './App';

// 定义路由策略
export default (
	<HashRouter>
		<App></App>
	</HashRouter>
)