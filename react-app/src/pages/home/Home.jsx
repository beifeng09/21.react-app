// 引入库
import React, { Component } from 'react';
// 引入新闻卡片组件
import NewsCard from '../../components/newscard/NewsCard';
// 异步请求
import axios from 'axios';
// 定义组件并暴露接口
export default class Home extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			data: []
		}
	}
	// 组件创建前
	componentWillMount() {
		axios
			// get请求
			.get('/data/list.json')
			// 监听数据返回
			.then(({ data }) => this.setState({ data }))
	}
	// 创建课程卡片列表
	createList() {
		// 根据状态数据遍历
		return this.state.data.map(item => <NewsCard key={item.id} data={item}></NewsCard>)
	}
	// 渲染
	render() {
		return <div className="page-home">{this.createList()}</div>
	}
}