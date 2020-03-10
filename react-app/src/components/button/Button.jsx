// 引入库
import React, { Component } from 'react';
// 引入样式
import './Button.less';
// 定义组件
export default class Button extends Component {
	// 渲染
	render() {
		// 解构属性数据
		let { type, block, href, className, onClick, children } = this.props;
		// console.log(this.props)
		// 定义类
		let cls = [
				'ickt-btn',
				'btn-' + type,
				block ? 'btn-block' : '',
				className
			].join(' ')
			// 去除收尾空白符
			.trim()
		// console.log(cls)
		// 如果传递了href是一个连接
		if (href) {
			return <a className={cls} href={href} onClick={e => onClick(e)}>{children}</a>
		}
		// if有return，else省略
		return <span className={cls} onClick={e => onClick(e)}>{children}</span>
	}
}
// 默认属性数据
Button.defaultProps = {
	type: 'default',
	onClick: () => {}
}