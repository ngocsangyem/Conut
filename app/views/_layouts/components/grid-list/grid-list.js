import { Sortable } from 'sortablejs';

import GridItem from '../grid-item/grid-item';

import { toArray } from '../../../_helpers';

export default class GridList {
	state = {
		list: {},
	};

	constructor(el) {
		this.el = el;
		this.render();
		this.handleDragDrop();
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
				child.setAttribute('data-html', grid.html);
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

	handleDragDrop() {
		const _self = this;
		const sortable = Sortable.create(this.gridListEl, {
			group: {
				name: 'grid',
				pull: 'clone',
				put: 'child',
			},
			sort: false,
			onRemove: function (event) {
				_self.addGrid(event);
				_self.insertGridTemplate(event.item);
				_self.customTemplate(event.item);
				_self.setInfoForCustomTemplate(event.item);
			},
			onEnd: function (event) {
				_self.handleChildDragDrop(event.item);
			},
		});
	}

	addGrid(event) {
		const grid = event.item;
		const parent = event.from.parentNode;
		const gridInfo = {
			gridParentName: parent.dataset.name,
			gridParentId: parent.dataset.key,
			gridItemName: grid.dataset.name,
			gridItemId: grid.dataset.key,
		};

		this.el.dispatchEvent(
			new CustomEvent('addGrid', {
				detail: gridInfo,
				bubbles: true,
			})
		);
	}

	insertGridTemplate(gridItem) {
		gridItem.innerHTML = gridItem.dataset.html;
	}

	customTemplate(gridItem) {
		const child = gridItem.children[0];

		child.insertAdjacentHTML(
			'beforeend',
			'<span class="grid-item-name"></span><button class="grid-item-btn-delete"><i class="fal fa-times"></i></button>'
		);
	}

	setInfoForCustomTemplate(gridItem) {
		const child = gridItem.children[0];
		const gridItemName = child.querySelector('.grid-item-name');

		gridItemName.textContent = gridItem.dataset.name;
	}

	handleChildDragDrop(el) {
		const _self = this;
		toArray(
			el.querySelectorAll('.container, .grid, [class*="col-"]')
		).forEach((el) => {
			const sortable = Sortable.create(el, {
				group: {
					name: 'child',
					put: ['component', 'grid', 'child'],
				},
				fallbackOnBody: true,
				swapThreshold: 0.65,
				onEnd: function (event) {},
			});
		});
	}
}
