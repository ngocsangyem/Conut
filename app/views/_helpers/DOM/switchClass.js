const switchClass = (element, listElement, className) => {
	listElement.map((element) => element.classList.remove(className));
	element.classList.add(className);
};

export { switchClass };
