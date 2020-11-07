import ComponentItem from '../component-item/component-item';

export default class ComponentList {
	state = {
		components: [],
	};

	constructor(el) {
		this.el = el;
		this.render();
	}

	render() {
		this.el.insertAdjacentHTML(
			'beforeend',
			'<div class="component-list js-component-list"></div>'
		);
	}

	update(next) {
		Object.assign(this.state, next);

		const container = this.el.querySelector('.js-component-list');
		const obsolete = new Set(container.children);
		const childrenByKey = new Map();

		obsolete.forEach((child) => {
			childrenByKey.set(child.getAttribute('data-key'), child);
		});

		const children = this.state.components.map((component) => {
			let child = childrenByKey.get(component.id);

			if (child) {
				obsolete.delete(child);
			} else {
				child = document.createElement('div');
				child.className = 'component-item';
				child.setAttribute('data-key', component.id);
				this.componentItem = new ComponentItem(child);
			}

			this.componentItem.update({ component });
			return child;
		});

		obsolete.forEach((child) => {
			this.el.removeChild(child);
		});

		children.forEach((child, index) => {
			if (child !== container.children[index]) {
				container.insertBefore(child, container.children[index]);
			}
		});
	}
}
