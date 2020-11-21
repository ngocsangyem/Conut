export default class GridItem {
	state = {
		id: '',
		name: '',
		html: '',
		modifiers: [],
	};

	constructor(el) {
		this.el = el;
		this.render();
	}

	render() {
		this.el.insertAdjacentHTML('beforeend', '<h5></h5>');

		this.gridItemTitle = this.el.querySelector('h5');
	}

	update(next) {
		Object.assign(this.state, next);

		this.gridItemTitle.innerText = this.state.name;
	}
}
