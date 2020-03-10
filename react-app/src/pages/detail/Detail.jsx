// 引入库
import React, { Component } from 'react';
// 引入按钮组件
import Button from '../../components/button/Button';
// 引入axios
import axios from 'axios';
// 引入样式
import './Detail.less';
// 定义组件并暴露接口
export default class Detail extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			data: {}
		}
	}
	// 组件创建前
	componentWillMount() {
		// console.log(this)
		// 更新数据
		this.getData();
	}
	// 请求数据的方法
	getData() {
		// 解构请求参数
		let { params } = this.props.match
		// 发送get请求
		axios
			// .get('/data/detail.json?id=' + params.id)
			// .get('/data/detail.json', {
			// 	params: params
			// })
			.get('/data/detail.json', { params })
			// 监听数据返回
			.then(({ data }) => this.setState({ data }))
	}
	// 存在期判断
	componentDidUpdate(oldProps) {
		// 只有最后一个阶段，this.属性数据更新
		// 要判断id更新了，再请求。
		if (oldProps.match.params.id !== this.props.match.params.id) {
			// 更新数据
			this.getData();
		}
	}
	// 进入评论页面
	showComments() {
		// js方法跳转
		// window.location.hash = '#/comments/' + this.state.data.id;
		// 通过路由实现跳转
		// console.log(this.props.history)
		// 路由中不要添加#
		// 不能返回的跳转
		// this.props.history.replace('/comments/' + this.state.data.id)
		// 保留记录
		this.props.history.push('/comments/' + this.state.data.id)
	}
	// 渲染
	render() {
		// console.log(this.state)
		// 缓存数据
		let { data } = this.state;
		return (
			<div className="page-detail">
				<h1>{data.title}</h1>
				<p className="status">
					<span className="time">{data.time}</span>
					<span className="comments">{'评论:' + data.comment}</span>
				</p>
				<img src={data.img} alt=""/>
				<p className="content" dangerouslySetInnerHTML={{ __html: data.content }}></p>
				{/*<Button type="primary" href={'#/comments/' + data.id} block className="detail-btn">查看更多评论</Button>*/}
				{/*js中跳转*/}
				<Button type="primary" onClick={this.showComments.bind(this)} block className="detail-btn">查看更多评论</Button>
				{/*<h1>Detail page</h1>
				<Button>hello</Button>
				<Button type="success" block>hello</Button>
				<Button type="info" onClick={e => console.log(111)}>hello</Button>
				<Button type="warning" href="#/home">hello</Button>
				<Button type="danger" className="demo">hello</Button>
				<Button type="primary">hello</Button>*/}
			</div>
		)
	}
}