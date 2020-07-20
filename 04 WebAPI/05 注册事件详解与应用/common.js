/**
 * [my$ 获取对应ID 标签]
 * @param  {[type]} id [标签Id] 
 * @return {[type]}    [标签] 
 */
function my$(id){
	return document.getElementById(id);
}

/**
 * [getFirstElementChild  获取节点内第一个元素，处理兼容性问题]
 * @param  {[type]} element [父节点] 
 * @return {[type]}         [第一个元素节点] 
 */
function getFirstElementChild(element){
	var node,nodes = element.childNodes,i=0;
	while(node = nodes[i++]) {
		if(node.nodeType === 1) {
			return node;
		}
	}
	return null;
}

/**
 * [setInnerText 设置元素对象文本 处理兼容性问题]
 * @param {[type]} element [元素对象]
 * @param {[type]} context [设置文本内容]
 */
function setInnerText(element,context){
	if (typeof element.innerText === 'string') {
		element.innerText = context;
	} else {
		element.textContext = context;
	}
}

/**
 * [addEventListener 处理注册事件的兼容性方法]
 * @param {[type]}   element   [注册事件的元素对象]
 * @param {[type]}   eventName [事件名称不带on 例：click mouseover]
 * @param {Function} fn        [回调方法]
 */
function addEventListener(element,eventName,fn){
	//如果不存在方法返回undefined 布尔值为false
	if(element.addEventListener){
		element.addEventListener(eventName,fn);
	}else if(element.attachEvent){
		element.attachEvent('on' + eventName,fn);
	}else {
		//等同于 element.onclick = fn; 点的方式同样可以以中括号的方式调用
		element['on' + eventName] = fn;
	}
}

/**
 * [getPage 获取点击位置页面距离]
 * @param  {[type]} e [点击返回对象]
 * @return {[type]}   [页面距离对象]
 */
function getPage(e){
	// 页面距离等于滚动距加展示界面距离
	var pageX = e.pageX || e.clientX + getScroll.scrollLeft;
	var pageY = e.pageY || e.clientY + getScroll.scrollTop;
	return {
		pageX:pageX,
		pageY:pageY
	}
}