import AccordionItem from '../accordion-item/accordion-item';

export default class AccordionList {
	state = {
		components: {},
	};

	constructor(el) {
		this.el = el;
		this.render(this.el);
	}

	render() {
		this.el.innerHTML = `
			<div class="accordion-list js-accordion-list">
			</div>
		`;
	}

	update(next) {
		Object.assign(this.state, next);

		const accordionList = this.state.components;
		const obsolete = new Set(this.el.children);
		const childrenByKey = new Map();

		obsolete.forEach((child) => {
			childrenByKey.set(child.getAttribute('data-key'), child);
		});

		const children = Object.keys(accordionList).map((a) => {
			const accordion = accordionList[a];
			let child = childrenByKey.get(accordion.id);

			if (child) {
				obsolete.delete(child);
			} else {
				child = document.createElement('div');
				child.className = 'accordion-item';
				child.setAttribute('data-key', accordion.id);
				child.setAttribute('data-name', a);
				this.accordionItem = new AccordionItem(child);
			}
			this.accordionItem.update({ ...accordion });
			return child;
		});

		obsolete.forEach((child) => {
			this.el.removeChild(child);
		});

		children.forEach((child, index) => {
			if (child !== this.el.children[index]) {
				this.el.insertBefore(child, this.el.children[index]);
			}
		});
	}
}
