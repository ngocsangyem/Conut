import AccordionItem from '../accordion-item/accordion-item';

export default class AccordionList {
	state = {
		accordions: [],
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

		const obsolete = new Set(this.el.children);
		const childrenByKey = new Map();

		obsolete.forEach((child) => {
			childrenByKey.set(child.getAttribute('data-key'), child);
		});

		let children = this.state.accordions.map((accordion) => {
			let child = childrenByKey.get(accordion.id);

			if (child) {
				obsolete.delete(child);
			} else {
				child = document.createElement('div');
				child.className = 'accordion-item';
				child.setAttribute('data-key', accordion.id);
				this.accordionItem = new AccordionItem(child);
			}
			this.accordionItem.update({ accordion });
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
