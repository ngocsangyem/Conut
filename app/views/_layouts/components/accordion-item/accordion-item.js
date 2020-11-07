import ComponentList from '../component-list/component-list';

import { switchClass } from '../../../_helpers/DOM/switchClass';
import { hasClass } from '../../../_helpers/DOM/hasClass';

export default class AccordionItem {
	state = {
		accordion: null,
	};

	constructor(el) {
		this.el = el;
		this.render();
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

		this.accordionItemName.innerText = this.state.accordion.name;
		this.accordionItemCount.innerText = this.state.accordion.components.length;
		this.componentList.update({
			components: this.state.accordion.components,
		});
	}
}
