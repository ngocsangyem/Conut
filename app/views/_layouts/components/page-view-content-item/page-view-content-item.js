export default class PageViewContentItem {
	state = {
		pages: [],
	};

	constructor(el) {
		this.el = el;
		this.render();
	}

	render() {
		this.el.innerHTML = ``;
	}

	update(next) {
		Object.assign(this.state, next);
	}
}
