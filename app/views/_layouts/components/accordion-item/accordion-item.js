import ComponentList from '../component-list/component-list';

import {
	switchClass,
	hasClass,
	removeClass,
	selectorAll,
	parents,
} from '../../../_helpers/DOM';

export default class AccordionItem {
	state = {
		name: '',
		id: '',
		list: {},
	};

	constructor(el) {
		this.el = el;
		this.render();
		this.handleEvents();
	}

	render() {
		this.el.innerHTML = `
		<h4 class="accordion-item-title">
			<span class="accordion-item-name"></span>
			<span class="accordion-component-count"></span>
		</h4>
		`;

		this.accordionItemName = this.el.querySelector('.accordion-item-name');
		this.accordionItemCount = this.el.querySelector(
			'.accordion-component-count'
		);
		this.componentList = new ComponentList(this.el);
	}

	update(next) {
		Object.assign(this.state, next);

		this.accordionItemName.innerText = this.state.name;
		this.accordionItemCount.innerText = Object.keys(this.state.list).length;

		this.componentList.update({ list: this.state.list });
	}

	handleEvents() {
		this.el
			.querySelector('.accordion-item-title')
			.addEventListener('click', this.toggleAccordion);
	}

	toggleAccordion() {
		const parent = this.parentNode;
		const accordions = selectorAll(
			parents(this, '.pages-edit-sidepanel')[0],
			'accordion-item'
		);

		if (hasClass(parent, 'is-active')) {
			removeClass(parent, 'is-active');
		} else {
			switchClass(parent, accordions, 'is-active');
		}
	}
}
