import GridItem from '../grid-item/grid-item';

export default class GridList {
	state = {
		list: {},
	};

	constructor(el) {
		this.el = el;
		this.render();
	}

	render() {
		this.el.insertAdjacentHTML(
			'beforeend',
			'<div class="grid-list list-render js-grid-list"></div>'
		);

		this.gridListEl = this.el.querySelector('.js-grid-list');
	}

	update(next) {
		Object.assign(this.state, next);

		const container = this.gridListEl;
		const gridList = this.state.list;
		const obsolete = new Set(container.children);
		const childrenByKey = new Map();

		obsolete.forEach((child) => {
			childrenByKey.set(child.getAttribute('data-key'), child);
		});

		const children = Object.keys(gridList).map((g) => {
			const grid = gridList[g];
			let child = childrenByKey.get(grid.id);

			if (child) {
				obsolete.delete(child);
			} else {
				child = document.createElement('div');
				child.className = 'grid-item';
				child.setAttribute('data-key', grid.id);
				child.setAttribute('data-name', g);
				this.gridItem = new GridItem(child);
			}

			this.gridItem.update({ ...grid });
			return child;
		});

		obsolete.forEach((child) => {
			container.removeChild(child);
		});

		children.forEach((child, index) => {
			if (child !== container.children[index]) {
				container.insertBefore(child, container.children[index]);
			}
		});
	}
}
