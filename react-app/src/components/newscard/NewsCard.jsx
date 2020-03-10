// 引入库
import React, { Component } from 'react';
// 引入路由导航
import { Link } from 'react-router-dom';
// 引入样式
import './NewsCard.less';
// 定义组件
export default class NewsCard extends Component {
	// 渲染
	render() {
		// console.log(this.props)
		// 解构数据
		let { data } = this.props;
		return (
			<Link to={'/detail/' + data.id} className="ickt-news-card">
				<img src={data.img} alt=""/>
				<div className="content">
					<h2>{data.title}</h2>
					<p>
						<span>{data.content}</span>
						<span className="comments">{'评论:' + data.comment}</span>
					</p>
				</div>
			</Link>
		)
	}
}
// 默认数据
NewsCard.defaultProps = {
	data: {}
}