const selectorAll = (el, className) =>
	Array.from(el.querySelectorAll('.' + className));

export { selectorAll };
