function query(selector, context=document) {
	return context.querySelector(selector);
}

function queryAll(selector, context=document) {
	return context.querySelectorAll(selector);
}

export { query, queryAll };