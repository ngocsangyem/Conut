import { Sortable } from 'sortablejs';

import { generateId } from '../../../_helpers';
import { addClass, removeClass } from '../../../_helpers/DOM';
export default class PageViewContentItem {
	state = {
		name: '',
		id: generateId(5),
		components: {},
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

		const components = this.state.components;

		if (Object.keys(components).length > 0) {
			addClass(this.el, 'has-component');
		} else {
			removeClass(this.el, 'has-component');
		}
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
