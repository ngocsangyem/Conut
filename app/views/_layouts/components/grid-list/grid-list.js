export default class GridList {
	state = {
		grids: {
			containers: {},
			rows: {},
			cols: {},
		},
	};

	constructor(el) {
		this.el = el;
		this.render();
	}

	render() {
		this.el.insertAdjacentHTML(
			'afterbegin',
			'<div class="grid-list"></div>'
		);
	}

	update(next) {
		Object.assign(this.state, next);
	}
}
