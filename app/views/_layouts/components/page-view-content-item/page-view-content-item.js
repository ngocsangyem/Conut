import { Sortable } from 'sortablejs';

import { generateId } from '../../../_helpers';
import { addClass, removeClass } from '../../../_helpers/DOM';
export default class PageViewContentItem {
	state = {
		name: '',
		id: '',
		components: [],
	};

	constructor(el) {
		this.el = el;
		this.handleDragDrop();
	}

	render() {
		this.el.innerHTML = ``;
	}

	update(next) {
		Object.assign(this.state, next);
	}

	handleDragDrop() {
		const _self = this;
		const sortable = Sortable.create(this.el, {
			group: {
				name: 'component',
				pull: false,
			},
			onMove: function (event, originalEvent) {},
			onStart: function (event) {},
			onAdd: function (event) {
				const component = event.item;
			},
		});
	}
}
