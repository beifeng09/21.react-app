// 引入库
import React, { Component } from 'react';
// 引入样式
import './Discust.less';
// 定义组件
export default class Discust extends Component {
	// 渲染
	render() {
		// 解构数据
		let { data } = this.props;
		return (
			<div className="ickt-discust">
				<h3>{data.user}</h3>
				<p>{data.content}</p>
				<span>{data.time}</span>
			</div>
		)
	}
}
// 默认数据
Discust.defaultProps = {
	data: {}
}