import Component from '../../../_store/lib/component';
import store from '../../../_store/index';

import { switchClass } from '../../../_helpers/DOM/switchClass';
import { hasClass } from '../../../_helpers/DOM/hasClass';

export default class Sidepane extends Component {
	constructor() {
		super({
			store,
			element: document.querySelector('.js-component-accordions'),
		});
	}

	init() {
		this.render();
	}

	render() {
		const self = this;

		self.element.innerHTML = `
			${store.state.components
				.map((component) => {
					return `
					<div class="component-accordion">
						<h4 class="component-accordion-title">
							<span class="component-accordion-name">${component.name}</span>
							<span class="component-accordion-count">${component.list.length}</span>
						</h4>
						<div class="component-accordion-list js-component-accordion-list">
							${component.list
								.map((item) => {
									return `
								<div class="component-accordion-item">
									<figure>
										<img
											src="${item.image}"
											alt="${item.name}">
										<figcaption>
											<a href="/" target="_blank">${item.name}</a>
										</figcaption>
									</figure>
								</div>
								`;
								})
								.join('')}
						</div>
					</div>
				`;
				})
				.join('')}
		`;

		this.openAccordion(
			Array.from(self.element.querySelectorAll('.component-accordion')),
			Array.from(
				self.element.querySelectorAll('.component-accordion-title')
			)
		);
	}

	openAccordion(accordionItems, accordionTitles) {
		accordionTitles.forEach((title) => {
			const accordion = title.parentNode;
			title.addEventListener('click', () => {
				if (hasClass(accordion, 'is-active')) {
					accordion.classList.remove('is-active');
				} else {
					switchClass(accordion, accordionItems, 'is-active');
				}
			});
		});
	}
}
