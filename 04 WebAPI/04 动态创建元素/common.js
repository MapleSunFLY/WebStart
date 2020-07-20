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