import Component from '../../../_store/lib/component';
import store from '../../../_store/index';

export default class Sidepane extends Component {
	constructor() {
		super({
			store,
			element: document.querySelector('.js-component-accordion'),
		});
	}

	render() {
		const self = this;

		self.element.innerHTML = `
			${store.state.components
				.map((component) => {
					return `
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
				`;
				})
				.join('')}
		`;
	}
}
