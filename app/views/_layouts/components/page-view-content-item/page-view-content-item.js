import { Sortable } from 'sortablejs';

import { generateId, toArray } from '../../../_helpers';
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
				put: ['component', 'grid'],
				pull: false,
			},
			onAdd: function (event) {
				addClass(_self.el, 'has-component');
			},
		});
	}

	handleChildDragDrop(el) {
		console.log('PageViewContentItem -> handleChildDragDrop -> el', el);
		toArray(
			el.querySelectorAll('.container, .grid, [class*="col-"]')
		).forEach((el) => {
			console.log(el);
		});
	}
}
