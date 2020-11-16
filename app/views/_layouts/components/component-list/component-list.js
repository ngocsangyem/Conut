import { Sortable } from 'sortablejs';

import ComponentItem from '../component-item/component-item';
import { addClass, removeClass } from '../../../_helpers/DOM';

export default class ComponentList {
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
			'<div class="component-list js-component-list"></div>'
		);

		this.componentList = this.el.querySelector('.js-component-list');
	}

	update(next) {
		Object.assign(this.state, next);

		const componentList = this.state.list;
		const container = this.el.querySelector('.js-component-list');
		const obsolete = new Set(container.children);
		const childrenByKey = new Map();

		obsolete.forEach((child) => {
			childrenByKey.set(child.getAttribute('data-key'), child);
		});

		const children = Object.keys(componentList).map((c) => {
			const component = componentList[c];
			let child = childrenByKey.get(component.id);

			if (child) {
				obsolete.delete(child);
			} else {
				child = document.createElement('div');
				child.className = 'component-item';
				child.setAttribute('data-key', component.id);
				child.setAttribute('data-name', c);
				this.componentItem = new ComponentItem(child);
			}

			this.componentItem.update({ ...component });
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
		const pageViewContents = document.querySelector('.page-view-contents');
		const sortable = Sortable.create(this.componentList, {
			group: {
				name: 'component',
				pull: 'clone',
				put: false,
			},
			sort: false,
			onStart: function (event) {
				addClass(pageViewContents, 'is-dragging');
			},
			onEnd: function (event) {
				_self.addComponent(event);
				removeClass(pageViewContents, 'is-dragging');
			},
			onMove: function (event, originalEvent) {
				_self.insertComponentTemplate(event.dragged);
			},
		});
	}

	addComponent(event) {
		const component = event.item;
		const accordionName = event.from.parentNode.dataset.name;
		const componentName = component.dataset.name;
		const pageName = component.parentNode.dataset.content;

		this.el.dispatchEvent(
			new CustomEvent('addComponent', {
				detail: { accordionName, componentName, pageName },
				bubbles: true,
			})
		);
	}
	insertComponentTemplate(target) {
		const componentName = target.dataset.name;

		target.innerHTML = this.state.list[componentName].html;
	}
}
