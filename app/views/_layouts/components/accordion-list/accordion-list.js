import AccordionItem from '../accordion-item/accordion-item';

export default class AccordionList {
	state = {};

	constructor(el, List) {
		this.el = el;
		this.render(this.el);
		this.List = List;
	}

	render() {
		this.el.insertAdjacentHTML(
			'beforeend',
			'<div class="accordion-list js-accordion-list"></div>'
		);

		this.accordionList = this.el.querySelector('.js-accordion-list');
	}

	update(next) {
		Object.assign(this.state, next);

		const accordionList = this.state;
		const obsolete = new Set(this.accordionList.children);
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
				this.accordionItem = new AccordionItem(child, this.List);
			}
			this.accordionItem.update({ ...accordion });
			return child;
		});

		obsolete.forEach((child) => {
			this.accordionList.removeChild(child);
		});

		children.forEach((child, index) => {
			if (child !== this.accordionList.children[index]) {
				this.accordionList.insertBefore(
					child,
					this.accordionList.children[index]
				);
			}
		});
	}
}
