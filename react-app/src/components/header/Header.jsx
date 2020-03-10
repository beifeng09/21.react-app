// 引入库
import React, { Component } from 'react';
// 引入样式
import './Header.less';
// 定义组件
export default class Header extends Component {
	// 渲染
	render() {
		// console.log(this)
		// 解构数据
		let { title, rightContent, onRightClick, children } = this.props
		return (
			<div className="ickt-header">
				<div className="go-back">
					<span className="arrow">
						<span className="arrow blue"></span>
					</span>
				</div>
				{/*如果传递了children使用children，否则使用title属性*/}
				<h1>{children || title}</h1>
				<div className="login" onClick={e => onRightClick(e)}>{rightContent}</div>
			</div>
		)
	}
}
// 默认属性
Header.defaultProps = {
	title: '',
	rightContent: '',
	onRightClick: () => {}
}