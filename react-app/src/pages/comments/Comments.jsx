// 引入库
import React, { Component } from 'react';
// 引入组件
import Button from '../../components/button/Button';
import Discust from '../../components/discust/Discust';
// 引入axios
import axios from 'axios';
// 引入样式文件
import './Comments.less'

// 定义组件并暴露接口
export default class Comments extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 初始化状态
		this.state = {
			id: 0,
			list: [],
			userInput: ''
		}
	}
	// 组件创建前
	componentWillMount() {
		// 请求数据
		this.getData();
	}
	// 存在期，属性数据:路由id更新的时候，要请求数据
	componentDidUpdate(oldProps) {
		// 判断id更新了
		if (oldProps.match.params.id !== this.props.match.params.id) {
			// 请求数据
			this.getData();
		}
	}
	// 定义请求方法
	getData() {
		// 解构请求数据
		let { params } = this.props.match;
		// 请求数据
		axios
			.get('/data/comment.json', { params })
			// 监听数据返回
			// .then(({ data }) => this.setState({ id: data.id, list: data.list }))
			// 更新的对象就是data对象
			.then(({ data }) => this.setState(data))
	}
	// 如果是个位数，补0
	dealTime(time) {
		return time < 10 ? '0' + time : time;
	}
	// 提交数据
	submitData() {
		// console.log(this.state)
		// 解构数据
		let { userInput, id, list } = this.state;
		// 必须输入内容
		if (/^\s*$/.test(userInput)) {
			// 不合法，提示用户，并返回。
			alert('请输入内容');
			return;
		}
		// 获取时间
		let time = new Date();
		// 拼凑提交数据
		let data = {
			id,
			user: '雨夜清荷',
			content: userInput,
			time: `刚刚 ${this.dealTime(time.getHours())}:${this.dealTime(time.getMinutes())}:${this.dealTime(time.getSeconds())}`
		}
		// 发送请求
		axios
			// 理论上，提交数据都是发送post请求，但是create-react-app只能模拟get请求，所以用get请求模拟
			.get('/data/addComment.json', { params: data })
			// 监听数据返回
			.then(res => {
				// 显示数据
				if (res.data.errno === 0) {
					// 后面显示数据
					// list.push(data)
					// 前面显示数据
					list.unshift(data);
					// 更新数据,清空输入的内容
					this.setState({ 
						list,
						userInput: ''
					})
				}
			})
	}
	// 渲染评论
	createList() {
		// 根据list状态数据渲染
		return this.state.list.map((item, index) => <Discust key={index} data={item}></Discust>)
	}
	// 渲染
	render() {
		return (
			<div className="page-comments">
				<div className="input-container">
					<textarea value={this.state.userInput} onChange={e => this.setState({ userInput: e.target.value })} placeholder="文明上网，理性发言"></textarea>
					<Button type="primary" onClick={e => this.submitData()}>提交</Button>
				</div>
				{this.createList()}
			</div>
		)
	}
}