import ComponentList from '../component-list/component-list';

import { switchClass } from '../../../_helpers/DOM/switchClass';
import { hasClass } from '../../../_helpers/DOM/hasClass';

export default class AccordionItem {
	componentList = new ComponentList();

	render(accordion) {
		return `
			<div class="accordion-item">
				<h4 class="accordion-item-title">
					<span class="accordion-item-name">${accordion.name}</span>
					<span class="accordion-component-count">${accordion.components.length}</span>
				</h4>
				${this.componentList.render(accordion.components)}
			</div>
		`;
	}

	toggleAccordion(el) {
		Array.from(el.querySelectorAll('.accordion-item-title')).forEach(
			(title) => {
				const accordion = title.parentNode;
				title.addEventListener('click', () => {
					if (hasClass(accordion, 'is-active')) {
						accordion.classList.remove('is-active');
					} else {
						switchClass(
							accordion,
							Array.from(el.querySelectorAll('.accordion-item')),
							'is-active'
						);
					}
				});
			}
		);
	}
}
